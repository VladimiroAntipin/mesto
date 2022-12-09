import { formAddNameInput, formAddUrlInput, formAdd, popupImg, imagePopup, imagePopupImg, imagePopupText, imagePopupClose } from './utils.js';

const initialCards = [
    { name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
    { name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' },
    { name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
    { name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' },
    { name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' },
    { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' }
];

const cardWrapperNode = document.querySelector('#cards');

initialCards.forEach(card => {
    const newCardNode = createCardItem(card);
    render(cardWrapperNode, newCardNode, 'append');

    const elementImage = newCardNode.querySelector('.element__photo');

    elementImage.onclick = function () {
        popupImg.classList.add('popup-img_opened');
        imagePopup.classList.add('popup-img__image_opened');
        imagePopupImg.src = card.link;
        imagePopupImg.alt = card.name;
        imagePopupText.textContent = card.name;
    }

    imagePopupClose.onclick = function () {
        imagePopup.classList.remove('popup-img__image_opened');
        popupImg.classList.remove('popup-img_opened');
    };
});

export function createCardItem(card) {
    const cardTemplate = document.getElementById("element");
    const newCardNode = cardTemplate.content.cloneNode(true).querySelector('.element');
    const elementImage = newCardNode.querySelector('.element__photo');
    const elementText = newCardNode.querySelector('.element__place');
    const elementTrashNode = newCardNode.querySelector('.element__trash-button');
    const elementLikeButtonNode = newCardNode.querySelector('.element__like-button');

    elementImage.src = card.link;
    elementImage.alt = card.name;
    elementText.textContent = card.name;

    elementTrashNode.addEventListener('click', () => {
        newCardNode.remove();
    });

    elementLikeButtonNode.addEventListener('click', () => {

        // if like button has class element__like-button_active
        if (elementLikeButtonNode.classList.contains('element__like-button_active')) {
            elementLikeButtonNode.classList.remove('element__like-button_active');
        } else {
            elementLikeButtonNode.classList.add('element__like-button_active');
        }
    });

    return newCardNode;
}

export function render(whereNode, insertNode, how) {
    if (how === 'append') {
        whereNode.append(insertNode);
    } else if (how === 'prepend') {
        whereNode.prepend(insertNode);
    }
}

// description: adding photo through popup with 2 fields, name and URL //
export function handleAddCardFormSubmit(evt) {
    evt.preventDefault();

    const cardData = {
        link: formAddUrlInput.value,
        name: formAddNameInput.value,
    };

    const newCardNode = createCardItem(cardData);
    render(cardWrapperNode, newCardNode, 'prepend');
    formAdd.reset();
}