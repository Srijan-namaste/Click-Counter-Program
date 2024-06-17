const counterLabel = document.getElementById("counterLabel");
const decreaseBtn = document.getElementById("decreaseButton");
const resetBtn = document.getElementById("resetButton");
const increaseBtn = document.getElementById("increaseButton");

let count = 0;

decreaseBtn.onclick = function(){
    count--;
    counterLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    counterLabel.textContent = count;
}