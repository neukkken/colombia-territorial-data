const data = require('./data/colombia.json');

const departamentos = data.departamentos;

function getDepartamentos() {
  return departamentos;
}

function getDepartamento(nombre) {
  return departamentos.find(d => d.nombre.toLowerCase() === nombre.toLowerCase());
}

function getDepartamentoPorCodigo(codigo) {
  return departamentos.find(d => d.codigo_dane === codigo);
}

function getMunicipios(departamento) {
  const depto = getDepartamento(departamento);
  return depto ? depto.municipios : [];
}

function getCapital(departamento) {
  const depto = getDepartamento(departamento);
  return depto ? depto.capital : null;
}

function buscarDepartamento(termino) {
  const t = termino.toLowerCase();
  return departamentos.filter(d =>
    d.nombre.toLowerCase().includes(t) ||
    d.capital.toLowerCase().includes(t) ||
    d.municipios.some(m => m.nombre.toLowerCase().includes(t))
  );
}

function todosLosMunicipios() {
  return departamentos.flatMap(d => d.municipios);
}

function buscarMunicipioPorCodigo(codigo) {
  for (const d of departamentos) {
    const m = d.municipios.find(m => m.codigo_dane === codigo);
    if (m) {
      return { ...m, departamento: d.nombre, codigo_departamento: d.codigo_dane };
    }
  }
  return null;
}

module.exports = {
  departamentos,
  getDepartamentos,
  getDepartamento,
  getDepartamentoPorCodigo,
  getMunicipios,
  getCapital,
  buscarDepartamento,
  todosLosMunicipios,
  buscarMunicipioPorCodigo,
};
