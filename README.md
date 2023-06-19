# API REST Productos

## Descripción de la API

La API REST Productos es una interfaz de programación de aplicaciones diseñada para gestionar los productos de una ferretería. Permite ver, agregar y editar los productos.

### URL base

La API se abre en el servidor local en el puerto 3000. Para utilizar la API, acceda a través de la URL `http://localhost:3000/api/`.

### Objetivos de la API

- Ver todos los productos: `GET /producto`
- Ver un producto por SKU: `GET /producto/:sku`
- Eliminar un producto por SKU: `DELETE /producto/:sku`
- Editar un producto por SKU: `PUT /producto/:sku`
- Editar solo el stock de un producto por SKU: `PATCH /producto/:sku`
- Agregar un producto: `POST /producto`

## Guía de Instalación

A continuación se detallan los pasos para instalar Node.js y npm en Windows y macOS, clonar el repositorio del proyecto y la instalación de los módulos necesarios.

### Instalación de Node.js y npm en Windows

1. Ve al sitio oficial de Node.js en https://nodejs.org.
2. Descarga la versión LTS (Long Term Support) recomendada para Windows.
3. Ejecuta el archivo de instalación descargado y sigue las instrucciones del instalador.
4. Acepta los términos de la licencia y selecciona la ubicación de instalación.
5. Haz clic en "Install" para comenzar la instalación.
6. Una vez finalizada la instalación, abre la línea de comandos (Command Prompt) o PowerShell.
7. Verifica que Node.js y npm se hayan instalado correctamente ejecutando los siguientes comandos:

``` bash
node -v
npm -v
```

### Instalación de Node.js y npm en macOS

1. Abre un navegador web y visita el sitio web oficial de Node.js en https://nodejs.org.
2. En la página principal de Node.js, verás dos versiones para descargar: "LTS" y "Current". Se recomienda descargar la versión LTS (Long-Term Support) para obtener una versión estable y con soporte a largo plazo. Haz clic en el botón de descarga correspondiente a la versión LTS.
3. Selecciona la versión de macOS que estás utilizando. Por lo general, hay dos opciones: "macOS Installer" y "macOS Binaries". La opción "macOS Installer" es más fácil de instalar, ya que proporciona un instalador gráfico. Haz clic en el botón de descarga correspondiente a "macOS Installer".
4. Una vez descargado el archivo de instalación, ábrelo haciendo doble clic en él. Esto iniciará el instalador de Node.js.
5. Sigue las instrucciones del instalador. Verás una serie de pantallas que te guiarán a través del proceso de instalación.
6. Acepta los términos de la licencia, selecciona la ubicación de instalación (generalmente se recomienda dejar la configuración predeterminada) y haz clic en "Install" o "Next" para continuar.
7. Durante la instalación, es posible que se te solicite ingresar tu contraseña de administrador. Proporciónala cuando se te solicite para permitir que el instalador realice los cambios necesarios en tu sistema.
8. Después de completar la instalación, verás una pantalla que indica que Node.js se ha instalado correctamente. Haz clic en "Finish" o "Close" para cerrar el instalador.
9. Para verificar que Node.js y npm se hayan instalado correctamente, abre la terminal y ejecuta los siguientes comandos:

``` bash
node -v
npm -v
```
### Clonar el repositorio del proyecto

1. Abre una ventana de terminal.
2. Navega hasta la ubicación deseada para clonar el repositorio.
3. Ejecuta el siguiente comando para clonar el repositorio:

``` bash
git clone https://github.com/karindk/ApiRestBDAvanzada
```

### Instalación de los módulos

1. Abre una ventana de terminal.
2. Navega hasta la raíz del proyecto clonado.
3. Ejecuta el siguiente comando para instalar los módulos necesarios:

``` bash
npm install
```

## Ejecución del servidor

Para iniciar el servidor y poner en funcionamiento la API REST de Productos, ejecute el siguiente comando:

``` bash
npm run start
```

El servidor se ejecutará y estará listo para recibir solicitudes a través de la URL http://localhost:3000/api/