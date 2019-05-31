
const btnAnimo = document.getElementById("btn-animo")
btnAnimo.addEventListener("click", function(e){
  e.preventDefault();

  document.getElementById("rosto").classList.toggle("triste");
  document.getElementById("rosto").classList.toggle("feliz");

  document.getElementById("boca").classList.toggle("boca-triste");
  document.getElementById("boca").classList.toggle("boca-feliz");

  var x = document.getElementById("rosto").getAttribute("class");

  if (x === "feliz"){
    btnAnimo.innerHTML = "triste";
  } else {
    btnAnimo.innerHTML = "feliz";
  }

})