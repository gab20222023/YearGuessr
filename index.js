class Image {
    constructor(url, year) {
        this.url = url;
        this.year = year;
    }

    displayImage() {
        console.log('Image: ' + this.url);
        console.log('Year: ' + this.year);
    }
}

const images = [
    new Image('Photos/Photo1.jpg', 1986),
    new Image('Photos/Photo2.jpg', 1961),
];

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function checkGuess() {
    const userGuess = parseInt(doument.getElementById('yearInput').value);
    const correctYear = randomImage().year;
    if (userGuess === correctYear) {
        document.getElementById('result').innerText = 'Correct! The year is ' + correctYear;
    } else {
        document.getElementById('result').innerText = 'Incorrect! The year is ' + correctYear;
    }
}

document.getElementById('imageURL').src = randomImage().url;