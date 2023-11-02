const number = document.getElementById("advice-number");
const p = document.querySelector("p");

fetch('https://api.adviceslip.com/advice')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const id = data.slip.id;
        number.textContent = id;
        const quote = data.slip.advice;
        p.textContent = `"${quote}"`;
    })
    