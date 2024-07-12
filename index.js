import { initializeApp } from "https://gstatic.com/firebase/9.15.0/firebase-app.js";


const appSettings = {
    databseURL: "https://playground-9f274-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
console.log(app);

const addButtonEl = document.getElementById("add-button");
const inputFieldEl = document.getElementById("input-field");

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value;
    console.log(inputValue);
})