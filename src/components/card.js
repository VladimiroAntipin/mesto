import { openPopup } from './modal.js';
import { formAdd, popupImg } from './utils.js';
import { handleAddCardFormSubmit } from './index.js';
import { getCards, putLike, deleteLike, deleteCard } from './api.js';

const imagePopupImg = document.querySelector(".popup__photo");
const textPopupImg = document.querySelector(".popup__text");

const cardTemplate = document.getElementById("element");
export const cardWrapperNode = document.querySelector('#cards');

function renderCard(card) {
    const newCardElement = createCardItem(card);
    render(cardWrapperNode, newCardElement, 'append');
}

getCards().then(cards => cards.forEach(renderCard));

export function createCardItem(card) {
    if (!card.link === "https://pictures.s3.yandex.net/") {
        return;
    }

    const newCard = cardTemplate.content.cloneNode(true).querySelector('.element');
    const elementImage = newCard.querySelector('.element__photo');
    const elementText = newCard.querySelector('.element__place');
    const buttonDeleteElement = newCard.querySelector('.element__trash-button');
    const buttonLikeElement = newCard.querySelector('.element__like-button');
    const likeCounterElement = newCard.querySelector('.element__like-counter');

    elementImage.src = card.link;
    elementImage.alt = card.name;
    elementText.textContent = card.name;
    likeCounterElement.innerText = card.likes && card.likes.length || 0;

    elementImage.addEventListener('click', () => {
        openPopup(popupImg);
        imagePopupImg.src = card.link;
        imagePopupImg.alt = card.name;
        textPopupImg.textContent = card.name;
    });

    if (card.owner._id === "1ae283bd7732c4dc90790883") {
        buttonDeleteElement.addEventListener('click', () => {
            deleteCard(card).then(() => newCard.remove());
        });
    } else {
        buttonDeleteElement.remove();
    }

    buttonLikeElement.addEventListener('click', () => {
        const isLiked = buttonLikeElement.classList.contains('element__like-button_active');
        buttonLikeElement.classList.toggle('element__like-button_active');
        const likes = parseInt(likeCounterElement.innerText);

        if (isLiked) {
            deleteLike(card).then(() => likeCounterElement.innerText = `${likes - 1}`);
        } else {
            putLike(card).then(() => likeCounterElement.innerText = `${likes + 1}`);
        }
    });

    return newCard;
};

export function render(whereNode, insertNode, how) {
    if (how === 'append') {
        whereNode.append(insertNode);
    } else if (how === 'prepend') {
        whereNode.prepend(insertNode);
    }
};

formAdd.addEventListener('submit', handleAddCardFormSubmit);