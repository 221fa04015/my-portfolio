let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 60);

let number2 = document.getElementById("number-2");
let count = 0;
setInterval(() => {
  if (count == 80) {
    clearInterval();
  } else {
    count += 1;
    number2.innerHTML = count + "%";
  }
}, 60);

let number3 = document.getElementById("number-3");
let c = 0;
setInterval(() => {
  if (c == 96) {
    clearInterval();
  } else {
    c += 1;
    number3.innerHTML = c + "%";
  }
}, 50);

let number4 = document.getElementById("number-4");
let co = 0;
setInterval(() => {
  if (co == 20) {
    clearInterval();
  } else {
    co += 1;
    number4.innerHTML = co + "%";
  }
}, 130);




document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form fields
  const nameField = document.querySelector('input[name="Name"]');
  const emailField = document.querySelector('input[name="email"]');
  const messageField = document.querySelector('textarea[name="Message"]');

  // Get values
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  // Email pattern for validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(error) {
      error.remove();
  });

  let valid = true;

  // Name validation
  if (name === '') {
      valid = false;
      showError(nameField, 'Name is required.');
  }

  // Email validation
  if (email === '') {
      valid = false;
      showError(emailField, 'Email is required.');
  } else if (!emailPattern.test(email)) {
      valid = false;
      showError(emailField, 'Please enter a valid email address.');
  }

  // Message validation
  if (message === '') {
      valid = false;
      showError(messageField, 'Message is required.');
  }

  // If the form is valid, you can submit it
  if (valid) {
      // Optionally, you can submit the form here using AJAX or just let it submit normally
      // this.submit(); // Uncomment to allow the form to submit if all validations pass
      alert('Form submitted successfully!');
  }
});