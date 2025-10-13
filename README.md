# Admin-Tasks: Aplicación de Gestión de Tareas

Esta es una aplicación móvil para la gestión de tareas, construida con Ionic y Angular. Permite a los usuarios crear, visualizar, editar y eliminar tareas, las cuales se almacenan localmente en el dispositivo para garantizar la persistencia de la información entre sesiones.

## Características Principales

- **Gestión de Tareas (CRUD):** Crear, leer, actualizar y eliminar tareas.
- **Navegación:** Navegación entre la lista de tareas, la creación y los detalles de la tarea.
- **Persistencia de Datos:** Las tareas se guardan en el `localStorage` del dispositivo.
- **Carga Diferida (Lazy Loading):** Las páginas se cargan bajo demanda para optimizar el rendimiento.
- **Validaciones de Formularios:** Se valida que los campos sean requeridos y que la fecha de vencimiento sea siempre una fecha futura.

## Tecnologías Utilizadas

- **Ionic:** Framework para la interfaz de usuario.
- **Angular:** Framework principal para la estructura y lógica de la aplicación.
- **TypeScript:** Lenguaje de programación.
- **Capacitor:** Herramienta para compilar la aplicación web a un proyecto nativo (Android en este caso).

## Estructura del Proyecto

El código fuente principal se encuentra en la carpeta `src/app` y se organiza de la siguiente manera:

- `src/app/pages/`: Contiene los componentes de página (`TareaPage`, `TareaDetallesPage`).
- `src/app/services/`: Contiene el servicio de lógica de negocio (`TareaService`).
- `src/app/models/`: Define la interfaz del modelo de datos (`Tarea`).
- `src/app/validators/`: Contiene validadores de formularios personalizados.

## Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/XavierHuerta/admin-tasks.git
    cd admin-tasks
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar en modo de desarrollo:**
    Para ver la aplicación en el navegador, ejecuta:
    ```bash
    ng serve
    ```
    O si tienes el CLI de Ionic:
    ```bash
    ionic serve
    ```

## Compilación para Android (Capacitor)

Para compilar la aplicación para Android, sigue estos pasos:

1.  **Construir la aplicación web:**
    ```bash
    npm run build
    ```

2.  **Sincronizar los recursos web con Capacitor:**
    ```bash
    npx cap sync
    ```

3.  **Abrir en Android Studio:**
    ```bash
    npx cap open android
    ```

    Desde Android Studio, puedes compilar, emular y generar el APK de la aplicación.
