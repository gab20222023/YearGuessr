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

nextImage();

let lives = 3;
document.getElementById('result').innerText = '';
const nextButton = document.getElementById('nextImage');

function nextImage() {
    globalThis.nextImageNotAFunction = randomImage();
    return 0;
}

function loadNextImage() {
    nextImage();
    document.getElementById('imageURL').src = nextImageNotAFunction.url;
    const correctYear = nextImageNotAFunction.year;
    document.getElementById('result').innerText = '';
    document.getElementById('yearInput').value = '';
    lives = 3;
    nextButton.disabled = true;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('yearInput').value);
    const correctYear = nextImageNotAFunction.year;
    if (lives >= 0) {
        if (userGuess === correctYear) {
            document.getElementById('result').innerText = 'Correct! The year is ' + correctYear;
            nextButton.disabled = false;
        } else {
            document.getElementById('result').innerText = 'Incorrect!';
            lives--;
        }
    }
    else {
        document.getElementById('result').innerText = 'No lives left! The year is ' + correctYear;
        nextButton.disabled = false;
    }
}

document.getElementById('imageURL').src = randomImage().url;