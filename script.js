// const API_URL = 'http://localhost:3000'; 


async function busque() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro ao acessar busque:', error);
  }
}

busque();

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function filtrarEventos() {
  const termo = document.getElementById('campoBusca').value.toLowerCase();
  const eventos = document.querySelectorAll('.evento');

  eventos.forEach(evento => {
    const titulo = evento.querySelector('h2').textContent.toLowerCase();
    evento.style.display = titulo.includes(termo) ? 'block' : 'none';
  });
}

function comprarIngresso() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (usuarioLogado) {
    // Redireciona para a página do ingresso
    window.location.href = "/common/comprar_ingresso/comprar_ingresso.html";
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

