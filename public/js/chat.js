//connection
const socket = io.connect('http://localhost:3000/');

const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

//emit event
btn.addEventListener('click',()=>{
    if(!handle.value){
        alert("Please fill the handle input!");
        return;
    }
    if(!message.value){
        alert("Message is empty");
        return;
    }
    socket.emit("chat", {
        handle: handle.value,
        message: message.value
    })
    message.value = "";
})

message.addEventListener("keypress", ()=>{
    socket.emit("keypress",{
        handle: handle.value
    })
})

//listen event
socket.on("chat",(data)=>{
    output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message}</p>`
    feedback.innerHTML = "";
})

socket.on("keypress",(data)=>{
    feedback.innerHTML = `<p>${data.handle} is typing...</p>`;
})