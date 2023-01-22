//Business Logic
function hideResults(){
    document.getElementById("ruby").setAttribute("class","hidden");
    document.getElementById("javascript").setAttribute("class","hidden");
    document.getElementById("python").setAttribute("class","hidden"); 
}

function takeForm(event) {
  event.preventDefault();
  hideResults();

  const question1 = parseInt(document.getElementById("question1").value);
  const question2 = parseInt(document.getElementById("question2").value);
  const question3 = parseInt(document.getElementById("question3").value);
  const question4 = parseInt(document.getElementById("question4").value);
  const question5 = parseInt(document.getElementById("question5").value);
  const results = question1 + question2 + question3 + question4 + question5

  if (results <=5 ) {
    document.getElementById("ruby").removeAttribute("class");
  } else if (results >=6 && results < 7) {
    document.getElementById("python").removeAttribute("class");
  } else if (results >=7 && results < 9) {
    document.getElementById("javascript").removeAttribute("class");
  } else if (results >=9 && results < 10) {
    document.getElementById("python").removeAttribute("class")
  } else {
    document.getElementById("javascript").removeAttribute("class")
  }
};

//User Interface Logic
window.addEventListener("load", onWindowLoad);
function onWindowLoad() {
  let form = document.getElementById("userForm");
  form.addEventListener("submit", takeForm);
}