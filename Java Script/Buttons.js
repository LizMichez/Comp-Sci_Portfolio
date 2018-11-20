//ASSIGNMENTS PAGE
//This is for the read more button on assignment1
function readMoreA() {
  var dots = document.getElementById("dots"); //Calls the items within the tags with id dots and makes it the variable dots 
  var moreText = document.getElementById("more"); //Calls the items within the tages with id dots and makes it hte variable moreText
  var btnText = document.getElementById("readMorebtn"); //Calls the text in a button and makes it the varable btnText

  if (dots.style.display === "none") { //If the dots are invisible (have the style desplay none)
    dots.style.display = "inline"; //Make the dots style display inline, so they're invisible
    btnText.innerHTML = "Read More"; //The button text say read more
    moreText.style.display = "none"; //Makes the stuf in the more section invisible
  } else { //if the style display is not none
    dots.style.display = "none"; //Make the dots style display none
    btnText.innerHTML = "Read Less"; //The button text says read less
    moreText.style.display = "inline"; //The stuff in the more section visible
  }
} 
//This is for the read more button on assigment2, same thing as previouse section but with a new area, read prior comments for info
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