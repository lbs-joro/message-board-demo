
async function ShowMessages(){
    //Hämta meddelanden från apit
    // För varje meddelande skapa en p-tag
    const response = await fetch("http://localhost:8080/api/messages");
    const data = await response.json();

    const messageList = document.querySelector("#message-list");
    messageList.innerHTML = "";
    //console.log(data);
    data.forEach(message => {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = message.content;
        messageList.appendChild(messageElement);

    });

}


async function SendMessage(){
    const messageInput = document.querySelector("#message-input");

    console.log("Message to send is:" + messageInput.value);

    await fetch("http://localhost:8080/api/messages", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            message:messageInput.value
        })

    })
    
    ShowMessages();

}

ShowMessages();