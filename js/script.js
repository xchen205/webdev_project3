function init(){
  const bodyFit = window.innerWidth;
  const catButton = document.getElementById("cat-button");
  const catClearButton = document.getElementById("cat-clear-button");
  catButton.addEventListener("onclick", getCatFact);
  catClearButton.addEventListener("onclick", removeCatFact);
  getColourLoversPalette();
  getCatFact();
}

window.addEventListener("load", init);

function getColourLoversPalette(){
  //uses ColourLovers API
  fetch("https://www.colourlovers.com/api/colors/random", {mode : 'no-cors'}).then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.getElementByTagName("imageUrl").innerHTML;
  })
  .then((imageUrl) => {
    document.getElementById("color-pic").createElement("img").setAttribute("src", imageUrl);
  })
  .catch((error) => {
    document.createElement("p").innerHTML  = `Image getter broke: ${error}`;
  })
}

function getCatFact(){
  //uses Daily Cat Facts API
  let catFact = document.getElementById("cat-text").innerHTML;
  fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1", {mode : 'no-cors'}).then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text;
  })
  .then((text) => {
    catFact = text;
  })
  .catch((error) => {
    catFact = `No fact for you: ${error}`;
  })
}

function removeCatFact(){
  document.getElementById("cat-text").innerHTML = ``;
}
