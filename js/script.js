window.addEventListener("load", getCatFact);
const bodyFit = Window.innerWidth;
const catButton = document.querySelector("button");
catButton.onclick = getCatFact();

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
  //uses ColourLovers API
  let catFact = GET /facts/random?animal_type=cat&amount=1
  const factPlace = document.querySelector("p");
  factPlace.innerHTML = catFact.text;
  GET /facts/random?animal_type=cat&amount=1;
}
