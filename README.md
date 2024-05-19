# Descripción del proyecto

Este proyecto consiste en dos págines principales, `create-product-page` y `list-product-page`, que permiten a los usuarios crear y listar productos respectivamente.
Ambas páginas están desarrolladas utilizando componentes web basados en `lit-element` y `CellsPage`.

## Create Product Page

Esta página permite a los usuarios crear un nuevo producto. Los usuarios deben igresar el nombre del producto y su precio, y opcionalmente añadir una descripción, seleccionar una categoría y subir una imagen del producto.

- Dispara el evento `publish`, que se utiliza para enviar la información del producto a otras partes de la aplicación.
- Se asegura que los campos de nombre y precio no estén vacíos antes de permitir la creación del producto.
- Al navegar a la página de listado, el formulario se resetea a su estado inicial

## List Product Page

Esta página permite a los usuarios ver una lista de productos creados gracias al componente `bbva-web-card-product`, este permite así una representación visual de cada producto.

- Almacena la información del producto en el `localStorage` para su persistencia
- Muestra todos los productos almacenados en `localStorage`
- Permite a los usuarios eliminar productos de la lista
- Permite a los usuarios navegar de regreso a la página de creación de productos