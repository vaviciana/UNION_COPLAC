document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");

    // Mostrar el pop-up si el usuario no ha aceptado las cookies antes
    if (!localStorage.getItem("cookiesAccepted")) {
        setTimeout(() => {
            cookiePopup.classList.add("show");
        }, 1000); // Aparece después de 1 segundo
    }

    // Al hacer clic en "Aceptar", guardar en localStorage y ocultar el pop-up
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiePopup.classList.remove("show");
        setTimeout(() => {
            cookiePopup.classList.add("hidden");
        }, 500); // Esconde con animación
    });
});
