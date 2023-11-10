const chatForm = document.getElementById('messagespace');

const socket = io();

socket.on('message', message=>{
    console.log(message)
});


chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elememts.msg.value;
    console.log(msg);
})