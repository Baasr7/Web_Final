document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-us form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let valid = true;
      let errorMsg = '';

      
      if (!name.value.trim()) {
        valid = false;
        errorMsg += 'Please enter your name.\n';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        valid = false;
        errorMsg += 'Please enter a valid email address.\n';
      }

      if (!message.value.trim()) {
        valid = false;
        errorMsg += 'Please enter your message.\n';
      }

      if (!valid) {
        e.preventDefault();
        alert(errorMsg);
      }
    });
  }
});