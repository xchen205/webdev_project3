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
  fetch("https://www.colourlovers.com/api/colors/random",{mode : 'no-cors'}).then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.imageUrl();
  })
  .then((imageUrl) => {
    document.createElement("image");
  })
  .catch((error) => {
  //poemDisplay.textContent = `Could not fetch verse: ${error}`;
  })
}

function getCatFact(){
  //uses Daily Cat Facts API
  fetch("https://alexwohlbruck.github.io/cat-facts/api/facts/random?animal_type=cat&amount=1").then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  })
  .then((text) => {
    let catFact
    const factPlace = document.getElementById("catFact");
    document.getElementById("cat-text").innerHTML = catFact.text;
  })
  .catch((error) => {
    document.getElementById("cat-text").innerHTML = `No fact for you: ${error}`;
  })
}
