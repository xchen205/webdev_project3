function init(){
  const bodyFit = window.innerWidth;
  const catButton = document.getElementById("cat-button");
  catButton.addEventListener("onclick", getCatFact);
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
    document.getElementById("color-pic").createElement("p").innerHTML  = `Image getter broke: ${error}`;
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
    let catFact
    document.getElementById("cat-text").innerHTML = data.text;
  })
  .catch((error) => {
    document.getElementById("cat-text").innerHTML = `No fact for you: ${error}`;
  })
}
