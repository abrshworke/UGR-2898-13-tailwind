
function toggleForm() {
  var form = document.getElementById("contactForm");
  form.classList.toggle("is-hidden");
}

function toggleForm() {
  var form = document.getElementById('contactForm');
  form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
  document.getElementById('messageContainer').innerHTML = '';
}

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phone-number').value;

  if (name === '' || email === '' || phoneNumber === '') {
    alert('Please fill in all fields.');
    return;
  }

  var submissionMessage = 'Submitted Information:\n\nName: ' + name + '\nEmail: ' + email + '\nPhone Number: ' + phoneNumber;
  alert(submissionMessage);

  var thankYouMessage = 'your form commpletly summited, ' + name  + ' ' + ' ,i will be calling you!';
  document.getElementById('messageContainer').innerHTML = thankYouMessage;

  var form = document.getElementById('contactForm');
  form.style.display = 'none';
  document.getElementById('contactForm').reset();
}
document.addEventListener("DOMContentLoaded", function () {
  var educationButtons = document.querySelectorAll(".education__a");

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





















  
  


