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

let imagesUsed = [];
let availableImages = images;

function randomImage() {
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    return availableImages[randomIndex];
}

let lives = 2;
document.getElementById('result').innerText = '';
const nextButton = document.getElementById('nextImage');
nextImage();
loadNextImage();

function nextImage() {
    globalThis.nextImageNotAFunction = randomImage();
    return 0;
}

function checkAvailability(image) {
    imagesUsed.push(image);
    availableImages = [];
    for (let i = 0; i < images.length; i++) {
        for (let j = 0; j < imagesUsed.length; j++) {
            if (images[i] !== imagesUsed[j]) {
                availableImages.push(images[i]);
            }
        }
    }
    if (availableImages.length === 0) {
        document.getElementById('result').innerText = 'No more images available!';
        nextButton.disabled = true;
    }
    return 0;
}

function loadNextImage() {
    nextImage();
    document.getElementById('imageURL').src = nextImageNotAFunction.url;    const correctYear = nextImageNotAFunction.year;
    document.getElementById('result').innerText = '';
    document.getElementById('yearInput').value = '';
    lives = 2;
    nextButton.disabled = true;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('yearInput').value);
    const correctYear = nextImageNotAFunction.year;
    if (lives > 0) {
        if (userGuess === correctYear) {
            document.getElementById('result').innerText = 'Correct! The year is ' + correctYear;
            nextButton.disabled = false;
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
        document.getElementById('result').innerText = 'No lives left! Click next to try again.';
        nextButton.disabled = false;
        checkAvailability(nextImageNotAFunction);
    }
}

document.getElementById('imageURL').src = randomImage().url;