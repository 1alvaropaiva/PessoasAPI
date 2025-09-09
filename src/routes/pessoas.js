const express = require("express");
const router = express.Router();
const pessoasController = require("../controllers/pessoasController");

// GET pessoas
/**
 * @swagger
 * /pessoas:
 *   get:
 *     summary: Lista todas as pessoas
 *     tags: [Pessoas]
 *     responses:
 *       200:
 *         description: Lista de pessoas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   matricula:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   idade:
 *                     type: integer
 */
router.get("/", pessoasController.getPessoas);

// GET pessoa by ID
/**
 * @swagger
 * /pessoas/{id}:
 *   get:
 *     summary: Busca pessoa pelo ID
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da pessoa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pessoa encontrada
 *       404:
 *         description: Pessoa não encontrada
 */
router.get("/:id", pessoasController.getPessoaById);

// GET pessoa by matricula
/**
 * @swagger
 * /pessoas/matricula/{matricula}:
 *   get:
 *     summary: Busca pessoa pela matrícula (UUID)
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         description: Matrícula da pessoa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pessoa encontrada
 *       404:
 *         description: Pessoa não encontrada
 */
router.get("/matricula/:matricula", pessoasController.getPessoaByMatricula);

// POST nova pessoa
/**
 * @swagger
 * /pessoas:
 *   post:
 *     summary: Cria uma nova pessoa
 *     tags: [Pessoas]
 *     requestBody:
 *       required: true
 *       description: Dados da nova pessoa
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - idade
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Pessoa criada com sucesso
 */
router.post("/", pessoasController.createPessoa);

// PUT atualizar pessoa
/**
 * @swagger
 * /pessoas/{id}:
 *   put:
 *     summary: Atualiza uma pessoa pelo ID
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da pessoa
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Dados para atualizar
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Pessoa atualizada com sucesso
 *       404:
 *         description: Pessoa não encontrada
 */
router.put("/:id", pessoasController.updatePessoa);

// DELETE remover pessoa
/**
 * @swagger
 * /pessoas/{id}:
 *   delete:
 *     summary: Remove uma pessoa pelo ID
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da pessoa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pessoa removida com sucesso
 *       404:
 *         description: Pessoa não encontrada
 */
router.delete("/:id", pessoasController.deletePessoa);

module.exports = router;
