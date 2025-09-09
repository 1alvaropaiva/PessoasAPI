var express = require("express");
const setupSwagger = require("./swagger");
var app = express();

// middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// configura swagger
setupSwagger(app);

// importa rotas
var pessoasRoutes = require("./routes/pessoas");

// usa rotas de pessoas com prefixo /pessoas
app.use("/pessoas", pessoasRoutes);

// rota padrão
app.get("/", (req, res) => {
  res.send("online");
});

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000");
});
