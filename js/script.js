function init(){
  if(window.location.pathname == "/webdev_project3/apiuserpage.html"){
    loadAPIs();
  }
}

window.addEventListener("load", init);

function loadAPIs(){
  //cat variables
  const catButton = document.getElementById("cat-button");
  const catClearButton = document.getElementById("cat-clear-button");
  //color buttons
  const colorButton = document.getElementById("color-button");
  const paletteButton = document.getElementById("palette-button");
  const colorClearButton = document.getElementById("color-clear-button");
  //cat buttons
  catButton.addEventListener("onclick", getCatFact);
  catClearButton.addEventListener("onclick", removeCatFact);
  //color buttons
  colorButton.addEventListener("onclick", getColourLoversColor);
  paletteButton.addEventListener("onclick", getColourLoversPalette);
  colorClearButton.addEventListener("onclick", removeColourLoversPalette);
  getColourLoversPalette();
  getCatFact();
}

function getColourLoversColor(){
  //uses ColourLovers API
  fetch("https://www.colourlovers.com/api/colors/random", {mode : 'no-cors'}).then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response;
    
  })
  .then((response) => {
    var xmlParser = new DOMParser();
    var xmlDoc = xmlParser.parseFromString(response,"text/xml");
    document.getElementById("color-pic").src = xmlDoc.getElementsByTagName("imageUrl").innerHTML;
  })
  .catch((error) => {
    document.createElement("p").innerHTML  = `Image getter broke: ${error}`;
  })
}

function getColourLoversPalette(){
  //uses ColourLovers API
  fetch("https://www.colourlovers.com/api/palettes/random", {mode : 'no-cors'}).then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.getElementByTagName("imageUrl").innerHTML;
  })
  .then((innerHTML) => {
    window.alert(innerHTML);
    document.getElementById("color-pic").setAttribute("src", innerHTML);
  })
  .catch((error) => {
    document.createElement("p").innerHTML  = `Image getter broke: ${error}`;
  })
}

function getCatFact(){
  //uses Daily Cat Facts API
  fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1", {mode : 'no-cors'}).then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text;
  })
  .then((text) => {
    document.getElementById("cat-text").innerHTML = text;
  })
  .catch((error) => {
    document.getElementById("cat-text").innerHTML = `No fact for you: ${error}`;
  })
}

function removeCatFact(){
  document.getElementById("cat-text").innerHTML = "";
}

function removeColourLoversPalette(){
  document.getElementById("color-pic").src = "";
}
