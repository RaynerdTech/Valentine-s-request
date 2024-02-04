function showMessage() {
    var message = document.getElementById('hiddenMessage');
    var heartContainer = document.getElementById('heart-container');
    var cryContainer = document.getElementById('cry-container');

    message.style.display = 'block';
    heartContainer.style.display = 'none';
    cryContainer.style.display = 'none';
}

function chooseOption(option) {
    var heartContainer = document.getElementById('heart-container');
    var cryContainer = document.getElementById('cry-container');

    if (option === 'yes') {
        heartContainer.style.display = 'inline-block';
        cryContainer.style.display = 'none';
        heartContainer.classList.add('zoom');
        cryContainer.classList.remove('zoom');
    } else if (option === 'no') {
        cryContainer.style.display = 'inline-block';
        heartContainer.style.display = 'none';
        cryContainer.classList.add('zoom');
        heartContainer.classList.remove('zoom');
    }
}
