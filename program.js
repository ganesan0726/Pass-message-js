// variables

const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');

// Send click event function;
send.addEventListener('click', deliveryMessage);

function deliveryMessage() {
    let textValue = text.value;
    message.innerHTML = textValue;
}

clear.addEventListener('click', clearField);

function clearField() {
    message.innerHTML = '';
    text.value = '';
}
