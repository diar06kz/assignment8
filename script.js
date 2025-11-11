$(document).ready(function() {
  // Highlight active nav link (based on current URL)
  let path = window.location.pathname.split("/").pop();
  $(".nav-link").each(function() {
    let href = $(this).attr("href");
    if(href === path) {
      $(this).addClass("active");
    }
  });

  // Form validation (on contact page)
  $("#contactForm").on("submit", function(e) {
    e.preventDefault();
    let name = $("#name").val().trim();
    let surname = $("#surname").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    if (name === "" || surname === "" || email === "" || message === "") {
      alert("Please fill in all fields!");
      return;
    }

    $("#formMessage").fadeIn().delay(3000).fadeOut();
    $(this)[0].reset();
  });
});
