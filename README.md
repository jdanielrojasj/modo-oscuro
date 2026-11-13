# Modo oscuro

Una carta de restaurante con un botón para cambiar entre tema claro y oscuro. La página recuerda el tema elegido aunque cierres el navegador.

## Demo

[Ver la carta](https://jdanielrojasj.github.io/modo-oscuro/)

## Tecnologías

- HTML
- CSS
- JavaScript

## Qué he aprendido

- Guardar todos los colores en variables CSS y redefinirlas en `body.oscuro`: con solo poner o quitar una clase, cambia toda la página.
- Usar `classList.toggle` para que un mismo botón ponga y quite la clase, y `classList.contains` para saber en qué tema estoy.
- Recordar el tema entre visitas con `localStorage.setItem` y `localStorage.getItem`, y empezar en claro cuando no hay nada guardado.
- Meter en una función el código que se repite y llamarla desde varios sitios.
- Trabajar en una rama (`feature/tema-oscuro`) y fusionarla en `main` cuando todo funciona.
