let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
recognition = new SpeechRecognition();
recognition.lang = "en";
// recognition.continuous = true;

const startBtn = document.getElementById("startbtn");
const endBtn = document.getElementById("stopbtn");

recognition.onstart = function () {
  console.log("VR Active");
};
recognition.onend = function (e) {
  console.log("VR Deactive");
};

recognition.onresult = (e) => {
  let current = e.resultIndex;
  let transcript = e.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  console.log(transcript);

  if (transcript.includes("hello") || transcript.includes("hi")) {
    speechOut("Hello Sir");
  } else if (transcript.includes("goodbye") || transcript.includes("bye")) {
    speechOut("Good Bye Sir! Have a Nice Day");
  } else if (transcript.includes("how are you")) {
    speechOut("I am absolutely fine, what about you!");
  } else if (transcript.includes("fine")) {
    speechOut("Ohhhh Great");
  } else if (transcript.includes("open youtube")) {
    speechOut("Opening Youtube Sir");
    window.open("https://www.youtube.com/");
  } else if (transcript.includes("open instagram")) {
    speechOut("Opening instagram Sir");
    window.open("https://www.instagram.com/");
  } else if (transcript.includes("open github")) {
    speechOut("Opening github Sir");
    window.open("https://www.github.com/");
  } else if (transcript.includes("firebase console")) {
    speechOut("Opening firebase console Sir");
    window.open("https://console.firebase.google.com/");
  } else if (transcript.includes("open gmail")) {
    speechOut("Opening gmail Sir");
    window.open("https://www.gmail.google.com/");
  } else if (
    transcript.includes("google drive") ||
    transcript.includes("drive")
  ) {
    speechOut("Opening google drive Sir");
    window.open("https://www.drive.google.com/");
  } else if (transcript.includes("firebase")) {
    speechOut("Opening firebase Sir");
    window.open("https://firebase.google.com/");
  } else if (transcript.includes("open google")) {
    speechOut("Opening google Sir");
    window.open("https://www.google.com/");
  } else if (transcript.includes("search for")) {
    speechOut("here what i found");

    let input = transcript.split("");
    input.splice(0, 11);
    input.pop();
    input = input.join("").split(" ").join("+");
    window.open(`https://www.google.com/search?q=${input}`);
  } else if (transcript.includes("search on youtube for")) {
    speechOut("here the result I found on youtube");

    let input = transcript.split("");
    input.splice(0, 21);
    input.pop();
    input = input.join("").split(" ").join("+");
    window.open(`https://www.youtube.com/results?search_query=${input}`);
  } else if (transcript.includes("calculate")) {
    speechOut(
      `your answer is ${eval(transcript.replaceAll(",", "").replaceAll(".","").slice(9))}`
    );
  } else if (transcript.includes("great job") || transcript.includes("good")) {
    speechOut("Thankyou sir");
  } else if (transcript.includes("open figma")) {
    speechOut("Opening Figma Sir");
    window.open("https://figma.com/");
  }
};
startBtn.addEventListener("click", () => {
  recognition.start();
});
// Speech
function speechOut(message) {
  const speech = new SpeechSynthesisUtterance();

  /*  // Different Voices
  const allVoices = speechSynthesis.getVoices();
  speech.voice = allVoices[100]; // To change voice put index number
*/
  speech.text = message;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}

// Setting UP User Detail functionality with localStorage
let userDataContainer = document.getElementById("user-data-container");

if (localStorage.getItem("user_details") === null) {
} else {
  userDataContainer.style.display = "none";
}
