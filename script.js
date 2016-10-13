//Creating Elements

var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//Add Content
newHeading.innerHTML = "Today is Thursaday";
newParagraph.innerHTML = "I'm so ready for the weekend but first I must complete week seven assignments. It's fun accessing the DOM.";

//Attaching elements to the document 
document.getElementById("testing").appendChild(newHeading);
document.getElementById("testing").appendChild(newParagraph);