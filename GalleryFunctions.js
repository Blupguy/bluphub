var currentImageIndex = 0;
var images = [
    "Images/Cow.png",
    "Images/tpose.png",
    "Images/yeehawfrog.png",
    "Images/blupFrog.png",
    "Images/froog].png",
    "Images/Miata.png",
    "Images/OldPNGTuber.png",
    "Images/sadfrog.png",
    "Images/sunset.png",
    "Images/TLsDuck.png",
    "Images/frog.png",
    "Images/prettysunset.jpg",
    "Images/sun.jpg",
    "Images/mountain.jpg",
    "Images/Yoru.jpg",
    "Images/PrettySky.JPG",
    "Images/cookiedough.JPG",
    "Images/goofycar.jpg",
    "Images/YoruStare.png",
    "Images/goofyahhcat.JPG",
    "Images/NightSky.JPG",
    "Images/TestSquatchy.gif",
    "Images/Butte.png",
    "Images/PrettyFlower.png",
    "Images/car.png",
    "Images/mewing.png"
];

var descriptions = [
    "A drawing of some livestock, i dabbled in realism and this was one of the results",
    "A portrait of how i view myself, old, frail but also T-posing",
    "yeehaw froggy!!!",
    "frog",
    "A wizard frog i drew for some reason",
    "My old PNGTuber which is an MX-5 NA which had popup headlights which i really want, its my dream car",
    "My old old PNGTuber which was a frog that i kinda miss but im happy with my current PNGTuber",
    "A frog that is sad because Klondike discontinued the Chocotaco, arguably the best ice cream they made",
    "A terrible drawing of a sunset, i really like watching the sunset so i tried to draw it",
    "duck",
    "A frog that is content with its life, nothing bothering him",
    "A picture of the sunset i took, for but a brief moment in life, i was happy",
    "A picture of the turnagain arm and sun, this was a really sketchy drive cuz i had like 2 gallons of gas which was barely enough to get to a gas station in town",
    "A picture of some mountains, i got lost going up the road and thought it was a pretty view",
    "my shit ass cat that used to pee on my bed all the time, his name is Yoru and i love him very much",
    "northern lights :)",
    "Bomb ass cookie dough that i ate raw",
    "The head on shot, possible one of the most aggressive shots you can take of a car",
    "He knows what you did",
    "Goofy ahh cat",
    "Pretty night sky in Arizona :)",
    "Test gif i made",
    "The Butte",
    "Pretty flower i saw on a hike:)",
    "Stupidest car in the Anchorage area",
    "piss boy(whomst i love very much)"
];

function showPrevious() {
    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex--;
    }
    updateImage();
}

function showNext() {
    if (currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    updateImage();
}

function toggleDescription() {
    var description = document.querySelector('.image-description');
    description.classList.toggle('show-description');
}

function toggleSocialLinks() {
    var socialLinks = document.querySelector('.social-links');
    socialLinks.style.display = (socialLinks.style.display === 'block') ? 'none' : 'block';
}

function updateImage() {
    var galleryImage = document.querySelector('.gallery-image');
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = 'Artwork ' + (currentImageIndex + 1);

    var description = document.querySelector('#description');
    description.textContent = descriptions[currentImageIndex];
}