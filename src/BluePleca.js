class BluePleca extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bluecomponents-pleca">
                <div><div class="bc-pcol"></div></div>
                <div><div class="bc-pcol"></div></div>
                <div><div class="bc-pcol"></div></div>
                <div><div class="bc-pcol"></div></div>
                <div><div class="bc-pcol"></div></div>
                <div><div class="bc-pcol"></div></div>
            </div>
            `;
        
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Element is in viewport');
                    this.animatePleca(div);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        this.intersectionObserver.observe(this);

        // Adding styles
        const style = document.createElement('style');
        style.textContent = `
            .bluecomponents-pleca {
                width: 100%;
                height: 6px;
                display: flex;
            }
            .bluecomponents-pleca>div {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;                
            }
            .bluecomponents-pleca>div:nth-child(even) { background: rgba(0,0,0,0.1); }
            .bluecomponents-pleca>div:nth-child(odd) { background: rgba(0,0,0,0.2); }

            .bluecomponents-pleca>div:nth-child(1) { width: 20%;  }
            .bluecomponents-pleca>div:nth-child(2) { width: 12%; }
            .bluecomponents-pleca>div:nth-child(3) { width: 8%;  }
            .bluecomponents-pleca>div:nth-child(4) { width: 12%;  }
            .bluecomponents-pleca>div:nth-child(5) { width: 8%;  }
            .bluecomponents-pleca>div:nth-child(6) { width: 40%;  }
            .bluecomponents-pleca .bc-pcol { width: 100%;  }
            .bluecomponents-pleca div:nth-child(1) .bc-pcol {  background: #092E58;  }
            .bluecomponents-pleca div:nth-child(2) .bc-pcol {  background: #93b6e3;  }
            .bluecomponents-pleca div:nth-child(3) .bc-pcol {  background: #6BC349;  }
            .bluecomponents-pleca div:nth-child(4) .bc-pcol {  background: #A02492;  }
            .bluecomponents-pleca div:nth-child(5) .bc-pcol {  background: #FF691C; }
            .bluecomponents-pleca div:nth-child(6) .bc-pcol {  background: #FF0096;  }

            @keyframes animateHeight {
                0% { height: 0;  }
                20% { height: 160%;  }
                100% { height: 100%; }
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(div);
    }
    animatePleca(thedivs) {
        const plecaDivs = thedivs.querySelectorAll('.bc-pcol');
        plecaDivs.forEach((div, index) => {
            console.log(div)
            div.style.animation = 'none';
            div.offsetHeight;
            div.style.animation = `animateHeight 0.8s forwards ${index * 0.1}s`;
        });
    }
}
customElements.define('blue-pleca', BluePleca);
