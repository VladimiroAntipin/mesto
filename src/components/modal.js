import { formEditNameInput, formEditJobInput, nameInputTarget, jobInputTarget, popupEdit, formEdit, popupAdd, formAdd, popupImg, imagePopup } from './utils.js';

// EDIT POPUP //
export function openEditPopup() {
    popupEdit.classList.add('popup_opened');
    formEdit.classList.add('form_opened');
}

export function closeEditPopup() {
    popupEdit.classList.remove('popup_opened');
    formEdit.classList.remove('form_opened');
}

//ADD POPUP //
export function openAddPopup() {
    popupAdd.classList.add('popup_opened');
    formAdd.classList.add('form_opened');
}

export function closeAddPopup() {
    popupAdd.classList.remove('popup_opened');
    formAdd.classList.remove('form_opened');
}

// EDIT-FORM //
export function handleFormSubmit(evt) {
    evt.preventDefault();

    const nameInputValue = formEditNameInput.value;
    const jobInputValue = formEditJobInput.value;

    jobInputTarget.textContent = jobInputValue;
    nameInputTarget.textContent = nameInputValue;
};

// CLOSE POPUP WITH ESC //

document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        popupEdit.classList.remove('popup_opened');
        formEdit.classList.remove('form_opened');
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        popupAdd.classList.remove('popup_opened');
        formAdd.classList.remove('form_opened');
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        popupImg.classList.remove('popup-img_opened');
        imagePopup.classList.remove('popup-img__image_opened');
    }
});

// CLOSE POPUP WHEN CLICK OUTSIDE POPUP //

popupEdit.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
        popupEdit.classList.remove('popup_opened');
        formEdit.classList.remove('form_opened');
    }
});

popupAdd.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
        popupAdd.classList.remove('popup_opened');
        formAdd.classList.remove('form_opened');
    }
});

popupImg.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
        popupImg.classList.remove('popup-img_opened');
        imagePopup.classList.remove('popup-img__image_opened');
    }
});
