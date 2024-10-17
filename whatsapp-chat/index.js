const messages = document.getElementById("messages");
const send = document.getElementById("send");
const sending = document.getElementById("sending");
const message = document.getElementById("message");
const down = document.getElementById("down");
const goDown = document.getElementById("goDown");
const firstTime = document.getElementById("firstTime");
let time = "";

function closeWhatsapp() {
  parent.closeWhatsapp();
}

time = showTime();
firstTime.textContent = time


send.addEventListener("submit", function (event) {
  event.preventDefault();

  if (message.value !== "") {
    time = showTime();
    const newMessage = document.createElement("li");
    newMessage.classList.add("right");
    newMessage.innerHTML = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.62 30.93"> <g id="Layer_1-2" data-name="Layer 1"> <path d="m27.37,0H0s0,30.93,0,30.93L31.65,8.21C35.75,5.26,33.02,0,27.37,0Z" fill="#064" /> </g> </svg> <i class="fa fa-arrows-turn-right"></i><span> ${message.value} </span><sub> ${time} <i class="fa fa-check-double"></i> </sub> `;
    messages.append(newMessage);
    sending.classList.remove("fa-paper-plane");
    sending.classList.add("fa-microphone");
    message.value = "";

    const lastMessage = document.createElement("li");
    lastMessage.classList.add("left");
    lastMessage.innerHTML = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.62 30.93"><g id="Layer_1-2" data-name="Layer 1"> <path d="m6.25,0h27.37v30.93L1.97,8.21C-2.14,5.26.6,0,6.25,0Z" fill="#333"/></g></svg><span>👋 Hi, my name is Wisdom and I am a Frontend Developer and I built this whatsapp for Fun, Pls tell me what you think about it, Not here! but on the real website. And you can check my portfolio: <a target="_blank" href="https://wisdom-ofogba.vercel.app">https://wisdom-ofogba.vercel.app</a></span><sub>${time}</sub>`;
    messages.append(lastMessage);

    const thirsMessage = document.createElement("li");
    thirsMessage.classList.add("left");
    thirsMessage.innerHTML = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.62 30.93"><g id="Layer_1-2" data-name="Layer 1"> <path d="m6.25,0h27.37v30.93L1.97,8.21C-2.14,5.26.6,0,6.25,0Z" fill="#333"/></g></svg><span>I'm the developer of this app. Need a Front-End Developer? <a href="mailto:wisetega007@gmail.com">Contact me!</a></span><sub>${time}</sub>`;
    messages.append(thirsMessage);
    messages.append(down)
  }
  goDown.click()
});

message.addEventListener("focus", () => {
  sending.classList.add("fa-paper-plane");
  sending.classList.remove("fa-microphone");
});


function showTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // Hour '0' should be '12'

  // Add leading zeros to minutes and seconds
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  const timeString = `${hours}:${formattedMinutes} ${ampm} `;
  
  time = timeString;
  
  return time
  // Display the time in an element with id 'clock' (if present in the HTML)
}