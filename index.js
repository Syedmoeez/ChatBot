let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I couldn't hear you properly. Could you say that again?";
    
    if(message.includes('Hello'))
    {
       speech.text = "Hi there";
    }

    else if ((message.includes('How are you')) || (message.includes('Hi, how are you')) ||(message.includes('Hey there, how are you')))
    {
        speech.text="I am fine. Nice to meet you.";
    }
    else if ((message.includes("Who are you"))||(message.includes("What are you")))
    {
        speech.text="I am a chatbot.";
    }
    else if ((message.includes("What is your name")) ||(message.includes("What's your name")))
    {
        speech.text="My name is GoodBot";
    }
    else if ((message.includes("What are your abilities"))||(message.includes("What can you do?")))
    {
        speech.text="I can tell you 5 facts about Pakistan";
    }
    else if ((message.includes(" Tell me fact one"))||(message.includes("fact one"))||(message.includes("1"))||(message.includes("first fact")))
    {
        speech.text="The first fact: Pakistan is the fifth most populous country in the world with a whopping 225 million people"
    }
    else if ((message.includes(" Tell me fact two"))||(message.includes("fact two"))||(message.includes("2"))||(message.includes("second fact")))
    {
        speech.text="The second fact: The Majority people in Pakistan are Muslims. Pakistan is the second-most populous muslim country behind Indonesia"
    }
    else if ((message.includes(" Tell me fact three"))||(message.includes("fact three"))||(message.includes("3"))||(message.includes("third fact")))
    {
        speech.text="The third fact: Pakistan is the 33rd largest country in the world by area"
    }
    else if ((message.includes(" Tell me fact four"))||(message.includes("fact four"))||(message.includes("4"))||(message.includes("fourth fact")))
    {
        speech.text="The fourth fact: Pakistan is a country in South Asia"
    }
    else if ((message.includes(" Tell me fact five"))||(message.includes("fact five"))||(message.includes("5"))||(message.includes("fifth fact")))
    {
        speech.text="The fifth fact: Pakistan's full name is Islamic Republic of Pakistan"
    }

    
    
    
    // if(message.includes('fine')){
    //     let finalresult = help[Math.floor(Math.random() * help.length)];
    //     speech.text = finalresult;
    // }
    // if(message.includes('how are you' || 'how are you doing today')){
    //     let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
    //     speech.text = finalresult;
    // }
    // if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
    //     let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
    //     speech.text = finalresult;
    // }
    // if(message.includes('pizza')){
    //     let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
    //     speech.text = finalresult;
    // }
    // if(message.includes('thank you' || 'thank you so much')){
    //     let finalresult = thank[Math.floor(Math.random() * thank.length)];
    //     speech.text = finalresult;
    // }
    // if(message.includes('talk to you' || 'talk')){
    //     let finalresult = closing[Math.floor(Math.random() * closing.length)];
    //     speech.text = finalresult;
    // }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
     mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})