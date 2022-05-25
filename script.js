const buttons = document.querySelectorAll('button');
let selectedButton;

function highlightAndPlay (button) {
    if (selectedButton) {
        selectedButton.classList.remove('highlight');
    }
    selectedButton = button;
    selectedButton.classList.add('highlight');

    const sound = button.getAttribute('data-sound');
    document.getElementById(sound).play();
}

document.addEventListener('keydown', (event) => {
    const keyName = event.code;
    for (let index = 0; index < buttons.length; index++) {
        const keyDown = buttons[index].getAttribute('data-keydown');
        if (keyName == keyDown) {
            highlightAndPlay(buttons[index]);
        }
    }    
});

document.addEventListener('click', (event) => {
    const target = event.target;  
    if (target.nodeName == 'BUTTON') {
        highlightAndPlay(target);
    }
});
