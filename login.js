async function logar(event) {
  event.preventDefault(); // Impede o formulário de recarregar a página

  const email = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  try {
    const response = await fetch("https://busqueingresso-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const resultado = await response.json();

    if (response.ok) {
      alert("Login realizado com sucesso!");

      // Aqui você pode salvar o usuário no localStorage, se quiser manter sessão
      localStorage.setItem("usuario", JSON.stringify(resultado.usuario));

      window.location.href = "/index.html";
    } else {
      alert(resultado.error || "Erro ao fazer login.");
    }

  } catch (error) {
    console.error("Erro de conexão:", error);
    alert("Erro ao conectar com o servidor.");
  }
}

function cadastreSe() {
  window.location.href = "/common/cadastro/cadastro.html";
}

function clicarLogo() {
  window.location.href = "/index.html";
}
