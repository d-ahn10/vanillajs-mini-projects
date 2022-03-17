const colors = ["red", "blue", "green", "pink", "yellow", "gray", "black", "cyan", "white"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // get random number between 0 - 3 colors[2]
    const randomNumber = getRandomNumber();
    console.log('here: ', document.body.style);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}