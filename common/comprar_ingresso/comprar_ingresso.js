function clicarLogo() {
  window.location.href = "/index.html";
}

const urlParams = new URLSearchParams(window.location.search);
const evento = urlParams.get('evento');

if (evento) {
  document.getElementById('titulo-evento').textContent = evento;
  localStorage.removeItem('eventoSelecionado');
}
