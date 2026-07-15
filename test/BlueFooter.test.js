const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const files = ['src/BlueFooter.js', 'index.js'];

function loadBlueFooter(file) {
    const registry = new Map();

    class HTMLElement {
        constructor() {
            this.attributes = new Set();
            this.isConnected = false;
        }

        hasAttribute(name) {
            return this.attributes.has(name);
        }

        attachShadow() {
            this.shadowRoot = {
                children: [],
                replaceChildren: (...children) => {
                    this.shadowRoot.children = children;
                },
            };
            return this.shadowRoot;
        }
    }

    const context = {
        HTMLElement,
        customElements: { define: (name, elementClass) => registry.set(name, elementClass) },
        document: { createElement: () => ({ innerHTML: '', appendChild() {}, setAttribute() {} }) },
        IntersectionObserver: class {},
        localStorage: {},
        setTimeout,
        Promise,
    };

    const source = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    vm.runInNewContext(source, context, { filename: file });

    return registry.get('blue-footer');
}

for (const file of files) {
    test(`${file} reads dark after construction`, () => {
        const BlueFooter = loadBlueFooter(file);
        const footer = new BlueFooter();

        footer.attributes.add('dark');
        footer.isConnected = true;
        footer.connectedCallback();

        const html = footer.shadowRoot.children[0].innerHTML;
        assert.match(html, /\.cls-2\{fill:#fff;\}/);
    });

    test(`${file} keeps the default fill without dark`, () => {
        const BlueFooter = loadBlueFooter(file);
        const footer = new BlueFooter();

        footer.isConnected = true;
        footer.connectedCallback();

        const html = footer.shadowRoot.children[0].innerHTML;
        assert.match(html, /\.cls-2\{fill:#8ab7e9;\}/);
    });

    test(`${file} reacts when dark changes`, () => {
        const BlueFooter = loadBlueFooter(file);
        const footer = new BlueFooter();

        footer.isConnected = true;
        footer.connectedCallback();
        footer.attributes.add('dark');
        footer.attributeChangedCallback('dark', null, '');

        const html = footer.shadowRoot.children[0].innerHTML;
        assert.match(html, /\.cls-2\{fill:#fff;\}/);
    });
}
