# car-sale

Aplicación Móvil que permita llevar el control de gestión de clientes para el sector automotriz a nivel nacional. la aplicación movil esta en ionic 4 y el backend en Nodejs, Express, TypeORM, MongoDB

## Guia de implementacion

1 - Comandos de docker para subir la base de datos de MongoDB, el nombre de la base de datos debe ser -> **car_sale_db**:
```sh
    $ docker pull mongo
    $ docker run --name mongodb -d -p 27017:27017 mongo
 ```
2 - En el proyecto backend en la carpeta data, se encuentran los collection que contiene la data mock inicial del proyecto.
   
```sh
    $ data/
 ```
 -  ***los nombres de los collection (se deben llamar igual en la BD)***
    - client.json
    - concessionarie.json
    - locality.json
       
3 - En la raiz del proyecto backend ejecutar
```sh
    $ npm i
    $ npm start
 ```

4 - Para correr la aplicacion movil entrar al proyecto appmobile y ejecutar los siguientes comandos para instalar las dependecias de la aplicación y luego subirla desde el browser:
```sh
    $ npm i
    $ ionic serve
```
