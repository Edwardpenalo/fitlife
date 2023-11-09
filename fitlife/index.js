function changeLanguage() {
  var language = navigator.language;
  if (language == "es") {
    document.body.className = "es";
  } else {
    document.body.className = "en";
  }
}

window.onload = changeLanguage;