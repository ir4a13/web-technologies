const filmsHeader = document.getElementById('films_header');
const filmItem = document.querySelector('li.film');

filmsHeader.addEventListener('click', () => {
    if (filmsHeader.style.color === 'white') {
        filmsHeader.style.color = 'black';
        filmsHeader.style.backgroundColor = 'yellow';
    } else {
        filmsHeader.style.color = 'white';
        filmsHeader.style.backgroundColor = 'violet';
    }
})

filmItem.addEventListener('click', () => {
    if (filmItem.style.color === 'white') {
        filmItem.style.color = 'black';
        filmItem.style.backgroundColor = 'yellow';
    } else {
        filmItem.style.color = 'white';
        filmItem.style.backgroundColor = 'violet';
    }
})


// Buttons
const sanMarinoImg = document.getElementById('sanMarino');
const newImgContainer = document.getElementById('addContainer');

function onAddClick() {
    newImgContainer.appendChild(sanMarinoImg.cloneNode());
}

function onDeleteClick() {
    if (newImgContainer.childElementCount === 0) {
        return;
    }
    const lastAddedImage = newImgContainer.children[newImgContainer.childElementCount - 1];
    newImgContainer.removeChild(lastAddedImage);
}

function onEnlargeClick() {
    const lastAddedImage = newImgContainer.childElementCount === 0 ? sanMarinoImg : newImgContainer.children[newImgContainer.childElementCount - 1];
    const oldWidth = lastAddedImage.width;
    const oldHeight = lastAddedImage.height;
    lastAddedImage.height = oldHeight * 1.1;
    lastAddedImage.width = oldWidth * 1.1;
}

function onReduceClick() {
    const lastAddedImage = newImgContainer.childElementCount === 0 ? sanMarinoImg : newImgContainer.children[newImgContainer.childElementCount - 1];
    const oldWidth = lastAddedImage.width;
    const oldHeight = lastAddedImage.height;
    lastAddedImage.height = oldHeight * 0.9;
    lastAddedImage.width = oldWidth * 0.9;
}