/* eslint-disable */

import OpenAI from "openai";
//const {OpenAI} = require("openai");

const openai = new OpenAI({
 apiKey: "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", // не воровать
});

/* export default */ async function taskAsync (ask) {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: ask }],
      });
    
      printAnswer(chatCompletion.choices[0].message.content);
}

function printAnswer(value) {
    console.log(value)
}

taskAsync('Скажи "Привет!"')


console.log("ПОДКЛЮЧЕНО");


// чтобы получить ответ нужно написать node script и иметь vpn (я использую ZoogVPN, он бесплатный и кроет весь трафик)