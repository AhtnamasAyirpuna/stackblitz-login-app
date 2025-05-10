function login() {
  const userNameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUserName = userNameInput.value === "sam.priya@example.com";
  const isCorrectPassword = passwordInput.value === "hehe123";

  if (isCorrectUserName && isCorrectPassword) {
    result.innerHTML = `Welcome Samantha!`;
  } else if (!isCorrectUserName && !isCorrectPassword) {
    result.innerHTML = `Wrong password/username`;
  } else if (isCorrectUserName && !isCorrectPassword) {
    result.innerHTML = `Wrong password`;
  } else {
    result.innerHTML = `Wrong Username!`;
  }
}
