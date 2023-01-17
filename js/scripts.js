function handleRadio(event) {
    event.preventDefault();
    let relaxed = document.getElementById("relaxed")
    let q5 = document.getElementById("q5")
    let q4 = document.getElementById("q4")
    let q3 = document.getElementById("q3")
    let q2 = document.getElementById("q2")
    let q1 = document.getElementById("q1")
    
    if (relaxed.checked === true) {
      document.getElementById("relaxed")
      output = "rust!"
    }
  
document.getElementById("output").innerText = output;  

}
window.addEventListener("load", function() {
  const form = document.getElementById("questions");
    form.addEventListener("submit", handleRadio);
});

//It seems we have detected some Ruby amongst us! why yes.. thats a beautiful deep shade of ruby pickup on indeed. Gather your things quickly for the quest to learn the Ruby language has been bestowed upon you! Make your way to Rumford the Red Ruby Robot in Clinkerton, he will give you a map and supplies you will need. The odds are ever in your favor! Computing  arrival time now....Sincerely Ruby House Robots beep boop beep boo.

//The Java kingdom jury has selected you to  join forces and aid the beloved Script family, Its the only way we have a chance at winning this war. Together we will be called JavaScript!! The internet will soon be run by us!! Quickly you must learn JavaScript!! Your destiny has been chosen, see to it you will.

//Ahh this ones got grit, rough one this one...Python it is. We noticed you liked long walks on the beach as well as snakes, Python is the perfect language for you. Python is very effecent, how else do you think it survives the long days of the desert.