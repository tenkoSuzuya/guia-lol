function showAlert(){alert("no jueges lol es perjudicial para tu salud");};

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links")
            .classList.toggle("nav-links-responsive");
    });