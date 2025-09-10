const messages = [
    "ເຈົ້າແນ່ໃຈບໍ່🥺",
    "ແນ່ໃຈແທ້ນິ😤",
    "ຄິດດີແລ້ວວາ👍🏻",
    "ບໍ່ຮັກແທ້ວາ😒...",
    "ລອງຄິດດີໆ🥹...",
    "ຖ້າຕອບບໍ່ອີກ ຂ້ອຍສິຄຽດແລ້ວໃດ🥹...",
    "ຄຽດແລ້ວ😭...",
    "ຄຽດແຮງ ຄຽດສຸດໆ ຄຽດຈຳ😭!!...",
    "Okສິບໍ່ຖາມແລ້ວ🙂...",
    "ເປັນຫຍັງຄືບໍ່ຮັກຂ້ອຍ!! ❤️"
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