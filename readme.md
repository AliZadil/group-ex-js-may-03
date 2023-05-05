JS + HTML Exercise

Start by linking your main.js script in the index.html page, using a script tag.

In index.html, create an input tag, with id "textInput", a break tag, and then a button tag with id "saveBtn". Create another break tag, then a div tag with id "postContainer".

In your main.js file, use document.querySelector() to select the input tag, and save it to a variable named inputTag. Do the same for the button and div tag, each gets their own variable.

Create an array called postsArr, that we will use later. Add a "click" event listener to the saveBtn, by using .addEventListener. In here, we will get the value of the input tag and push it in the postsArr array.

Create a function that will take postsArr as a parameter, use a for loop to go through all the elements in the array, and create a "p" tag for each element in the postsArr using document.createElement("p").

Use postContainer.innerHTML = ""; to clear the container div.

Use p.innerHTML = postsArr[i]; to set the text of the p tag to the text in the current postsArr[i] element.

And then, use .appendChild on the postContainer variable, to add this newly created p tag to the div;

Optional:

Save this postsArr in localstorage, converted to JSON, and write a function that will load and convert that json from localstorage, when the page is reloaded and the script first runs.
