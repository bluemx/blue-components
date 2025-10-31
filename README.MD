# Blue-Components

# Demo

[Codepen](https://codepen.io/ealbinu/pen/abaEWqN?editors=1000)

# Instalación

```html
<script src="https://unpkg.com/@bluemx/blue-components"></script>
```

# Componentes

## BlueCookies

Muestra la aceptación de cookies.

### Uso:
Llamar a la función BlueCookies()

```js
BlueCookies(mainText, acceptedText, buttonText, customStyle, id, callback) 
```

- **id**: Id único para el almacenamiento del localstorage. Debe ser diferente para cada sitio.
- **mainText**: HTML/texto a mostrar previo a la aceptación. 
- **acceptedText**: HTLM/texto a mostrar cuando ya se ha aceptado.+
- **buttonText**: Texto del botón.
- **customStyle**: Css aplicado al contenedor.
- **callback** *(opcional)*: Función JavaScript a ejecutar cuando se acepta las cookies.

Ejemplo básico:

```html
  <script>
    BlueCookies("Do you consent to the use of cookies?", "✔ Cookies", "Accept", "background-color: #8bb8e8; color:#fff;", "cookiesconsent")
  </script>
```

Ejemplo con callback:

```html
  <script>
    BlueCookies(
      "Do you consent to the use of cookies?", 
      "✔ Cookies", 
      "Accept", 
      "background-color: #8bb8e8; color:#fff;", 
      "cookiesconsent",
      function() {
        console.log("Cookies accepted!");
        // Tu código personalizado aquí
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    )
  </script>
```

---

## BlueFooter

Carga el footer blue.

### Uso:
Añadir **&lt;blue-footer&gt;&lt;/blue-footer&gt;** en html.

```html
<blue-footer></blue-footer>
```

Usar no-powered quita "powered by".

```html
<blue-footer no-powered></blue-footer>
```



---

## BluePleca

Carga la pleca blue de colores con una altura de 6 pixeles y ancho al 100%.

### Uso:
Añadir **&lt;blue-pleca&gt;&lt;/blue-pleca&gt;** en html.

```html
<blue-pleca></blue-pleca>
```
