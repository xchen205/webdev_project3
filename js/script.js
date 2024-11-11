function init(){
  const bodyFit = window.innerWidth;
  //const catButton = document.querySelector("button");
  const catButton = document.querySelector("button");
  catButton.onclick = getCatFact();
  catButton.onclick = window.alert("yes this button works, now how to link it to the api?");
  getCatFact();
}

window.addEventListener("load", init);

function mobileQuery(){
  if(min-width<=600){
    body.style.size=50%;
  }
}

function getColourLoversPalette(){
  //uses ColourLovers API
  const colorImage = document.createElement("image")
  fetch("http://www.colourlovers.com/api/colors/random").then(response{
    if(!response.ok){
    }
    return response.json;
  }).then
}

function getCatFact(){
  //uses Daily Cat Facts API
  fetch("https://alexwohlbruck.github.io/cat-facts/"){
  }
  let catFact = GET /facts/random?animal_type=cat&amount=1
  const factPlace = document.getElementById("catFact");
  factPlace.innerHTML = catFact.text;
  GET /facts/random?animal_type=cat&amount=1;
}
