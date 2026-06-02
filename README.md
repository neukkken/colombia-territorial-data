# Colombia - Departamentos, Municipios y Ciudades

Paquete npm con la lista completa de todos los departamentos, municipios y ciudades de Colombia.

## Instalación

```bash
npm install colombia-territorial-data
```

## Uso

```javascript
const colombia = require('colombia-territorial-data');

// Todos los departamentos
console.log(colombia.departamentos);

// Buscar un departamento específico
console.log(colombia.getDepartamento('Antioquia'));

// Obtener municipios de un departamento
console.log(colombia.getMunicipios('Cundinamarca'));

// Obtener capital de un departamento
console.log(colombia.getCapital('Valle del Cauca'));

// Buscar departamentos por término
console.log(colombia.buscarDepartamento('San'));

// Todos los municipios del país
console.log(colombia.todosLosMunicipios());
```

## Datos

- **33 departamentos** (incluyendo Bogotá D.C.)
- **~1.100 municipios**
- Solo nombres (sin códigos Dane)

## Licencia

MIT
