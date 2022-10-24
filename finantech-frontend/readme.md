Proyecto base de frontend

•	Generación del proyecto con vite (alternativa a create-react-app)
•	Configuración de las bases del proyecto de integración
    - Creamos la carpeta en donde estará el proyecto y nos ubicamos ahí
    - Instalación de vite con npm create vite@latest
        Project name: Finantech-frontend
        Select a framework: React
        Select a variant: JavaScript
    - Ejecutamos code .
    - Dentro de la carpeta raíz del proyecto ejecutamos npm install
    - Despues npm run dev, lo cual nos ejecutará el entorno localmente en la dirección http://127.0.0.1:5173/
    - Con esto ya estaría ejecutable nuestra aplicación, lista para empezar a personalizar
•	Instalación de bootstrap con npm i bootstrap
•	Instalación de React Router npm i react-router-dom@6

Generación de formularios para signin/signup

•	Creación de formulario para signin
•	Creación de formulario para signup
    - Desinstalamos dependencias con npm uninstall @types/react y npm uninstall @types/react
    - Para ejecutar el avance lo hacemos con npm run dev

Configuración de Apollo Client y mutación

•	Configuración de Apollo Client
•	Realización de una llamada remota
    - Instalación de Apollo Client y GraphQL con npm i @apollo/client graphql

Mutación para guardar usuarios

•	Dotación de funcionalidad al registro de usuarios (signUp)
    - En apariencia quedó, ya no nos marcó error luego de editar algunos campor en el db/model/User.ts pero los usuarios no se registran en la database

Invocación de books

•	Realización de llamada a un query
•	Recuperación de los libros de nuestro backend

Postwork
