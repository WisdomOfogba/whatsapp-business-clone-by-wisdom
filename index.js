const intro = document.getElementById("intro");
const chat = document.getElementById("chat");
const number = document.getElementById("number");
const firstTime = document.getElementById("firstTime");
let time = "";

setTimeout(function () {
intro.style.display = "none";
}, 3000);

function openWhatsapp() {
chat.classList.add("open");
chat.classList.remove("close");
}

time = showTime();
firstTime.textContent = time;

function closeWhatsapp() {
  chat.classList.remove("open");
  chat.classList.add("close");
  number.style.visibility = "hidden";
}

function showTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // Hour '0' should be '12'

  // Add leading zeros to minutes and seconds
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${formattedMinutes} ${ampm} `;

  time = timeString;

  return time;
  // Display the time in an element with id 'clock' (if present in the HTML)
}
