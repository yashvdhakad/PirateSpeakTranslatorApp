var btnTranslate = document.querySelector("#btnTranslate");
var inputDiv = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
    return serverURL + "?text=" + input;
}

function errorHandler(error) {
    console.log("error occured" + error);
    alert("Something went wrong with the server. Try again after some time.")
}

function clickHandler () {
    var inputText = inputDiv.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {var translatedText = json.contents.translated
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);