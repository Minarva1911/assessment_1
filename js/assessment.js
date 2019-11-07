var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}

function myFunction() {
  var dots = document.getElementById("data");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
   time();
} else if (hr == 12) {
    document.write("Good Afternoon!");
} else if (hr >= 12 && hr <= 17) {
    document.write("Good Evening!"+"<br>"+ " user");
} else {
    document.write("Good night !");
}
document.write();

function time(){
    document.write("Good Morning!");
}
function funboi()
{
  document.getElementById("pp").innerHTML = "";
}
