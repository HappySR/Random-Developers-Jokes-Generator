// URL from where i got the API Key => https://hindi-jokes-api.onrender.com/
let joke = document.querySelector("#jokes");
let generateJoke = document.querySelector("#generateJoke");
let myText = document.querySelector("#myText");
let submitAPI = document.querySelector("#getAPI");
let submitApiMsg = document.querySelector(".submitApiMsg");
let API_Key;

submitAPI.addEventListener("click", () => {
    console.log(myText.value);
    API_Key = myText.value;
    submitApiMsg.classList.remove("hide");
    submitApiMsg.innerText = 'API Key Submitted';
    setTimeout(() => {
        submitApiMsg.classList.add("hide");
    }, 3000);
});

const getJokes = async () => {
    console.log("getting jokes...");
    let URL = `https://hindi-jokes-api.onrender.com/jokes?api_key=${API_Key}`;
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    joke.innerText = data.jokeContent;
}

generateJoke.addEventListener("click", getJokes);