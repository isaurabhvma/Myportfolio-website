document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    document.getElementById('form-status').textContent = "Thank you! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById('form-status').textContent = "Please fill out all fields.";
  }
});
