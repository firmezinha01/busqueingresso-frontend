
// function clicarLogo() {
//     window.location.href = "/index.html";
// }

// document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
//   e.preventDefault()

//   const senha = document.getElementById('senha').value
//   const confSenha = document.getElementById('conf_senha').value
//   if (senha !== confSenha) {
//     document.getElementById('mensagem').textContent = 'As senhas não coincidem.'
//     return
//   }

//   const dados = {
//     nome: document.getElementById('nome').value,
//     data_nascimento: document.getElementById('data_nascimento').value,
//     cpf: document.getElementById('cpf').value,
//     email: document.getElementById('email').value,
//     telefone: document.getElementById('telefone').value,
//     endereco: document.getElementById('endereco').value,
//     username: document.getElementById('username').value,
//     senha_hash: senha 
//   }

//   try {
//     const resposta = await fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(dados)
//     })

//     const resultado = await resposta.json()
//     if (resposta.ok) {
//       document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!'
//       document.getElementById('cadastroForm').reset()
//     } else {
//       document.getElementById('mensagem').textContent = resultado.error || 'Erro ao cadastrar.'
//     }
//   } catch (erro) {
//     document.getElementById('mensagem').textContent = 'Erro de conexão com o servidor.'
//   }
// })


function clicarLogo() {
  window.location.href = "/index.html";
}

document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const senha = document.getElementById('senha').value;
  const confSenha = document.getElementById('conf_senha').value;
  const mensagem = document.getElementById('mensagem');

  if (senha !== confSenha) {
    mensagem.textContent = 'As senhas não coincidem.';
    return;
  }

  const dados = {
    nome: document.getElementById('nome').value,
    data_nascimento: document.getElementById('data_nascimento').value,
    cpf: document.getElementById('cpf').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    endereco: document.getElementById('endereco').value,
    username: document.getElementById('username').value,
    senha: senha
  };

  try {
    const resposta = await fetch('https://busqueingresso-backend.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();

    if (resposta.ok) {
      mensagem.textContent = 'Cadastro realizado com sucesso!';
      document.getElementById('cadastroForm').reset();
    } else {
      mensagem.textContent = resultado.error || 'Erro ao cadastrar.';
    }
  } catch (erro) {
    mensagem.textContent = 'Erro de conexão com o servidor.';
    console.error('Erro:', erro);
  }
});



