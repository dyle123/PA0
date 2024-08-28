// Function to apply the language to the page
function applyLanguage(language) {
  document.querySelectorAll('[data-en]').forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });
  document.querySelectorAll('[placeholder]').forEach(element => {
    const placeholderText = element.getAttribute(`data-${language}`);
    if (placeholderText) {
      element.setAttribute('placeholder', placeholderText);
    }
  });
}

// Event listener for language selection change
document.getElementById('languageSelect').addEventListener('change', function() {
  const language = this.value;
  localStorage.setItem('language', language); // Save the selected language to localStorage
  applyLanguage(language); // Apply the selected language
});

// Check localStorage for saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language') || 'en'; // Default to 'en' if no language is saved
  document.getElementById('languageSelect').value = savedLanguage; // Set the select value to the saved language
  applyLanguage(savedLanguage); // Apply the saved language
});


var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html'
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.mecallapi.com/api/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "username": username,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['status'] == 'ok') {
        localStorage.setItem("jwt", objects['accessToken']);
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = './index.html';
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}