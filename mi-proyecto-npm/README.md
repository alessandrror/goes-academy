# Acerca del repositorio

Es un repositorio que recopila información en forma de guía sobre temas y herramientas del desarrollo web como lo son Git, GitHub y NPM.

Por tal motivo, es un repositorio con fines didácticos y no es necesaria la instalación del proyecto para darle seguimiento.

## Contenido solicitado

Se prentende explicar en mayor detalle las siguientes preguntas:

- ¿Cómo crear un proyecto con NPM?
- ¿Qué son los paquetes o módulos en NPM?
- ¿Qué son las dependencias y cómo gestionarlas (agregar, eliminar, actualizar)?
- ¿Qué son y cuál es la diferencia entre CommonJS y ESModule?
- ¿Qué es git, cómo funciona el rastreo de archivos y cómo ignorar archivos?

### ¿Cómo crear un proyecto con NPM?

[__NPM__](https://www.npmjs.com/) o como su nombre lo indica: ___No Puedo Más___ es el encargado de manejar los paquetes del famosísimo entorno de ejecución de JavaScript, [__NodeJs__](https://nodejs.org/).

Por tal motivo, un requisito para poder hacer uso de ___Nunca Pushear a Master___, es tener instalado NodeJs. Esto no es una guía enfocada en la instalación de NodeJs, así que es un requisito para seguir esta guía.

Sí aún no lo tienes instalado, te sugiero lo siguiente:

- Sí posees un sistema Windows, recomiendo una instalación de [__WSL2__](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux 2) que permite correr una Distro de Linux junto con Windows. Al tener instalado ___WSL2___, solo debes seguir los mismos pasos que los sistemas UNIX.

- Sí posees un sistema basado en UNIX como son Macos y Linux, puedes instalar una herramienta llamada [__NVM__](https://github.com/nvm-sh/nvm) que signifca ___Node Version Manager___, esta herramienta te permitirá manejar múltiples versiones de Node en tu sistema. Instalar ___NVM___ es tan fácil como ejecutar una línea de comandos mediante cURL:

  ```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  ```

  Una ves instalada, puedes corrobarar su versión mediante el siguiente comando:

  ```sh
  nvm -v
  ```

  Y para instalar una versión de Node LTS puedes lanzar el siguiente comando:

  ```sh
  nvm install --lts
  ```

  Con eso tendrás instalado ___NodeJs___ y ___NPM___.

  Para corrobarar la instalación solo debes correr los comandos:

  ```sh
  node -v
  ```

  Para verificar la versión de Node instalada.

  ```sh
  npm -v
  ```
  Para verificar la versión de NPM insalada.

- También puedes instalar las herramientas mediante gestores como ___brew___ o ___apt___, pero eso ya es elección de quién lo instala.

Una vez contemos con las herramientas, crear un proyecto con NPM nos será facilísimo. Solo necesitamos crear una carpeta donde almacenaremos nuestro proyecto y abrirla con nuestro editor de texto preferido.

En caso de que hayas instalado NVM desde WSL2, deberemos crear nuestra carpeta del proyecto dentro de un directorio de nuestro subsistema, esto es porque al instalar NVM desde WSL2, este está disponible únicamente desde WSL2. Por su puesto, Windows puede acceder a las carpetas que se encuentren dentro de nuestro subsistema y podremos abrir el directorio en nuestro editor de texto.

En mi caso, utilizo Visual Studio Code, así que puedo abrir una terminal integrada y verificando que estemos en la raíz del proyecto corremos el siguiente comando:

```sh
npm init -y
```

Este comando hará una serie de configuraciones por defecto en las que no entraremos en mucho detalle, pero con eso, se nos creará en la raíz del proyecto un archivo llamado ```package.json``` que cuando lo revisemos tendrá una estructura de un JSON de manera que se verá más o menos así:

```json
{
  "name": "nombre-del-directorio",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Te invito a que investigues que significan las diferentes propiedades que se agregaron de manera automática a ese JSON y en que altera el agregar ```-y``` después de ```npm init```.

De manera resumida, podemos decir que en este momento, ya hemos creado un proyecto con NPM. ¡Wuju! 🥳.

### ¿Qué son los paquetes o módulos en NPM?

Sí lo notaste, estuve llamando a ___NPM___ de maneras totalmente diferentes, y es que, dentro de la comunidad tiende a llamársele con otros nombres al verdadero significado, que es ___Node Package Manager___. Sabiendo esto, quizá ya tiene un poco más de lógica esta pregunta.

Se le conoce como paquetes o módulos, a todos aquéllos archivos que... XD después sigo xd