var formC = document.forms.formCadastro
document.querySelector("#btCadastro").onclick = function () {
    if (formC.nome.value == "") {
        alert("Preenchar o nome")
    } else if (formC.email.value == "") {
        alert("Preencha o email!")
    } else if (!formC.email.value.includes('.', '@')) {
        alert("Preencha um e-mail válido");
    } else if (formC.telefone.value == "") {
        alert("Preencha o telefone!")
    } else if (formC.senha.value.length != 8) {
        alert("Preencha a senha com 8  dígitos!")
    } else if (formC.confirmarSenha.value.length != 8) {
        alert("Preencha a confirmação de senha com 8  dígitos!")
    } else if (formC.confirmarSenha.value != formC.senha.value) {
        alert("As senhas devem ser iguais");
    } else {

        formC.submit()
        localStorage.nomeCadastro = formC.nome.value
        localStorage.emailCadastro = formC.email.value
        localStorage.telefoneCadastro = formC.telefone.value
    }
}