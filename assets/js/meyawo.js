/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

(function () {
  emailjs.init("cwNASW6DVX0_BV8Ka"); // Replace with your EmailJS user ID
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    emailjs
      .send("service_eq4zint", "template_if6i8tp", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I will get back to you soon.",
          });
          document.getElementById("contact-form").reset();
        },
        function (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong. Please try again later.",
          });
        }
      );
  });
