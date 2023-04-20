const form = document.getElementById("formularioDeContato");

const nome = formulario.nome;
const sobrenome = formulario.sobrenome;
const telefone = formulario.telefone;
const email = formulario.email;
const mensagem = formulario.mensagem;
const manha = formulario.manha;
const tarde = formulario.tarde;
const noite = formulario.noite;


function validacaoDosCampos() {


    if (nome.value === "") {
        alert('Por favor, preencha o campo de nome.');
        nome.focus();
    }

    if (sobrenome.value === "") {
        alert('Por favor, preencha o campo de sobrenome.');
        sobrenome.focus();
    }

    if (telefone.value === "") {
        alert('Por favor, preencha o campo de telefone.');
        telefone.focus();
    }

    if (email.value === "") {
        alert('Por favor, preencha o campo de email.');
        email.focus();
    }

    if (mensagem.value === "") {
        alert('Por favor, preencha o campo de mensagem.');
        mensagem.focus();
    }

    if (manha.selectedOptions.length === 0 || tarde.selectedOptions.length === 0 || noite.selectedOptions.length === 0) {
        alert('Por favor, selecione o turno.');
        
    }

    alert("Formulário enviado com sucesso!");
    form.reset();
};

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
