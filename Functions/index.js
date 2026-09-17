function btnclick() {
    console.log("Hello, World!");
}
const myBtn = document.getElementById("myButton");
myBtn.addEventListener("click", btnclick);

myBtn.onclick = btnclick; 