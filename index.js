const express = require("express");

const app = express();
const PORT = 3000;

const imageLinks = [
    "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    "https://hatrabbits.com/wp-content/uploads/2017/01/tafel-1.jpg",
    "https://randomwordgenerator.com/img/picture-generator/52e4d1424f5aa914f1dc8460962e33791c3ad6e04e5074417d2e72d2954ac5_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU",
    "https://thumbs.dreamstime.com/b/cute-smiley-cat-face-one-random-my-287938601.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y3ndp5LH3NGvay9wzbSIOBd23ior6yui6-RIcfcdCvYZ5mq2mZxqGtlPZXCF-SD6iKM&usqp=CAU",
    "https://c8.alamy.com/comp/P4PTDR/random-arrangement-of-dried-brown-flowers-isolated-copy-space-flat-lay-P4PTDR.jpg",
    "https://images.pexels.com/photos/9304725/pexels-photo-9304725.jpeg?cs=srgb&dl=pexels-jj-jordan-44924743-9304725.jpg&fm=jpg",
    "https://img.freepik.com/premium-photo/photo-random-nature-hd-wallpaper-8k4k_915071-66902.jpg",
];

app.get("/api/image/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    const randomImage = imageLinks[randomIndex];

    res.json({
        success: true,
        image: randomImage,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
