// EDIT POPUP //
// description: show and close popup //
const profileEditButton = document.querySelector('.profile__edit-button');
const editFormCloseButton = document.querySelector('.edit-form__close-icon');
const editFormSubmitButton = document.querySelector('.edit-form__submit');
const editFormOverlay = document.querySelector('.edit-form-overlay')
const editForm = document.querySelector('.edit-form')

profileEditButton.onclick = function () {
    editFormOverlay.classList.add('edit-form-overlay_active');
    editForm.classList.add('edit-form_active');
}

editFormCloseButton.onclick = function () {
    editFormOverlay.classList.remove('edit-form-overlay_active');
    editForm.classList.remove('edit-form_active');
};

editFormSubmitButton.onclick = function () {
    editFormOverlay.classList.remove('edit-form-overlay_active');
    editForm.classList.remove('edit-form_active');
};

// EDIT-FORM //
const nameInput = document.querySelector(".edit-form__first-field");
const jobInput = document.querySelector(".edit-form__second-field");

function handleFormSubmit(evt) {
    evt.preventDefault();

    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;

    const nameInputTarget = document.querySelector(".profile__name");
    const jobInputTarget = document.querySelector(".profile__text");

    jobInputTarget.textContent = jobInputValue;
    nameInputTarget.textContent = nameInputValue;
};

editForm.addEventListener('submit', handleFormSubmit);

// IMAGES //
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardWrapperNode = document.querySelector('#cards');

initialCards.forEach(card => {
    const newCardNode = cardItem(card);
    render(cardWrapperNode, newCardNode, 'append');

    const elementImage = newCardNode.querySelector('.element__photo');

    elementImage.onclick = function () {
        imagePopup.classList.add('image-popup_active');
        imagePopupOverlay.classList.add('image-popup-overlay_active');
        imagePopupImg.src = card.link;
        imagePopupText.textContent = card.name;
    }

    const imagePopup = document.querySelector(".image-popup");
    const imagePopupImg = imagePopup.querySelector(".image-popup__photo");
    const imagePopupText = imagePopup.querySelector(".image-popup__text");
    const imagePopupClose = imagePopup.querySelector(".image-popup__close-icon");
    const imagePopupOverlay = document.querySelector(".image-popup-overlay");
    
    imagePopupClose.onclick = function () {
        imagePopup.classList.remove('image-popup_active');
        imagePopupOverlay.classList.remove('image-popup-overlay_active');
    };
});


function cardItem(card) {
    const cardTemplate = document.getElementById("element");
    const newCardNode = cardTemplate.content.cloneNode(true).querySelector('.element');
    const elementImage = newCardNode.querySelector('.element__photo');
    const elementText = newCardNode.querySelector('.element__place');
    const elementTrashNode = newCardNode.querySelector('.element__trash-button');
    const elementLikeButtonNode = newCardNode.querySelector('.element__like-button');

    elementImage.src = card.link;
    elementText.textContent = card.name;

    //description: remove cards //
    elementTrashNode.addEventListener('click', () => {
        newCardNode.remove();
    });

    //description: like buttons//
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

function render(whereNode, insertNode, how) {
    if (how === 'append') {
        whereNode.append(insertNode);
    } else if (how === 'prepend') {
        whereNode.prepend(insertNode);
    }
}

// description: open and close add popup //
const profileAddButton = document.querySelector('.profile__add-button');
const addFormCloseButton = document.querySelector('.add-form__close-icon');
const addFormSubmitButton = document.querySelector('.add-form__submit');
const addFormOverlay = document.querySelector('.add-form-overlay');
const addForm = document.querySelector('.add-form');

profileAddButton.onclick = function () {
    addFormOverlay.classList.add('add-form-overlay_active');
    addForm.classList.add('add-form_active');
}

addFormCloseButton.onclick = function () {
    addFormOverlay.classList.remove('add-form-overlay_active');
    addForm.classList.remove('add-form_active');
};

addFormSubmitButton.onclick = function () {
    addFormOverlay.classList.remove('add-form-overlay_active');
    addForm.classList.remove('add-form_active');
};

// description: adding photo through popup with 2 fields, name and URL //
const newPhoto = document.querySelector(".add-form");

const imageNameInput = document.querySelector(".add-form__first-field");
const imageUrlInput = document.querySelector(".add-form__second-field");

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();

    const cardData = {
        link: imageUrlInput.value,
        name: imageNameInput.value,
    };

    const newCardNode = cardItem(cardData);
    render(cardWrapperNode, newCardNode, 'prepend');
    newPhoto.reset();
}

newPhoto.addEventListener('submit', handleAddCardFormSubmit);