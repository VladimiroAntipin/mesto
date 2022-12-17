import "../index.css";
import "./fetching";

import { editAvatarRequest, editProfileRequest, postNewCard } from "./api";
import { cardWrapperNode, createCardItem, render } from "./card";
import { userId } from "./fetching";
import { createPopup } from "./modal";
import { configSelectors, showError } from "./utils";
import { enableValidation } from "./validate";
import { formAdd,formUpdateAvatar } from "./constants";

export const formEdit = document.querySelector("#form-edit");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__text");
const profileAvatar = document.querySelector(".profile__avatar");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddCards = document.querySelector(".profile__add-button");
const buttonEditAvatar = document.querySelector(".profile__avatar-edit-button");

// INPUT //
export const inputEditName = document.querySelector("#name-input");
export const inputEditJob = document.querySelector("#job-input");
export const inputAddName = document.querySelector("#place-name-input");
export const inputAddUrl = document.querySelector("#url-input");
export const inputUpdateAvatar = document.querySelector("#url-avatar");

const buttonAddIcon = new URL("../images/add-button.svg", import.meta.url);
const buttonCloseIcon = new URL("../images/close-icon.svg", import.meta.url);
const buttonEditIcon = new URL("../images/edit-button.svg", import.meta.url);
const headerLineImage = new URL("../images/header-line.jpg", import.meta.url);
const headerLogoImage = new URL("../images/header-logo.svg", import.meta.url);
const buttonLikeIcon = new URL("../images/like-button.svg", import.meta.url);
const buttonLikeActiveIcon = new URL("../images/like-button-active.svg", import.meta.url);
const profileAvatarImage = new URL("../images/profile-avatar.jpg", import.meta.url);
const buttonTrashIcon = new URL("../images/Trash.svg", import.meta.url);

const projectImages = [
  { name: "Add Button", link: buttonAddIcon },
  { name: "Close Button", link: buttonCloseIcon },
  { name: "Edit Button", link: buttonEditIcon },
  { name: "Header Line", link: headerLineImage },
  { name: "Header Logo", link: headerLogoImage },
  { name: "Like Button", link: buttonLikeIcon },
  { name: "Like Button Active", link: buttonLikeActiveIcon },
  { name: "Profile Avatar", link: profileAvatarImage },
  { name: "Trash Button", link: buttonTrashIcon },
];

// MODAL //
export function changeProfileInfo({ name, avatar: avatarSrc, about }) {
  if (typeof name !== "undefined") {
    profileName.textContent = name;
  }
  if (typeof avatarSrc !== "undefined") {
    profileAvatar.src = avatarSrc;
  }
  if (typeof about !== "undefined") {
    profileDescription.textContent = about;
  }
}

const modals = [
  {
    trigger: buttonEditProfile,
    element: formEdit,
    handler: handleProfileEditSubmit,
  },
  {
    trigger: buttonAddCards,
    element: formAdd,
    handler: handleAddCardFormSubmit,
  },
  {
    trigger: buttonEditAvatar,
    element: formUpdateAvatar,
    handler: handleChangeAvatar,
  },
];

modals.forEach(({ element, handler, trigger }) => {
  const popup = createPopup(
    [...document.querySelectorAll(".popup")].find((popupElement) =>
      popupElement.contains(element)
    )
  );

  trigger.addEventListener("click", popup.open);
  element.querySelector('.popup__close').addEventListener('click', popup.close)
  element.addEventListener("click", (e) => e.stopPropagation());

  const formButton = element.querySelector("button[type='submit']");
  const initialSubmitButtonText = formButton.textContent;
  const resetSubmitText = () =>
    (formButton.textContent = initialSubmitButtonText);
  const resetForm = () => element.reset();

  element.addEventListener("submit", (ev) => {
    formButton.textContent = "Сохранение ...";

    handler(ev)
      .finally(popup.close)
      .finally(resetSubmitText)
      .finally(resetForm);
  });
});

// EDIT-FORM //

export function handleProfileEditSubmit(evt) {
  evt.preventDefault();

  const nameInputValue = inputEditName.value;
  const jobInputValue = inputEditJob.value;

  return editProfileRequest(nameInputValue, jobInputValue)
    .then(() => {
      profileDescription.textContent = jobInputValue;
      profileName.textContent = nameInputValue;
    })
    .catch(showError("Failed to edit profile info"));
}

// CARDS //

export function handleAddCardFormSubmit(evt) {
  if (!userId) return;
  evt.preventDefault();

  const cardData = {
    link: inputAddUrl.value,
    name: inputAddName.value,
  };

  return postNewCard(cardData)
    .then((card) => {
      const newCard = createCardItem(card, userId);
      render(cardWrapperNode, newCard, "prepend");
    })
    .catch(showError("Failed to create new card"));
}

// CHANGE AVATAR //

export function handleChangeAvatar(evt) {
  evt.preventDefault();

  const inputAvatarValue = inputUpdateAvatar.value;
  return editAvatarRequest(inputAvatarValue)
    .then(() => {
      profileAvatar.src = inputAvatarValue;
      formUpdateAvatar.reset();
    })
    .catch(showError("New avatar upload failed"));
}

// VALIDATION //

enableValidation(configSelectors);