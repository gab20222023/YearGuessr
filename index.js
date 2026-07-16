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
    new Image('Photos/Photo3.jpg', 1940),
    new Image('Photos/Photo4.jpg', 1942),
    new Image('Photos/Photo5.jpg', 1944),
    new Image('Photos/Photo6.jpg', 1946),
    new Image('Photos/Photo7.jpg', 1950),
    new Image('Photos/Photo8.jpg', 1955),
    new Image('Photos/Photo9.jpg', 1964),
    new Image('Photos/Photo10.jpg', 1970)
];

let imagesUsed = [];
let availableImages = images;

function randomImage() {
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    return availableImages[randomIndex];
}

let lives = 3;
document.getElementById('result').innerText = '';
const nextButton = document.getElementById('nextImage');
const guessButton = document.getElementById('guessButton');
nextImage();
loadNextImage();

function nextImage() {
    globalThis.nextImageNotAFunction = randomImage();
    return 0;
}

function loadNextImage() {
    if (availableImages.length === 0) {
        endGame();
    }
    else {
        nextImage();
        document.getElementById('imageURL').src = nextImageNotAFunction.url;
        console.log('image: ' + nextImageNotAFunction.url);
        globalThis.correctYear = nextImageNotAFunction.year;
        document.getElementById('result').innerText = '';
        document.getElementById('yearInput').value = '';
        lives = 3;
        nextButton.disabled = true;
        guessButton.disabled = false;
    }
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('yearInput').value);
    if (lives > 1) {
        if (userGuess === correctYear) {
            document.getElementById('result').innerText = 'Correct! The year is ' + correctYear;
            nextButton.disabled = false;
            availableImages = availableImages.filter(img => img !== nextImageNotAFunction);
        } 
        else if (userGuess > correctYear) {
            document.getElementById('result').innerText = 'Incorrect! The year is earlier.';
            lives--;
        }
        else if (userGuess < correctYear) {
            document.getElementById('result').innerText = 'Incorrect! The year is later.';
            lives--;
        }
    }
    else {
        if (userGuess === correctYear) {
            document.getElementById('result').innerText = 'Correct! The year is ' + correctYear + ', click next to try again.';
            nextButton.disabled = false;
            guessButton.disabled = true;
            availableImages = availableImages.filter(img => img !== nextImageNotAFunction);
        }
        else {
            document.getElementById('result').innerText = 'Incorrect! The year is ' + correctYear + '. No lives left! Click next to try again.';
            nextButton.disabled = false;
            guessButton.disabled = true;
            availableImages = availableImages.filter(img => img !== nextImageNotAFunction);
        }
    }
    if (availableImages.length === 0 && lives > 0) {
        endGame('correct');
    }
    else if (availableImages.length === 0 && lives <= 0) {
        endGame('incorrect');
    }
}

function endGame(state) {
    if (state == 'correct'){
        document.getElementById('result').innerText = 'Correct! No more images left!';
    }
    else if (state == 'incorrect') {
        document.getElementById('result').innerText = 'Incorrect! No more images left!';
    }
    nextButton.disabled = true;
}

function resetGame() {
    availableImages = images;
    lives = 3;
    document.getElementById('result').innerText = '';
    nextButton.disabled = false;
    loadNextImage();
}