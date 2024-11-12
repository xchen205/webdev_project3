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
  const colorImage = document.createElement("image")
  fetch("https://www.colourlovers.com/api/colors/random").then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  })
  .then((text) => {
  })
  .catch((error) => {
  //poemDisplay.textContent = `Could not fetch verse: ${error}`;
  })
}

function getCatFact(){
  //uses Daily Cat Facts API
  fetch("https://alexwohlbruck.github.io/cat-facts/facts/random?animal_type=cat&amount=1").then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  })
  .then((text) => {
    let catFact
    const factPlace = document.getElementById("catFact");
    document.getElementById("cat-fact").p.innerHTML = catFact.text;
  })
  .catch((error) => {
    document.getElementById("cat-fact").p.innerHTML = `No fact for you: ${error}`;
  })
}
