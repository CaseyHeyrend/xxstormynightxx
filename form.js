const form = document.getElementById("form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    message.style.color = "green";
    message.textContent = "Message sent successfully!";
    form.reset();
  })
  .catch((error) => {
    message.style.color = "red";
    message.textContent = "Failed to send message.";
    console.log(error);
  });
});