/*Handles the typewriting effects for the introduction page header */

const typewriterHeading = document.getElementById("intro-header");
var typeString = "I'm Neesha!";
var typeStringArr = ["I'm Neesha!", "I'm a designer", "I love website design"];
var typingSpeed = 100;
var currString = 0;
//Track the current character position for given string
//Initialise to negative value to create a delay before animation start
var currChar = -10;

function typewriterAnim() {
    if (currChar < typeStringArr[currString].length) {
        setTimeout(typewriterAnim, typingSpeed);
        //Only start the animation if char index is valid (in range and positive)
        if (currChar >= 0) {
            typewriterHeading.insertBefore(document.createTextNode(typeStringArr[currString].charAt(currChar)), document.querySelector(".type-cursor"));
        }
        currChar++;
        //Simulate realistic typing speed variation
        typingSpeed = getRandomInt(80, 100);
    }

    //If we've reached end of string, iterate to next string in array
    else {
        setTimeout(typewriterDeleteAnim, 2000);
    }
}

//Typewrite delete the completed string before iterating to the next string in array
function typewriterDeleteAnim() {
    if (currChar >= 0) {
        setTimeout(typewriterDeleteAnim, typingSpeed);
        typewriterHeading.innerHTML = typewriterHeading.innerHTML.substring(0, currChar) + "<span class='type-cursor'>|</span>";
        currChar--;
        typingSpeed = getRandomInt(80, 100);
    }

    else {
        currChar = -10;
        currString = (currString == typeStringArr.length - 1) ? 0 : currString += 1;
        setTimeout(typewriterAnim, 1000);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

typewriterAnim();