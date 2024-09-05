$(function(){
    $("#formAluno").on("submit", function(event){
        $("#erroNome").text("");
        $("#erroNascimento").text("");
        $("#erroMatricula").text("");
        $("#erroTurma").text("");   

        let valid = true;

        const name = $("#nome").val().trim();
        if(name.length < 3){
            $("#erroNome").text("O nome deve conter no mínimo 3 caracteres");
            valid = false
        }

        const mat = $("#matricula").val();
        if(mat.length < 8 || mat.length > 8){
            $("#erroMatricula").text("A matricula deve conter 8 caracteres");
            valid = false
        }

        const tur = $("#turma").val();
        if(tur.length < 4 || tur.length > 6){
            $("#erroTurma").text("A turma deve conter de 4 a 6 caracteres");
            valid = false
        }

        const ddn = $("#nascimento").val()
        if(ddn){
            const idadeNascimento = new Date(ddn);
            const hoje = new Date();
            const idade = hoje.getFullYear() - idadeNascimento.getFullYear();
            const mesDiff = hoje.getMonth() - idadeNascimento.getMonth();

            if(mesDiff < 0 || (mesDiff === 0 && hoje.getDate() < idadeNascimento.getDate() && hoje.getDate > hoje.getDate)){
                idade--;
                
            }
            if(idade < 17 || idade > 100){
                $("#erroNascimento").text("O estudante deve ter no mínimo 17 anos");
                valid = false;
            }
        }else{
            $("#erroNascimento").text("insira sua data de nascimento")
            valid = false;
        }

        if(valid == false){
            event.preventDefault();
        }

    })
})

$("#formDisciplina").on("submit", function(event){
    $("#erroNomeD").text("");
    $("#erroCodigo").text("");
    $("#erroProfessor").text("");
    $("#erroTurmaC").text("");

    let valid = true;

    const nome_disciplina = $("#nomeDisciplina").val().trim();
    if(nome_disciplina.length < 6){
        $("#erroNomeD").text("O nome deve conter no mínimo 6 caracteres");
            valid = false
    }

    const codigo = $("#codigo").val();
    if(codigo.length != 3 ){
        $("#erroCodigo").text("Código deve ser um número de 3 dígitos");
        valid = false
    }

    const professor = $("#professor").val().trim();
    if(professor.length < 3){
        $("#erroProfessor").text("Nome do professor deve ter no mínimo 3 caracteres.")
        valid = false
    }

    const cod_turma = $("#turmaCodigo").val();
    if(cod_turma.length < 4 || cod_turma.length > 6){
        $("#erroTurmaC").text("deve ser um número com mais de 4 dígitos e menos de 6 dígitos.");
        valid = false
    }

    if(valid == false){
        event.preventDefault();
    }
})