import checkPassword from "./checkPassword";

export default function checkPasswordUI() {
  let btn = document.getElementById("btn");
  let error = document.getElementById("error-msg");
  let input = document.getElementById("input");

  function handleClick() {
    const passwordCheckResult = checkPassword(input.value);
    error.textContent = passwordCheckResult.messages
  }

  btn.addEventListener("click", handleClick);
}