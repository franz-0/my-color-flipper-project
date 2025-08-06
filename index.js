colorLists = ["red" , "blue" , "#a83283", "rgb(15, 255, 80)"];
btn = document.getElementById("btn");
color = document.querySelector(".color");

btn.addEventListener('click' , function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorLists[randomNumber];
    color.textContent = colorLists[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colorLists.length);
}