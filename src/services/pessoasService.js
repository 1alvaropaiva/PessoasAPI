let pessoasData = require("../data/pessoasData");
const { v4: uuidv4 } = require("uuid");

let nextId = 1;

// listar todas
exports.listPessoas = () => {
  return pessoasData;
};

// buscar por id
exports.findPessoaById = (id) => {
  return pessoasData.find((p) => p.id === id);
};

// buscar por matricula 
exports.findPessoaByMatricula = (matricula) => {
  return pessoasData.find((p) => p.matricula === matricula);
};


// criar nova pessoa
exports.criarPessoa = (dados) => {
  const novaPessoa = {
    id: nextId++,
    matricula: uuidv4(), 
    nome: dados.nome,
    idade: dados.idade,
  };
  pessoasData.push(novaPessoa);
  return novaPessoa;
};

// atualizar pessoa
exports.atualizarPessoa = (id, dados) => {
  const index = pessoasData.findIndex((p) => p.id === id);
  if (index === -1) return null;

  pessoasData[index] = { ...pessoasData[index], ...dados };
  return pessoasData[index];
};

// deletar pessoa
exports.deletarPessoa = (id) => {
  const index = pessoasData.findIndex((p) => p.id === id);
  if (index === -1) return false;

  // splice: deleta um item e adiciona outro
  pessoasData.splice(index, 1);
  return true;
};
