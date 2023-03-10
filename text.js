$(".button").click(function(){
    $(".joke").hide(500);
    $(".joke").show(500);
})


let button = document.querySelector(".button");
let display = document.querySelector(".display");
let Setup = document.querySelector(".setup");
const generateJoke = async () => {
  let randomNumber = Math.ceil(Math.random() * 318);
  let requestJoke = `https://v2.jokeapi.dev/joke/Any?idRange=${randomNumber}`;
    
  let data = await fetch(requestJoke);
  console.log(data);

  let response = await data.json();
  console.log(response);
  if(response.delivery && response.setup){
    display.textContent = response.delivery;
    Setup.textContent = response.setup;
  } else if(response.joke) {
    display.textContent = response.joke;
    Setup.textContent = response.category;
  };
    
};
generateJoke();
button.addEventListener("click", generateJoke);
