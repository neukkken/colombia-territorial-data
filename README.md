# Colombia - Departamentos, Municipios y Ciudades

Paquete npm con la lista completa de todos los departamentos, municipios y ciudades de Colombia, incluyendo **códigos DANE**.

## Instalación

```bash
npm install colombia-territorial
```

## Uso

```javascript
const colombia = require('colombia-territorial');

// Todos los departamentos (con códigos DANE)
console.log(colombia.departamentos);

// Buscar un departamento específico
console.log(colombia.getDepartamento('Antioquia'));

// Buscar departamento por código DANE
console.log(colombia.getDepartamentoPorCodigo('05'));

// Obtener municipios de un departamento (objetos con nombre y codigo_dane)
console.log(colombia.getMunicipios('Cundinamarca'));

// Obtener capital de un departamento
console.log(colombia.getCapital('Valle del Cauca'));

// Buscar departamentos por término
console.log(colombia.buscarDepartamento('San'));

// Todos los municipios del país
console.log(colombia.todosLosMunicipios());

// Buscar municipio por código DANE
console.log(colombia.buscarMunicipioPorCodigo('05001'));
```

## Datos

- **33 departamentos** (incluyendo Bogotá D.C.)
- **~1.100 municipios**
- **Códigos DANE** incluidos para departamentos y municipios

## API

| Función | Descripción |
|---------|-------------|
| `getDepartamentos()` | Todos los departamentos con nombre, capital, código DANE y municipios |
| `getDepartamento(nombre)` | Busca departamento por nombre |
| `getDepartamentoPorCodigo(codigo)` | Busca departamento por código DANE (ej. `"05"`) |
| `getMunicipios(departamento)` | Lista de municipios (objetos con `nombre` y `codigo_dane`) |
| `getCapital(departamento)` | Nombre de la capital |
| `buscarDepartamento(termino)` | Busca departamentos por nombre, capital o municipio |
| `todosLosMunicipios()` | Todos los municipios del país con sus códigos DANE |
| `buscarMunicipioPorCodigo(codigo)` | Busca un municipio por código DANE (ej. `"05001"`) |

## Licencia

MIT
