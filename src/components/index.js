import '../index.css';

import { formAdd, popupAdd, popupEdit, popupImg, popupUpdateAvatar, formUpdateAvatar, configSelectors } from './utils';
import { enableValidation } from './validate';
import { closePopup, openPopup } from './modal';
import { cardWrapperNode, createCardItem, render } from './card';
import { editProfileRequest, postNewCard, editAvatarRequest, } from './api';

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__text");
const profileAvatar = document.querySelector('.profile__avatar');

// INPUT //
const inputEditName = document.querySelector('#name-input');
const inputEditJob = document.querySelector('#job-input');
const inputAddName = document.querySelector('#place-name-input');
const inputAddUrl = document.querySelector('#url-input');
const inputUpdateAvatar = document.querySelector('#url-avatar');
// BUTTONS //

// Edit profile popup //
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonSubmitEditProfile = document.querySelector('#edit-submit');
const buttonCloseEditProfile = document.querySelector('#edit-close-icon');
// Add card popup //
const buttonAddCards = document.querySelector('.profile__add-button');
const buttonSubmitAddCards = document.querySelector('#add-submit');
const buttonCloseAddCards = document.querySelector('#add-close-icon');
// Card popup //
const buttonClosePopupImage = document.querySelector("#img-close-icon");
// Change avatar popup //
const buttonEditAvatar = document.querySelector(".profile__avatar-edit-button");
const buttonSubmitEditAvatar = document.querySelector("#update-submit");
const buttonCloseEditAvatar = document.querySelector("#update-avatar-close-icon");


const buttonAddIcon = new URL('../images/add-button.svg', import.meta.url);
const buttonCloseIcon = new URL('../images/close-icon.svg', import.meta.url);
const buttonEditIcon = new URL('../images/edit-button.svg', import.meta.url);
const headerLineImage = new URL('../images/header-line.jpg', import.meta.url);
const headerLogoImage = new URL('../images/header-logo.svg', import.meta.url);
const buttonLikeIcon = new URL('../images/like-button.svg', import.meta.url);
const buttonLikeActiveIcon = new URL('../images/like-button-active.svg', import.meta.url);
const profileAvatarImage = new URL('../images/profile-avatar.jpg', import.meta.url);
const buttonTrashIcon = new URL('../images/Trash.svg', import.meta.url);

const projectImages = [
    { name: 'Add Button', link: buttonAddIcon },
    { name: 'Close Button', link: buttonCloseIcon },
    { name: 'Edit Button', link: buttonEditIcon },
    { name: 'Header Line', link: headerLineImage },
    { name: 'Header Logo', link: headerLogoImage },
    { name: 'Like Button', link: buttonLikeIcon },
    { name: 'Like Button Active', link: buttonLikeActiveIcon },
    { name: 'Profile Avatar', link: profileAvatarImage },
    { name: 'Trash Button', link: buttonTrashIcon }
];

// MODAL //

buttonEditProfile.addEventListener('click', () => {
    buttonSubmitEditProfile.classList.add('form__submit_disabled');
    inputEditName.value = profileName.innerText;
    inputEditJob.value = profileDescription.innerText;
    openPopup(popupEdit);
});

buttonAddCards.addEventListener('click', () => {
    buttonSubmitAddCards.classList.add('form__submit_disabled');
    openPopup(popupAdd)
});

buttonEditAvatar.addEventListener('click', () => {
    buttonSubmitEditAvatar.classList.add('form__submit_disabled');
    formUpdateAvatar.reset();
    openPopup(popupUpdateAvatar)
});

buttonCloseAddCards.addEventListener('click', function () {
    formAdd.reset();
    closePopup(popupAdd);
});

buttonCloseEditAvatar.addEventListener('click', () => {
    formUpdateAvatar.reset();
    closePopup(popupUpdateAvatar);
});

buttonClosePopupImage.addEventListener('click', function () {
    closePopup(popupImg);
});


function submitFormPopup(popup, buttonSubmit) {
    const lastTextButtonSubmit = buttonSubmit.innerText;

    buttonSubmit.innerText = 'Сохранение...';
    buttonSubmit.classList.add(configSelectors.inactiveButtonClass);

    setTimeout(() => {
        closePopup(popup);

        setTimeout(() => {
            buttonSubmit.innerText = lastTextButtonSubmit;
        }, 300);

    }, 1500);
}

buttonCloseEditProfile.addEventListener('click', () => closePopup(popupEdit));
buttonSubmitEditProfile.addEventListener('click', () => submitFormPopup(popupEdit, buttonSubmitEditProfile));
buttonSubmitAddCards.addEventListener('click', () => submitFormPopup(popupAdd, buttonSubmitAddCards));
buttonSubmitEditAvatar.addEventListener('click', () => submitFormPopup(popupUpdateAvatar, buttonSubmitEditAvatar));

// EDIT-FORM //

export function handleFormSubmit(evt) {
    evt.preventDefault();

    const nameInputValue = inputEditName.value;
    const jobInputValue = inputEditJob.value;

    editProfileRequest().then(() => {
        profileDescription.textContent = jobInputValue;
        profileName.textContent = nameInputValue;
    });
};

// CARDS //

export function handleAddCardFormSubmit(evt) {
    evt.preventDefault();

    const cardData = {
        link: inputAddUrl.value,
        name: inputAddName.value,
    };

    postNewCard(cardData).then((card) => {
        const newCard = createCardItem(card);
        render(cardWrapperNode, newCard, 'prepend');

        formAdd.reset();
        
    });   
}

// CHANGE AVATAR //

export function changeAvatar(evt) {
    evt.preventDefault();

    editAvatarRequest().then(() => {
        const inputAvatarValue = inputUpdateAvatar.value;
        profileAvatar.src = inputAvatarValue;
        formUpdateAvatar.reset();
    })
};

// VALIDATION //

enableValidation(configSelectors);
