var input = document.querySelector("#textInput");
var button = document.querySelector("#saveBtn");
var postContainer = document.querySelector("#postContainer");

var postsArr = [];

console.log("script is running");

function loadData() {
    let listJsonStr = localStorage.getItem("list1");
    let arrFromJson = JSON.parse(listJsonStr);
    showData(arrFromJson);
}
loadData();

function clearTrash() {
    postContainer.innerHTML = "";
}

function showData(arr) {
    clearTrash();
    for (let i = 0; i < arr.length; i++) {
        const text = arr[i];
        let newP = document.createElement("p");
        newP.innerHTML = text;
        postContainer.appendChild(newP);
    }
}

function addData(text) {
    let newP = document.createElement("p");
    newP.innerHTML = text;
    postContainer.appendChild(newP);
}

function saveData(arr) {
    let jsonStr = JSON.stringify(arr);
    localStorage.setItem("list1", jsonStr);
}

function onClick() {
    postsArr.push(input.value);
    console.log(postsArr);
    showData(postsArr);
    saveData(postsArr);
}

button.addEventListener("click", onClick);