
function countAllElements() {
  let allParagraphs = document.getElementsByTagName("p");
  let count = allParagraphs.length;
  let message = "There are " + count + " paragraph on this page.";
  let outputDiv = document.getElementById("output1");
  outputDiv.textContent = message;
}

function countGroup1() {
  let divGroup1 = document.getElementById("group1");
  let itemsInGroup1 = divGroup1.getElementsByTagName("p");
  let count = itemsInGroup1.length;
  let message = "There are " + count + " elements inside first group.";
  let outputDiv = document.getElementById("output2");
  outputDiv.textContent = message;
}

function countGroup2() {
  let divGroup2 = document.getElementById("group2");
  let itemsInGroup2 = divGroup2.getElementsByTagName("p");
  let count = itemsInGroup2.length;
  let message = "There are " + count + " elements inside second group.";
  let outputDiv = document.getElementById("output3");
  outputDiv.textContent = message;
}