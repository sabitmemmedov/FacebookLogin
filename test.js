var myForm = document.getElementById("myForm")
var errorMessage = document.getElementById("error-message")
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    // UserNamei yoxluyur
    if (!/^[A-Z].{5,}$/.test(username)) {
        showError("Username büyük harfle başlamalı ve en az 6 simvol olmalıdır.");
        return;
    }
    // Şifreni  yoxluyur
    if (password.length < 6 || password.length > 10 || !/[a-zA-Z]/.test(password)) {
        showError("Şifre minimum 6, maksimum 10 simvol uzunluğunda olmalı ve en az 1 herf olmalidir.");
        return;
    }
    // E-posta ni yoxlayir
    if (!email.includes("@") || !email.includes(".")) {
        showError("E-posta adresi kecerli deyil . @ simvolu ve noqte olmalidir.");
        return;
    }
    var userData = {
        username: username,
        password: password,
        email: email
    };
    var jsonData = JSON.stringify(userData);
    // JSON u ekrana yazdirir 
    errorMessage.textContent = jsonData;
    // Formu temizdiyir
    myForm.reset();
});

function showError(message) {
    errorMessage.textContent = message;
    setTimeout(function () {
        errorMessage.textContent = "";
    }, 3000); // Eror mesaj silinsin 3 saniya sonra 
}