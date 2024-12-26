const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn")
let color = document.querySelector(".color")

btn.addEventListener("click",function(){
    let hexColor = getColor();
    document.body.style.backgroundColor=hexColor;
    color.textContent=hexColor;
})
function getNumber(){
    return Math.floor(Math.random()*hex.length);
}
function getColor(){
    let clr = "#"
    for(let i =0; i<6; i++){
        clr += hex[getNumber()];
    }
    return clr;
}