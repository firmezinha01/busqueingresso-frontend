const params = new URLSearchParams(window.location.search);
const evento = params.get('evento');

if (evento) {
  document.getElementById('titulo-evento').textContent = `Compra de ingresso para: ${evento}`;
  // Aqui você pode carregar os dados do evento, preço, etc.
}
