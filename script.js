document.getElementById("btn1").addEventListener("click", hello);
document.getElementById("btn2").addEventListener("click", changes);

function hello () {
  alert ("yeet");
}

function changes () {
  document.getElementById("p1").style.color = "red"
  document.getElementById("p1").style.fontSize = "50px"
  document.getElementById("p1").style.fontFamily = "Impact,Charcoal,sans-serif";
}
