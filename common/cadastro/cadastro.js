// // script.js
// document.getElementById("cadastroForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     let senha = document.getElementById("senha").value;
//     let confSenha = document.getElementById("conf_senha").value;
//     let cpf = document.getElementById("cpf").value;
//     let telefone = document.getElementById("telefone").value;

//     if (senha !== confSenha) {
//         alert("As senhas não coincidem!");
//         return;
//     }

//     if (!validarCPF(cpf)) {
//         alert("CPF inválido!");
//         return;
//     }

//     if (!validarTelefone(telefone)) {
//         alert("Telefone inválido!");
//         return;
//     }

//     document.getElementById("mensagem").textContent = "Cadastro realizado com sucesso!";
//     document.getElementById("mensagem").style.color = "green";
// });

// // Função para validar CPF
// function validarCPF(cpf) {
//     return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
// }

// // Função para validar telefone
// function validarTelefone(telefone) {
//     return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
// }

// function clicarLogo() {
//     window.location.href = "/index.html";
// }

function clicarLogo() {
    window.location.href = "/index.html";
}

document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const senha = document.getElementById('senha').value
  const confSenha = document.getElementById('conf_senha').value
  if (senha !== confSenha) {
    document.getElementById('mensagem').textContent = 'As senhas não coincidem.'
    return
  }

  const dados = {
    nome: document.getElementById('nome').value,
    data_nascimento: document.getElementById('data_nascimento').value,
    cpf: document.getElementById('cpf').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    endereco: document.getElementById('endereco').value,
    username: document.getElementById('username').value,
    senha_hash: senha 
  }

  try {
    const resposta = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    })

    const resultado = await resposta.json()
    if (resposta.ok) {
      document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!'
      document.getElementById('cadastroForm').reset()
    } else {
      document.getElementById('mensagem').textContent = resultado.error || 'Erro ao cadastrar.'
    }
  } catch (erro) {
    document.getElementById('mensagem').textContent = 'Erro de conexão com o servidor.'
  }
})
