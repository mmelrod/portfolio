function UseBurger() {
  var x = document.getElementById("myTopNav");
  if (x.className === "BurgerMenu") {
    x.className += " responsive";
  } else {
    x.className = "BurgerMenu";
  }

  var x = document.getElementById("NavLogo");
  if (x.className === "NavLogoFloat") {
    x.className = "MenuTop";
  } else {
    x.className += "NavLogoFloat";
  }
}
