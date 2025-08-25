function clicarLogo() {
  window.location.href = "/index.html";
}

document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
  e.preventDefault();

   console.log('Formulário enviado!'); 

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
    senha: senha,
    termos: document.getElementById('termos').checked
  };

const nomesCampos = {
  nome: 'Nome',
  data_nascimento: 'Data de Nascimento',
  cpf: 'CPF',
  email: 'Email',
  telefone: 'Telefone',
  endereco: 'Endereço',
  username: 'Username',
  senha: 'Senha',
  termos: 'Aceite dos Termos'
};

for (const [key, value] of Object.entries(dados)) {
  if (key === 'termos' && !value) {
    mensagem.textContent = `Você deve aceitar os Termos de Uso.`;
    return;
  } else if (key !== 'termos' && (!value || value.trim() === '')) {
    mensagem.textContent = `O campo "${nomesCampos[key]}" é obrigatório.`;
    return;
  }
}


  try {
    const resposta = await fetch('https://busqueingresso-backend.onrender.com/users', {
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



