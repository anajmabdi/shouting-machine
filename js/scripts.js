window.onload = function() {

  console.log("checking");

  let form = document.querySelector("form");
  form.onsubmit = function(event) {

  const sentenceInput = document.getElementById("sentence").value;
  
  document.querySelector("span#sentence").innerText = sentenceInput.toUpperCase();
  
  console.log("checked");

  document.querySelector("div#story").removeAttribute("class");
  event.preventDefault();
  }
}