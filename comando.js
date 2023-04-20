const form = document.getElementById("formularioDeContato");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const manha = document.getElementById("manha");
    const tarde = document.getElementById("tarde");
    const noite = document.getElementById("noite");

    if (nome.value === "") {
        alert('Por favor, preencha o campo de nome.');
        return;
    }

    if (sobrenome.value === "") {
        alert('Por favor, preencha o campo de sobrenome.');
        return;
    }

    if (telefone.value === "") {
        alert('Por favor, preencha o campo de telefone.');
        return;
    }

    if (email.value === "") {
        alert('Por favor, preencha o campo de email.');
        return;
    }

    if (mensagem.value === "") {
        alert('Por favor, preencha o campo de mensagem.');
        return;
    }

    if (manha.selectedOptions.length === 0 || tarde.selectedOptions.length === 0 || noite.selectedOptions.length === 0) {
        alert('Por favor, selecione o turno.');
        return;
    }

    alert("Formulário enviado com sucesso!"); 
    form.reset();
});
