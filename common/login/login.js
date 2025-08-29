
function cadastreSe() {
  window.location.href = "/common/cadastro/cadastro.html";
}

function clicarLogo() {
  window.location.href = "/index.html";
}

async function logar(evento) {
  evento.preventDefault(); // Impede o envio padrão do formulário

  const email = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  try {
    const response = await fetch('https://busqueingresso-backend.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();


    if (response.ok) {
  alert('Login realizado com sucesso!');
  localStorage.setItem('token', data.token);

  const evento = localStorage.getItem('eventoSelecionado');
  if (evento) {
    window.location.href = `/comprar.html?evento=${encodeURIComponent(evento)}`;
  } else {
    window.location.href = '/dashboard.html';
  }
}


    // if (response.ok) {
    //   alert('Login realizado com sucesso!');
    //   // Exemplo: salvar token e redirecionar
    //   localStorage.setItem('token', data.token);
    //   window.location.href = '/dashboard.html';
    // } else {
    //   alert(data.mensagem || 'Email ou senha inválidos.');
    // }
  } catch (error) {
    console.error('Erro ao tentar logar:', error);
    alert('Erro de conexão. Tente novamente mais tarde.');
  }
}

