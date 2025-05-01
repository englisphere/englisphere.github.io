document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("show");
        }
    });
});


// === KODE "SELENGKAPNYA" UNTUK POSTINGAN ===
    document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Mencegah reload halaman
            let content = this.previousElementSibling;

            content.classList.toggle("expanded");

            if (content.classList.contains("expanded")) {
                this.textContent = "Sembunyikan";
            } else {
                this.textContent = "Selengkapnya";
            }
        });
    });
});



















document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("loginError");

      if (username === "rizky" && password === "rizky123") {
        window.location.href = "https://englisphere.github.io/murid/dasbor-rizky.html";
      } else if (username === "andy" && password === "andy123") {
        window.location.href = "dasbor-andy.html";
      } else {
        errorMsg.textContent = "Username atau password salah.";
      }
    });
  }
});
