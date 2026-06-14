const form = document.getElementById("form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const text = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !subject || !text) {
    message.style.color = "red";
    message.textContent = "Please fill out all fields.";
    return;
  }

  if (!email.includes("@")) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email.";
    return;
  }

  // Success message
  message.style.color = "green";
  message.textContent = `Thanks ${name}, your message has been sent!`;

  // Reset form
  form.reset();

  // Optional: clear message after 4 seconds
  setTimeout(() => {
    message.textContent = "";
  }, 4000);
});