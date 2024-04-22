document.getElementById("form_login").addEventListener("submit", function(event) {
    // Evitar que o formulário seja enviado normalmente
    event.preventDefault();
    
    // Redirecionar para a página desejada
    window.location.href = "telainicial.html";
});
