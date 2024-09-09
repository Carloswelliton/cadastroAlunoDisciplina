const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render('index');
})

app.get("/cadastrar/aluno", (req, res)=>{
    res.render('cadastrarAluno');
})

app.get("/cadastrar/disciplina", (req, res)=>{
    res.render('cadastrarDisciplina');
})


app.post("/salvar/aluno", (req, res) => {
    const data = new Date();
    const formatter = new Intl.DateTimeFormat("pt-br", {day: "2-digit", month: "2-digit", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "shortOffset"});
    const dataFor = formatter.format(data);


    const aluno = {
        nome: req.body.nome,
        matricula: req.body.matricula,
        turma: req.body.turma,
        data: dataFor
    }
    const formatarData = (dataISO) => {
        const [ano, mes, dia] = dataISO.split("-");
        return `${dia}/${mes}/${ano}`;
    }
    const dataFormatada = formatarData(req.body.nascimento);
    
    const dataNascimento = {
        novaData: dataFormatada
    }

    res.render("salvarAluno", {
        aluno: aluno,
        dataNascimento: dataNascimento
    })
})

app.post("/salvar/disciplina", (req, res) => {

    const data = new Date();
    const disciplina = {
        disciplina: req.body.nomeDisciplina,
        professor: req.body.professor,
        codigo: req.body.codigo,
        turmaCodigo: req.body.turmaCodigo,
        data: data
    }

    res.render("salvarDisciplina", {    
        disciplina: disciplina
    });
})

app.get("/teste", (req, res) => {
    res.render("teste");
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{console.log("Runnnig server")});