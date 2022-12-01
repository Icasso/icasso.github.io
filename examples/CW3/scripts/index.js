window.onload = init;
const mymenu = initMenu();
let currentCake = 0;

function init() {
    rotate();
    rotvid();
}

function rotate() {
    document.getElementById("cakeInfo").src = mymenu[currentCake].imagefile;
    document.getElementById("cakename").innerHTML =
        mymenu[currentCake].description;
    document.getElementById("carbo").innerHTML =
        mymenu[currentCake].nutrition[0].percentage;
    document.getElementById("cakeInfo").alt = mymenu[currentCake].description;
    document.getElementById("pro").innerHTML =
        mymenu[currentCake].nutrition[1].percentage;
    document.getElementById("fat").innerHTML =
        mymenu[currentCake].nutrition[2].percentage;
    document.getElementById("cholest").innerHTML =
        mymenu[currentCake].nutrition[3].percentage;
    document.getElementById("total").innerHTML =
        mymenu[currentCake].nutrition[0].percentage +
        mymenu[currentCake].nutrition[1].percentage +
        mymenu[currentCake].nutrition[2].percentage +
        mymenu[currentCake].nutrition[3].percentage;
    currentCake++;
    if (currentCake == mymenu.length) {
        currentCake = 0;
    }
    setTimeout("rotate()", 3 * 1000);
}

//end of rotating stuffs

//loop vid TODO: add 5seconds delay  onended
function rotvid() {
    var videos = document.getElementById("video");
    var videoss = [
        "http://courses.cs.cityu.edu.hk/cs2204/chocolate.mp4",
        "http://courses.cs.cityu.edu.hk/cs2204/cakemaking-s.mp4"
    ];
    var currentVideo = 0;
    videos.addEventListener("ended", function (e) {
        currentVideo = ++currentVideo % videoss.length;
        videos.src = videoss[currentVideo];
        videos.play();
    });
    setInterval(currentVideo, 5000)
}

//end of loop vid

//test
