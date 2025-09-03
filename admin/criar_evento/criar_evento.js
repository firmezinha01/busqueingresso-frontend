function clicarLogo() {
    window.location.href = "/index.html";
}

document.getElementById("eventForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Evento publicado com sucesso!");
});


