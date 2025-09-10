const pessoasData = require("../data/pessoasData");
const { v4: uuidv4 } = require("uuid");
const NotFoundError = require("../errors/NotFoundError");
const ValidationError = require("../errors/ValidationError");
const DuplicateError = require("../errors/DuplicateError");
const InvalidCpfError = require("../errors/InvalidCpfError");

let nextId = 1;

// listar todas as pessoas
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
  // validações
  if (
    !dados.nome ||
    typeof dados.nome !== "string" ||
    dados.nome.trim() === ""
  ) {
    throw new ValidationError(
      "O campo nome é obrigatório e deve ser uma string não vazia."
    );
  }

  // validações CPF
  if (!dados.cpf || typeof dados.cpf !== "string") {
    throw new ValidationError(
      "O campo cpf é obrigatório e deve ser uma string."
    );
  }

  // remove caracteres nao numericos
  const clearCpf = dados.cpf.replace(/\D/g, "");

  if (clearCpf.length !== 11) {
    throw new InvalidCpfError(
      "O CPF deve conter exatamente 11 dígitos numéricos."
    );
  }

  // valida se todos os caracteres sao numeros
  if (!/^\d+$/.test(clearCpf)) {
    throw new InvalidCpfError("O CPF deve conter apenas números.");
  }

  // valida se nao é uma sequencia de numeros iguais
  if (/^(\d)\1{10}$/.test(clearCpf)) {
    throw new InvalidCpfError("CPF inválido (sequência de números iguais).");
  }

  // confere se o cpf ja esta cadastrado
  const cpfExistente = pessoasData.find((p) => p.cpf === clearCpf);
  if (cpfExistente) {
    throw new DuplicateError("O CPF informado já está cadastrado.");
  }

  // atualiza com as versao limpa
  dados.cpf = clearCpf;

  if (!dados.idade || typeof dados.idade !== "number" || dados.idade <= 0) {
    throw new ValidationError("O campo 'idade' deve ser um número positivo.");
  }

  const novaPessoa = {
    id: nextId++,
    matricula: uuidv4(),
    cpf: dados.cpf,
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

  // validações para atualização
  if (
    dados.nome &&
    (typeof dados.nome !== "string" || dados.nome.trim() === "")
  ) {
    throw new ValidationError("O campo 'nome' deve ser uma string não vazia.");
  }

  if (dados.cpf) {
    if (typeof dados.cpf !== "string") {
      throw new ValidationError("O campo 'cpf' deve ser uma string.");
    }

    const clearCpf = dados.cpf.replace(/\D/g, "");

    if (clearCpf.length !== 11) {
      throw new InvalidCpfError(
        "O CPF deve conter exatamente 11 dígitos numéricos."
      );
    }

    if (!/^\d+$/.test(clearCpf)) {
      throw new InvalidCpfError("O CPF deve conter apenas números.");
    }

    if (/^(\d)\1{10}$/.test(clearCpf)) {
      throw new InvalidCpfError("CPF inválido (sequência de números iguais).");
    }

    dados.cpf = clearCpf;

    const cpfExistente = pessoasData.find(
      (p) => p.cpf === dados.cpf && p.id !== id
    );
    if (cpfExistente) {
      throw new DuplicateError(
        "O CPF informado já está cadastrado para outra pessoa."
      );
    }
  }
  if (dados.idade !== undefined) {
    if (typeof dados.idade !== "number" || dados.idade <= 0) {
      throw new ValidationError("O campo 'idade' deve ser um número positivo.");
    }
  }

  pessoasData[index] = { ...pessoasData[index], ...dados };
  return pessoasData[index];
};

// deletar pessoa
exports.deletarPessoa = (id) => {
  const index = pessoasData.findIndex((p) => p.id === id);
  if (index === -1) throw new NotFoundError("Cliente não encontrado");
  // splice: deleta um item e adiciona outro
  pessoasData.splice(index, 1);
  return true;
};
