let generatorBtn = document.getElementById('new-advice-generator-btn');
let adviceHeader = document.getElementById('advice-header');
let adviceText = document.getElementById('advice-text');

generatorBtn.addEventListener("click", function() {
    generateAdvice();
})

function generateAdvice() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://api.adviceslip.com/advice");
    httpRequest.send();

    let response;
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                response = JSON.parse(httpRequest.responseText);

                adviceHeader.innerText = 'advice #' + response.slip.id;
                adviceText.innerText = "\"" + response.slip.advice + "\"";
            }
        }
    }
}

generateAdvice();