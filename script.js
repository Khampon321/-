const messages = [
    "คุณแน่ใจหรอ🥺",
    "แน่ใจใช่มั้ย😤",
    "คิดดีแล้วหรอ👍🏻",
    "ไม่รักจริงหรอ😒...",
    "ลองคิดอีกที🥹...",
    "ถ้าตอบไม่ จะงอนแล้วนะ🥹...",
    "งอนแล้ว😭...",
    "Okงอนมากๆ งอนแบบโคตรๆ งอนสุดๆ😭!!...",
    "Okจะไม่ถามอีกแล้ว🙂...",
    "ทำไมไม่รักกันแล้ว!!😭"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}