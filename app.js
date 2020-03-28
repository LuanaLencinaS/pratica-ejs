const express = require('express');
const rotas = require('./src/routes');
const app = express();

// configurando express para aceitar o ejs
app.set("view engine", "ejs");
// para pegar coisas estaticas como imagens
app.use(express.static("public"));

app.set('views', 'src/views')


app.use(express.static('/public'))
app.use(rotas)
app.use((req, res)=>{
    return res.send("Acho que você se perdeu!");
})

app.listen(3300, ()=>console.log("Servidor rodando na porta 3300"))
