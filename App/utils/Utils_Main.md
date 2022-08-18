# Utils -- Folder

En esta carpeta se pueden ver los siguientes modulos los cuales contienen instancias para poder usar en los documentos y en las acciones, este tipo de estrucutura se sigue también en el proyecto de remix que son las instancias en los archivos y los metodos que son reutilizables.

> Aunque algunos archivos que tengan un nombre en el archivo, pueden estar mal.

## firebaseConfig

Este archivo contiene las credenciales del proyecto de firebase, aunque para seguir buenas practicas se tienen que colocar en variables de entorno con el paquete "dotenv" y de las variables de entorno sacarlas y colocarlas en vez de las credenciales.

## auth.client

En este archivo se tiene la instancia de autenticación la cual es usada para obtener algunos métodos que se usan para realizar acciones en las pantallas.

## db.server

Se puede encontrar principalmente lo que sería la instancia de la base de datos aunque también se tienen algunos metodos que pueden ser reutilizados.

## storage.server

Solo se tienen la instancia de storage para poder acceder a las fotos que se tiene guardada en el bucket
