//ASSIGNMENTS PAGE
//This is for the read more button on assignment1
function readMoreA() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMorebtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
} 
//This is for the read more button on assigment2
function readMoreB() {
  var dotsB = document.getElementById("dotsB");
  var moreTextB = document.getElementById("moreB");
  var btnTextB = document.getElementById("readMorebtnB");

  if (dotsB.style.display === "none") {
    dotsB.style.display = "inline";
    btnTextB.innerHTML = "Read More"; 
    moreTextB.style.display = "none";
  } else {
    dotsB.style.display = "none";
    btnTextB.innerHTML = "Read Less"; 
    moreTextB.style.display = "inline";
  }
}