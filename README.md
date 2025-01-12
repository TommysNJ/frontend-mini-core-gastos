# Sistema de Gestión de Gastos - Frontend

## Descripción del Proyecto
Este es el frontend del sistema de gestión de gastos, desarrollado con **React.js** para proporcionar una interfaz de usuario moderna, minimalista y fácil de usar. Permite a los usuarios filtrar y visualizar los gastos por departamento en un rango de fechas.

### Características:
- Entrada de rango de fechas para filtrar gastos.
- Visualización en tabla de los totales de gastos por departamento.
- Diseño minimalista centrado en la experiencia del usuario.

### Tecnologías utilizadas:
- **React.js**: Framework para construir la interfaz de usuario.
- **Axios**: Para realizar solicitudes HTTP al backend.
- **CSS**: Para el diseño y estilo minimalista.

---

## Tabla de Contenidos
1. Instalación y Configuración
2. Uso del Proyecto
3. Estructura de Componentes
4. Créditos

---

## Instalación y Configuración
### Requisitos previos:
1. Tener **Node.js** o **Yarn** instalados.

### Pasos de instalación:
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Instala las dependencias:
   ```bash
   yarn install
   ```
3. Inicia el proyecto en modo de desarrollo:
   ```bash
   yarn start
   ```

---

## Uso del Proyecto
### Estructura de la aplicación:
- **CalcularGastos**: Componente principal donde se ingresan las fechas, se realiza la consulta al backend y se visualizan los resultados.

### Flujo principal:
1. El usuario ingresa un rango de fechas (inicio y fin).
2. Presiona el botón "Calcular".
3. Los datos de gastos son recuperados desde el backend y se muestran en una tabla con los totales por departamento.

---

## Créditos
Este frontend fue desarrollado por **Tommy** como parte del sistema de gestión de gastos. 

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
