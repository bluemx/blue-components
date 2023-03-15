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
BlueCookies(mainText, acceptedText, buttonText, customStyle, id) 
```

- **id**: Id único para el almacenamiento del localstorage. Debe ser diferente para cada sitio.
- **mainText**: HTML/texto a mostrar previo a la aceptación. 
- **acceptedText**: HTLM/texto a mostrar cuando ya se ha aceptado.+
- **buttonText**: Texto del botón.
- **customStyle**: Css aplicado al contenedor.

Ejemplo:

```html
  <script>
    BlueCookies("Do you consent to the use of cookies?", "✔ Cookies", "Accept", "background-color: #8bb8e8; color:#fff;", "cookiesconsent")
  </script>
```

---

## BlueFooter

Carga la pleca blue.

### Uso:
Añadir **&lt;blue-footer&gt;&lt;/blue-footer&gt;** en html.

```html
<blue-footer></blue-footer>
```