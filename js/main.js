var lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-10vh";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

function myFunction(y) {
  var x = document.getElementById("top-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  y.classList.toggle("change");
}

//Function for Top button

mybtn = document.getElementById("topclass");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollfunction();
};

function scrollfunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = "block";
  } else {
    mybtn.style.display = "none";
  }
}
