//Horizontal scroll

const container = document.getElementById("big-container");
const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");

container.style.transform="translateX(-25%)";

button_1.addEventListener("click", ()=>{
    container.style.transform="translateX(8%)";
});
button_2.addEventListener("click", ()=>{
    container.style.transform="translateX(-25%)";
});
button_3.addEventListener("click", ()=>{
    container.style.transform="translateX(-58%)";
});