
import taskAsync from './script.js';

taskAsync();

// const chat = document.querySelector('#chat');
// const chatInput = document.querySelector("#chat-input")

// function createNewMessage (fromWho, currentTime, userPhotoUrl, text) {
//     const message = document.createElement('div');
//     const messageInfo = document.createElement('div');
//     const userPhoto = document.createElement('div');
//     const img = document.createElement('img');
//     const userInfo = document.createElement('div');
//     const userName = document.createElement('a');
//     const sendingTime = document.createElement('span');
//     const bottomBorder = document.createElement('div');
//     const messageContent = document.createElement('div');

//     message.classList.add("message");
//     messageInfo.classList.add("message-info");
//     userPhoto.classList.add("user-photo");
//     userInfo.classList.add("user-info");
//     userName.classList.add("user-name");
//     sendingTime.classList.add("sending-time");
//     bottomBorder.classList.add("bottom-border");
//     messageContent.classList.add("message-content");

//     userName.textContent = fromWho;
//     sendingTime.textContent = "Сегодня, в " + currentTime;
//     messageContent.textContent = `${text}`;
//     img.src = userPhotoUrl;







//     userPhoto.append(img);
//     userInfo.append(userName, sendingTime, bottomBorder)
//     messageInfo.append(userPhoto, userInfo);
//     message.append(messageInfo, messageContent)


//     return message;
// }

// function getCurrentTime () {
//     return String(new Date()).slice(15, 24);
// }

// const sendButton = document.querySelector("button");
// sendButton.addEventListener("click", () => {
//     chat.append(createNewMessage('me', getCurrentTime(), '#', `${chatInput.value}`));
    
//     chat.lastChild.scrollIntoView({ 
//         block: 'nearest',
//         behavior: 'smooth',
//     });

// })

// chat.append(createNewMessage('Bot', getCurrentTime(), './favicon.ico', `Привет! Я некий абстрактный чат-бот. Напиши, пожалуйста, в чате, как я могу к тебе обращаться?`));