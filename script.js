async function busque() {
  try {
    const response = await fetch('https://busqueingresso-backend.vercel.app/api/endpoint');
    const data = await response.json();
    console.log(data); // ou atualize o DOM com os dados
  } catch (error) {
    console.error('Erro ao acessar busque:', error);
  }
}

busque();


function comprarIngresso() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (usuarioLogado) {
    // Redireciona para a página do ingresso
    window.location.href = "";
  } else {
    // Redireciona para a página de login
    window.location.href = "/common/login/login.html";
  }
}

function criarEventos() {
  window.location.href = "/admin/criar_evento/criar_evento.html";
}

function meusEventos() {
  window.location.href = "/admin/meus_eventos/meus_eventos.html";
}

function meusIngressos() {
  window.location.href = "/client/meus_ingressos/meus_ingressos.html";
}

function cadastro() {
  window.location.href = "/common/cadastro/cadastro.html";
}