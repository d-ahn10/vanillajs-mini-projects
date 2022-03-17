const colors = ["red", "blue", "green", "pink", "yellow", "gray", "black", "cyan", "white"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    const dupeColor = checkDuplicateColor(colors[randomNumber], document.body.style.cssText);

    if (!dupeColor) {
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    } else {
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function checkDuplicateColor(colorElement, bgColorText) {
    return bgColorText.includes(colorElement) ? true : false;
}
