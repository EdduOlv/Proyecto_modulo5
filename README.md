![UDD logo](https://github.com/EdduOlv/Proyecto-_Modulo1/assets/156525513/2c9572c9-af59-4edd-a716-f23cc96296b4)


# Proyecto Modulo 5 Aplicación Web con React

Proyecto realizado en React Vite, es el desarrollo de una aplicación web para encontrar libros a través de la API de Google libros. El proyecto tiene que considerar los siguientes requerimientos:

## Requerimientos del proyecto

 - Uso de `vite` para la generación del proyecto
 - Crear componentes funcionales
 - Utilizar una API pública y mostrar los datos obtenidos en tu interfaz de usuario
 - Uso de Hooks (mínimo `useEffect` para los procesos asíncronos)
 - Implementar rutas en tu aplicación con `React Router`
 - Manejar errores de renderizado con `Error Boundaries`
 - Implementación CSS a través de un framework (`TailwindCSS`, `MUI`, `Bootstrap`)

 ## Mi proyecto

Mi proyecto esta implementado la API de Google libros, esta API pude recibir distintos tipos de peticiones ya sea por búsqueda en con el nombre de algún título en concreto o según su categoría enseñando tambien detalles del mismo.

Aquí el enlace para ver su documentación. https://developers.google.com/books/docs/v1/getting_started

# Estructura de carpetas de mi proyecto

```
Proyecto_Modulo_5
├─ src
│  └─ components
│     └─ BookCard.jsx
│     └─ InputSearch.jsx
│     └─ Layout.jsx
│     └─ Resultados.jsx
│     └─ BookCardSideNav.jsx
│  └─ pages
│     └─ Detail.jsx
│     └─ Genero.jsx
│     └─ Home.jsx
│     └─ index.css
│     └─ main.jsx
│     └─ Router.jsx
├─ .env
├─ index.html
├─ README.md
├─ package-lock.json
└─ package.json

```

## Detalles sobre las rutas

Mi proyecto cuenta con la implementación correcta de uso de rutas a través de un archivo router, que gestiona:

 - Layout
 - Home
 - Genero
 - Detail

Dejando como principal a Layout y Home enseñando una Sidevar que facilita la navegación y enseñando el contenido de las rutas a su derecha con Outlet.

## Detalles sobre los componentes

 - Layout
 - SideNav
 - Resultado
 - InputSearch
 - BookCard

Layout 

Encargado del como se muestra el contenido mostrando un SideNav y enseñando el contenido de las rutas a su derecha en Outlet.

SideNav

Barra de navegación lateral encargada del cómo se va a navegar entre las rutas, dejando fácil disponibilidad para añadir más.

Resultado 

Cumple de Caja en donde se van a enseñar las cartas y como será su disposición en la página.

InputSearch

Cuenta como input y componente de búsqueda, que hace la petición a la API para encontrar libros según la referencia escrita.

BookCard

Es la caja y la carta que da los estilos de cómo se enseña el tumbnail de la imagen dando de talles sobre nombre y autor.

# Despliegle

El despliegue para la visualicacion del proyecto sera atraves de netlyfi a traves de este enlace :



