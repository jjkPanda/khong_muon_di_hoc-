const messages = [
    "Sao lại không?",
    "Đi học vui mà",
    "Vẫn không muốn đi hở",
    "Đi đi cho kẹo",
    "Sao ấn không lắm z :((",
    "Không muốn đi học tới z hả",
    "Cháu nào ấn không cho đi date với 44",
    "Kiên trì thế",
    "Thế lày thì chịu ròi"
    

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