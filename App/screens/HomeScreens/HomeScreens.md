# Home Screens

Como dice en el nombre, en esta carpeta se pueden encontrar las pantallas que son de las primeras que se podrán ver después de ingresar a tu cuenta, aunque de alguna manera es diferente, no solo muestra los productos

## FeedHomeScreen

En esta pantalla es la principal, la que mostrará los productos desordenados según la elección del usuario.

Pero en esta misma lo que se tiene es que cuando se registra un usuario nuevo y es del tipo vendendor, o cada vez que se va a renderizar la pantalla, este checa que no se cumplan ciertas condiciones para poder mostrar las cosas.

Practicamente checa que en el contexto del perfil y del usuario autenticado, en la propiedad de tipo de cuenta si es que es vendedor, y también checa si no tienen un "id" en el atributo "storeProfileId", lo que significaría que el usuario no tiene una tienda creada.
Pero si es que estas se cumplen, entonces muestra un "Modal" el cual es usado para crear la tienda. Después de crearla, se cierra sesión

> Esta es una manera de hacerlo, pero después se va a poder cambiar.

> Aún faltaria poder traer los productos de la base de datos y mostrarlos.
