function handleRadio(event) {
    event.preventDefault();
    const radioSelection = document.querySelector("input[name='q1']:checked").value;
    //const radioSelection = document.querySelector("input[name='q2']:checked").value;
    //const radioSelection = document.querySelector("input[name='q3']:checked").value;
    //const radioSelection = document.querySelector("input[name='q4']:checked").value;
    //const radioSelection = document.querySelector("input[name='q5']:checked").value;
  }
  
  window.addEventListener("load", function() {
    document.getElementById("radio-form").addEventListener("submit", handleRadio);
    if (radioSelection === "true") {
        result = true;
        document.getElementById("output").innerText = result;
    }
  });
