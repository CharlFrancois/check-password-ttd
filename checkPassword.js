export default function checkPassword(password) {
  let returnedControl = {
    isOk: true,
    messages: []
  }

  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(password.length < 8) {
    returnedControl.isOk = false
    returnedControl.messages.push("Le mot de passe doit comporter au moins 8 caractères")
  }
  if(!/\d/.test(password)) {
    returnedControl.isOk = false
    returnedControl.messages.push("Le mot de passe doit contenir au moins 1 chiffre")
  }
  if(password === password.toLowerCase()) {
    returnedControl.isOk = false
    returnedControl.messages.push("Le mot de passe doit contenir au moins une lettre majuscule")
  }
  // if(!format.test(password)) {
  //   returnedControl.isOk = false
  //   returnedControl.messages.push("Le mot de passe doit contenir au moins une lettre majuscule")
  // }
  // if(password.length >= 8 && /\d/.test(password) && password !== password.toLowerCase() && format.test(password)) {
  //   returnedControl.messages.push("Le mot de passe est ok")
  // }

  return returnedControl
}
