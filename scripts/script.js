document.getElementById("submit").addEventListener("click", function (event) {
    
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("tel").value;

    if (name && email && tel) {
        alert("Enviado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }

    console.log(event);

});
