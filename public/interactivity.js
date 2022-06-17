const copyButton = document.querySelector(".copy-email__btn");
const copyIcon = document.querySelector(".copy-email__icon");
const copyText = "neesha.chockalingam@gmail.com";

copyButton.addEventListener('click', function(){
    copyButton.classList.add('btn--active');
    copyButton.lastChild.nodeValue = "COPIED";
    navigator.clipboard.writeText(copyText);
});