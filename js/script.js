const bodyFit = document.querySelector("body");
let catFact = {}

function mobileQuery(){
  if(min-width<=600){
    body.size=50%;
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
  GET /facts/random?animal_type=cat&amount=1;
}
