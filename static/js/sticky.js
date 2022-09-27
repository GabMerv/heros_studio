// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// Get the navbar
var navbar = document.getElementById("stickedElements");
var logo = document.getElementById("centerLogo");
logo.hidden = true;
var circle = document.getElementById("semi-circle")
// Get the logo


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    logo.hidden = false;
    circle.setAttribute("style", "opacity:1");
  } else {
    navbar.classList.remove("sticky");
    logo.hidden = true;
    circle.removeAttribute("style", "opacity:0");

  }
}
