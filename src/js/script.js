

function toggleForm() {
  var form = document.getElementById('contactForm');
  form.classList.toggle('is-hidden');
  document.getElementById('messageContainer').innerHTML = '';
}


document.addEventListener("DOMContentLoaded", function () {
  var educationButtons = document.querySelectorAll(".education__button");

  educationButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var buttonText = button.textContent.trim().toLowerCase();

      var buttonToUrlMap = {
        "artificial intelligence": "https://www.coursera.org/courses?query=artificial%20intelligence",
        "web development": "https://www.mygreatlearning.com/web-development/free-courses",
        "programming": "https://learnprogramming.online/",
        "cyber security": "https://www.coursera.org/courses?query=cybersecurity",
      };

      if (buttonToUrlMap.hasOwnProperty(buttonText)) {
        
        window.open(buttonToUrlMap[buttonText], '_blank', 'width=900,height=600');
      } else {
        console.error("Unknown button clicked:", buttonText);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu");
  var navMenu = document.getElementById("navMenu");

 
  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("is-active");

    
    var navbarItems = document.querySelectorAll(".navbar-item");
    navbarItems.forEach(function (item) {
      item.classList.toggle("has-text-white", navMenu.classList.contains("is-active"));
    });
  });
});
