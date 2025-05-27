//by click to the particular box, the color of background will change

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(event) {
    console.log(event.target);
    if(event.target.id === 'grey') {
        body.style.backgroundColor = 'grey';
    }
    if(event.target.id === 'white') {
        body.style.backgroundColor = 'white';
    }
    if(event.target.id === 'blue') {
        body.style.backgroundColor = 'blue';
    }
    if(event.target.id === 'yellow') {
        body.style.backgroundColor = 'yellow';
    }
});
});








