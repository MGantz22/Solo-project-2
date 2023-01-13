function handleSelect(event) {
    event.preventDefault();
    const selection = document.getElementById("q1").value;
    const selecttion = document.getElementById("q2").value;
    const selection = document.getElementById("q3").value;
    const selection = document.getElementById("q4").value;
    const selection = document.getElementById("q5").value;
  }

  window.addEventListener("load", function() {
    document.getElementById("select-form").addEventListener("submit", handleSelect);
  });