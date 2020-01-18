# car-sale

Aplicación Móvil que permita llevar el control de gestión de clientes para el sector automotriz a nivel nacional.

## Guiar de implementacion

1 - Comandos de docker para subir la base de datos de MongoDB:
```sh
    $ docker pull mongo
    $ docker run --name mongodb -d -p 27017:27017 mongo
 ```
2 - En el royecto backend, importar los collection que contiene la data mock inicial del proyecto, se encuentra en la carpeta data
```sh
    $ data/
 ```
3 - En la raiz del proyecto ejecutar
```sh
    $ npm i
    $ npm start
 ```

4 - Para correr la aplicacion movil entrar al proyecto appmobile y ejecutar los siguientes comandos para instalar las dependecias de la aplicación y luego subirla desde el browser:
```sh
    $ npm i
    $ ionic serve
```
