document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validarFormulario()) {
      let nome = document.getElementById("nome").value;
      let cpf = document.getElementById("cpf").value;
      let idade = document.getElementById("idade").value;
      let telefone = document.getElementById("telefone").value;
      let dataNascimento = document.getElementById("dataNascimento").value;
      let email = document.getElementById("email").value;
      let senha = document.getElementById("senha").value;

      let dados = {
        nome: nome,
        cpf: cpf,
        idade: idade,
        telefone: telefone,
        dataNascimento: dataNascimento,
        email: email,
        senha: senha,
      };

      let dadosJson = JSON.stringify(dados, null, 2);

      document.getElementById("dadosJson").value = dadosJson;
    }
  });

function validarFormulario() {
  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let idade = document.getElementById("idade").value;
  let telefone = document.getElementById("telefone").value;
  let dataNascimento = document.getElementById("dataNascimento").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let confirmarSenha = document.getElementById("confirmarSenha").value;

  if (
    nome === "" ||
    cpf === "" ||
    idade === "" ||
    telefone === "" ||
    dataNascimento === "" ||
    email === "" ||
    senha === "" ||
    confirmarSenha === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return false;
  }

  return true;
}

function limparFormulario() {
  document.getElementById("cadastroForm").reset();
  document.getElementById("dadosJson").value = "";
}
