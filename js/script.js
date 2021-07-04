const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("response");

button.addEventListener("click", function () {
  const email = emailField.value;

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!validateEmail(email)) {
    response.innerHTML = "Please enter valid email adress";
  }
});

