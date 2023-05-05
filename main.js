var inputTag = document.querySelector("#textInput");
var button = document.querySelector("#saveBtn");
var postContainer = document.querySelector("#postContainer");

let postArr = [];

button.addEventListener("click", clicked);

function clicked(){
    postArr.push(inputTag.value);
    console.log(postArr);
}

function postP(arr){
    postContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let newP = document.createElement("p");
        newP.innerHTML = element;
        postContainer.appendChild(newP);
    }
}

function loadData(){
    let fromJson = JSON.parse(localeStorage.getItem("list1"));
    showData(fromJson);
}

function addData(text){
    let newP = document.createElement("p");
    newP.innerHTML = text;
    postContainer.appendChild(newP);
}
function saveData(arr){
    let jsonStr = JSON.stringify(arr);
    localStorage.setItem("list1", jsonStr);
}

function clicked(){
    postArr.push(input.value);
    console.log(postArr);
    showData(postArr);
    saveData(postArr);
}