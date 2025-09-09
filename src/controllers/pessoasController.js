const pessoasService = require("../services/pessoasService");

// GET (list)
exports.getPessoas = (req, res) => {
  const pessoas = pessoasService.listPessoas();
  res.json(pessoas);
};

// GET by id
exports.getPessoaById = (req, res) => {
  const pessoa = pessoasService.findPessoaById(parseInt(req.params.id));
  if (!pessoa) {
    return res.status(404).json({ message: "Pessoa não encontrada" });
  }
  res.json(pessoa);
};

// GET by matricula
exports.getPessoaByMatricula = (req, res) => {
  const matricula = req.params.matricula.trim(); // remove espaços extras
  const pessoa = pessoasService.findPessoaByMatricula(matricula);
  if (!pessoa) {
    return res.status(404).json({ message: "Pessoa não encontrada" });
  }
  res.json(pessoa);
};


// POST (criar)
exports.createPessoa = (req, res) => {
  const novaPessoa = pessoasService.criarPessoa(req.body);
  res.status(201).json(novaPessoa);
};

// PUT (atualizar)
exports.updatePessoa = (req, res) => {
  const pessoaAtualizada = pessoasService.atualizarPessoa(parseInt(req.params.id), req.body);
  if (!pessoaAtualizada) {
    return res.status(404).json({ message: "Pessoa não encontrada" });
  }
  res.json(pessoaAtualizada);
};

// DELETE (remover)
exports.deletePessoa = (req, res) => {
  const removida = pessoasService.deletarPessoa(parseInt(req.params.id));
  if (!removida) {
    return res.status(404).json({ message: "Pessoa não encontrada" });
  }
  res.json({ message: "Pessoa removida com sucesso" });
};
