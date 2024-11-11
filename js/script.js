const bodyFit = document.querySelector("body");

function mobileQuery(){
  if(min-width<=600){
    body.size=50%;
  }
}

function getColourLoversPalette(){
  //uses ColourLovers API
  fetch("http://www.colourlovers.com/api/colors/random").then(response){
    if(!response.ok){
    }
    return response.json;
  }
}
