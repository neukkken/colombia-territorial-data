const data = require('./data/colombia.json');

const departamentos = data.departamentos;

function getDepartamentos() {
  return departamentos;
}

function getDepartamento(nombre) {
  return departamentos.find(d => d.nombre.toLowerCase() === nombre.toLowerCase());
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
    d.municipios.some(m => m.toLowerCase().includes(t))
  );
}

function todosLosMunicipios() {
  return departamentos.flatMap(d => d.municipios);
}

module.exports = {
  departamentos,
  getDepartamentos,
  getDepartamento,
  getMunicipios,
  getCapital,
  buscarDepartamento,
  todosLosMunicipios
};
