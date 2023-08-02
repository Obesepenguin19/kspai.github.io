const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});
document.write("<h1>Your form has been submitted!</h1><h2>You entered the following data:</h2>");
var formData = location.search;

formData = formData.substring(1, formData.length);
while (formData.indexOf("+") != -1) {
	formData = formData.replace("+", " ");
}
formData = unescape(formData);
var formArray = formData.split("&");
for (var i=0; i < formArray.length; ++i) {
	document.writeln(formArray[i] + "<br />");
}