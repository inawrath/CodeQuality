# Code Quality

Se solicita una optimización de codigo para una class de Login, la cual presenta un uso(y abuso) de iteraciones para las distintas acciones de un CRUD.
### Requerimientos
- Optimizar el codigo de una manera que quede optima.

### Analisis
- Uso innecesario de arreglos
- Uso innecesarios de funciones redudantes
- Uso casi rayando en lo absurdo de ciclos

### Posibles soluciones
- Se analiza que una alternativa al uso de arreglos. Esta puede ser el uso de Objects, Maps o WeakMaps.
--Objects:
    * ¿Por qué?
    ** Acceso directo a la posición/definición de un indice dentro del objeto, lo cual permite todo el CRUD de manera inmediata sobre el elemento.
--Maps:
    * ¿Por qué?
    ** Permite el uso de metodos `set`, `get`, `has` los cuales son bastante más rapido que consultar por indices que existan.
--WeakMaps:
    * ¿Por qué?
    ** Permite el uso de metodos `set`, `get`, `has`los cuales son bsatante más rapidos que consultar por indices que existan.
    * ¿Por qué no?
    ** El Garbage Collector hace limpieza de su contenido cada vez que no se esta referenciando, por ende, se perdera el contenido en memoria, lo cual no es util en este caso.

# Solución utilizada
- Se utilizan Maps para el manejo de usuarios.
- Se elimino el uso innecesario de funcionalidades y de ciclos inefiencientes los cuales fueron reemplazados por funciones propias de Maps.

# Instalación
La versión de NodeJS utilizada es la `v6.11.2`
Para inicializar el proyecto se deben instalar los modulos con NPM o mediante Yarn

**NPM**
```sh
npm i
```

**Yarn**
```sh
yarn
```

# Correr proyecto
Para correr el proyecto se puede utilizar el comando `node index.js` para una prueba sencilla del nuevo codigo, el cual esta en la carpeta `class` en el archivo `LoginOptimized.js`


# Benchmark
Para comprobar el benchmark se debe utilizar
```sh
node benchmark.js
```