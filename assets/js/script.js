


const button = document.getElementById('btn');
const educate = document.querySelectorAll(".learning");
const knowledge = document.querySelectorAll(".advance");

button.addEventListener("click", doSomething)

function doSomething() {
    alert("Hello World!");
}

window.addEventListener('keydown', function(e){
    console.log(e);
})

let menu = ["starter", "mains", "sides", "deserts"];

console.log(menu);

const body = document.body;

const div = document.createElement('div');
div.innerText = "So much information!";
body.append(div);

