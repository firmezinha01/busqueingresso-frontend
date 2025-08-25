function comprarIngresso() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (usuarioLogado) {
    // Redireciona para a página do ingresso
    window.location.href = "/show_da_banda/show_da_banda.html";
  } else {
    // Redireciona para a página de login
    window.location.href = "/login/login.html";
  }
}

function criarEventos() {
  window.location.href = "/criar_evento/criar_evento.html";
}

function meusEventos() {
  window.location.href = "/meus_eventos/meus_eventos.html";
}

function meusIngressos() {
  window.location.href = "/meus_ingressos/meus_ingressos.html";
}

function cadastro() {
  window.location.href = "/cadastro/cadastro.html";
}