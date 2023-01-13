function handleSelect(event) {
    event.preventDefault();
    const selection = document.getElementById("q1").value;

  }

  window.addEventListener("load", function() {
    document.getElementById("select-form").addEventListener("submit", handleSelect);
  });