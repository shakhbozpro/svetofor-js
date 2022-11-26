const elLightsWrapper = document.querySelector(".lights-wrapper");
const elRedLight = document.querySelector("#red-light");
const elYellowLight = document.querySelector("#yellow-light");
const elGreenLight = document.querySelector("#green-light");
const elBtn = document.querySelector(".js-btn");
const elResultTitle = document.querySelector(".title");

let recording = new webkitSpeechRecognition();

elBtn.addEventListener("click", (evt) => {
  recording.start();
  recording.lang = "Uz-uz";

  recording.onerror = function (e) {
    elRedLight.style.background = ''
    elYellowLight.style.background = ''
    elGreenLight.style.background = ''
    elResultTitle.textContent = 'Qaysi rangni hohlaysiz'
  }

  recording.onend = function (e) {
    console.log("Aloqa tugadi !");
  }

  recording.onresult = function (evt) {
    console.log(evt.results[0][0]);
    if (evt.results[0][0].transcript === "qizil" || evt.results[0][0].transcript === "красный" || evt.results[0][0].transcript === "red") {
      elYellowLight.style.backgroundColor = "";
      elGreenLight.style.backgroundColor = "";
      elRedLight.style.backgroundColor = "#DC3545";
      elLightsWrapper.style.boxShadow = "0 0 5px 4px #DC3545";
      elResultTitle.textContent = evt.results[0][0].transcript;
    } else if (evt.results[0][0].transcript === "sariq" || evt.results[0][0].transcript === "жёлтый" || evt.results[0][0].transcript === "yellow") {
      elRedLight.style.backgroundColor = "";
      elGreenLight.style.backgroundColor = "";
      elYellowLight.style.backgroundColor = "#FFC107";
      elLightsWrapper.style.boxShadow = "0 0 5px 4px #FFC107";
      elResultTitle.textContent = evt.results[0][0].transcript;
    } else if (evt.results[0][0].transcript === "yashil" || evt.results[0][0].transcript === "зелёный" || evt.results[0][0].transcript === "green") {
      elRedLight.style.backgroundColor = "";
      elYellowLight.style.backgroundColor = "";
      elGreenLight.style.backgroundColor = "#198754";
      elLightsWrapper.style.boxShadow = "0 0 5px 4px #198754";
      elResultTitle.textContent = evt.results[0][0].transcript;
    } else if (evt.results[0][0].transcript === "hamma rangi yonsin") {
      elRedLight.style.backgroundColor = "#DC3545";
      elYellowLight.style.backgroundColor = "#FFC107";
      elGreenLight.style.backgroundColor = "#198754";
      elLightsWrapper.style.boxShadow = "0 0 2px 4px #414141";
      elResultTitle.textContent = evt.results[0][0].transcript;
    } else {
      elRedLight.style.backgroundColor = "";
      elYellowLight.style.backgroundColor = "";
      elGreenLight.style.backgroundColor = "";
      elResultTitle.textContent = evt.results[0][0].transcript;
    }
  }
})