
function showAlert() {
    // Display the alert box
    var alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    alertBox.innerHTML = "<h2>Hello, World</h2><button onclick='hideAlert()'>Close</button>";
    document.body.appendChild(alertBox);


    // Play the audio
    const greeting = new SpeechSynthesisUtterance('Hello, World');
    window.speechSynthesis.speak(greeting);


    // Hide content
    document.querySelector('.content').style.display = 'none';
  }
  
    //hide alert
  function hideAlert() {
    var alertBox = document.querySelector(".alert-box");
    if (alertBox) {
      alertBox.parentNode.removeChild(alertBox);
      document.querySelector('.content').style.display = 'block'; 
    }
  }