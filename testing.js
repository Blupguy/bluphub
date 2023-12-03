document.addEventListener("DOMContentLoaded", function () {
  var loadingContainer = document.getElementById("loading-container");
  var messageContainer = document.getElementById("message-container");
  var loadingBar = document.getElementById("loading-bar");
  var loadingMessage = document.getElementById("loading-message");
  var progress = 0;

  // Array of messages
  var messages = [
    "Welcome to the gallery where the art is as confused as we are about life.",
    "Not a masterpiece, but at least it's not a stick figure. We aim high here.",
    "If art could talk, ours would say, 'You're looking at me, and I'm looking fabulous.''",
    "Our art is like space—vast, mysterious, and occasionally visited by aliens. Enjoy the extraterrestrial vibes!",
    "Step into our gallery: where the art is as out of this world as our WiFi connection.",
    "Welcome, player one! Our art gallery—where pixels meet peculiar. ",
    "Our art is like a video game tutorial: confusing at first, but you'll get the hang of it... maybe.",
    "Feet and boy tummy are necessary for a balanced life.",
    "eat food",

  ];

  // Function to get a random message
  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Set initial message
  loadingMessage.innerHTML = getRandomMessage();

  var interval = setInterval(function () {
    progress += 3; // Adjust the speed of the loading bar
    loadingBar.style.width = progress + "%";

    // Only change the message once (when progress is 1%)
    if (progress === 1) {
      loadingMessage.innerHTML = getRandomMessage();
    }

    if (progress >= 100) {
      clearInterval(interval);
      // Redirect to your art gallery HTML file
      window.location.href = "gallery.html";
    }
  }, 100); // Adjust the interval duration for a slower or faster loading bar
});
