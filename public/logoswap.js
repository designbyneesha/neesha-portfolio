import logo1 from "./images/logo1.jpg";
import logo2 from "./images/logo2.jpg";
import logo3 from "./images/logo3.jpg";
import logo4 from "./images/logo4.jpg";
import logo5 from "./images/logo5.jpg";
import logo6 from "./images/logo6.jpg";
import logo7 from "./images/logo7.jpg";

const iconImage = document.querySelector(".navbar-icon__img");
const iconImageSrc = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
var imageIndex = getRandomInt(0, 7);

iconImage.addEventListener("mouseover", logoImgSwap);

function logoImgSwap() {
    iconImage.src = iconImageSrc[imageIndex];
    imageIndex++;

    if (imageIndex >= iconImageSrc.length) {
        imageIndex = 0;
    }
}

logoImgSwap();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}