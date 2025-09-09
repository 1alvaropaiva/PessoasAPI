const express = require("express");
const router = express.Router();
const pessoasController = require("../controllers/pessoasController");

// GET pessoas
router.get("/", pessoasController.getPessoas);

// GET pessoa by ID
router.get("/:id", pessoasController.getPessoaById);

// GET pessoa by matricula
router.get("/matricula/:matricula", pessoasController.getPessoaByMatricula);

// POST nova pessoa
router.post("/", pessoasController.createPessoa);

// PUT atualizar pessoa
router.put("/:id", pessoasController.updatePessoa);

// DELETE remover pessoa
router.delete("/:id", pessoasController.deletePessoa);

module.exports = router;
