function handleRadio(event) {
    event.preventDefault();
    let relaxed = document.getElementById("relaxed")
    let q5 = document.getElementById("q5")
    let q4 = document.getElementById("q4")
    let q3 = document.getElementById("q3")
    let q2 = document.getElementById("q2")
    let q1 = document.getElementById("q1")
    
    if (relaxed.checked == true) {
      document.getElementById("relaxed")
      output = "rust!"
    }
  
document.getElementById("output").innerText = output;  

}
window.addEventListener("load", function() {
  
    const form = document.getElementById("questions");
    form.addEventListener("submit", handleRadio);
});