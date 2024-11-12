function init(){
  const bodyFit = Window.innerWidth;
  const catButton = document.getElementById("cat-button");
  catButton.onclick = getCatFact();
  catButton.onclick = Window.alert("yes this button works, now how to link it to the api?");
  getCatFact();
}

window.addEventListener("load", init);

function getColourLoversPalette(){
  //uses ColourLovers API
  const colorImage = document.createElement("image")
  fetch("https://www.colourlovers.com/api/colors/random").then(response{
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  })
  .then(response.json){
  }
  .catch((error) => {
  //poemDisplay.textContent = `Could not fetch verse: ${error}`;
  })
}

function getCatFact(){
  //uses Daily Cat Facts API
  fetch("https://alexwohlbruck.github.io/cat-facts/facts/random?animal_type=cat&amount=1").then(response{
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  })
  .then(response.json){
    let catFact
    const factPlace = document.getElementById("catFact");
    document.getElementById("cat-fact").innerHTML = catFact.text;
    GET /facts/random?animal_type=cat&amount=1;
  }
  .catch((error) => {
    document.getElementById("cat-fact").innerHTML = `No fact for you: ${error}`;
  })
}
