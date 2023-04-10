function navigation(event) {
  event.preventDefault(); // prevent the default behavior of the link
  const target = event.target;
  const registrationLink = document.getElementById("registration");
  const loginLink = document.getElementById("login");
  const registrationBox = document.querySelector(".box");
  const loginBox = document.querySelector(".loginBox");
  
  if (target === registrationLink) {
    registrationLink.classList.add("myactive");
    loginLink.classList.remove("myactive");
    registrationBox.style.display = "block";
    loginBox.style.display = "none";
  } else if (target === loginLink) {
    registrationLink.classList.remove("myactive");
    loginLink.classList.add("myactive");
    registrationBox.style.display = "none";
    loginBox.style.display = "block";
  }
}
