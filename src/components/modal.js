import { popupEdit, popupAdd, popupImg, popupUpdateAvatar, formUpdateAvatar } from './utils.js';
import { handleFormSubmit, changeAvatar } from './index.js';

const formEdit = document.querySelector('#form-edit');
const overlayPopupEdit = document.querySelector("#popup-edit-overlay");
const overlayPopupAdd = document.querySelector("#popup-add-overlay");
const overlayPopupImg = document.querySelector(".popup__overlay_dark");
const overlayPopupUpdateAvatar = document.querySelector("#popup-update-avatar-overlay");

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

// CLOSE POPUP WITH ESC //

function closeByEsc(evt) {
    if (evt.key === "Escape") {
        closePopup(popupEdit);
        closePopup(popupAdd);
        closePopup(popupImg);
        closePopup(popupUpdateAvatar);
    }
}

// CLOSE POPUP WHEN CLICK OUTSIDE POPUP //

overlayPopupEdit.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(popupEdit);
    }
});

overlayPopupAdd.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(popupAdd);
    }
});

overlayPopupImg.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(popupImg);
    }
});

overlayPopupUpdateAvatar.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(popupUpdateAvatar);
    }
});

// EDIT-FORM //

formEdit.addEventListener('submit', handleFormSubmit);

// UPDATE AVATAR FORM //

formUpdateAvatar.addEventListener('submit', changeAvatar);