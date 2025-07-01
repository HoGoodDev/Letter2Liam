const cardOpener = document.querySelector(".js-card-opener");
const body = document.body;
const typedMessage = document.getElementById("typedMessage");

const message = `
Dear Liam, 
I just wanted to tell you how incredibly perfect you are... the most unexpected and beautiful thing that’s ever happened to me. I’m so deeply grateful to have you in my life. Even though there's an entire ocean between us, my love for you crosses every wave, every mile, and only grows stronger with time. You’ve made life feel more meaningful, more exciting, and more hopeful than I ever thought possible.

It’s wild to think that not long ago, we were just two strangers playing MC together and now, you’re my best friend, my soulmate, and the person I want to build everything with. I love you more than anything, and I can’t wait for the day I finally get to love you in person, to close the distance and start a new chapter side by side. <3

Forever yours,
Your future wifey Holly 💋`;

let charIndex = 0;
let typingInterval;

typedMessage.textContent = "";

cardOpener.onclick = () => {
  body.classList.toggle("open");
  if (body.classList.contains("open")) {
    startTyping();
  } else {
    resetTyping();
  }
};

function startTyping() {
  typedMessage.textContent = "";
  charIndex = 0;
  typingInterval = setInterval(() => {
    if (charIndex < message.length) {
      typedMessage.textContent += message.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 40);
}

function resetTyping() {
  clearInterval(typingInterval);
  typedMessage.textContent = "";
}
