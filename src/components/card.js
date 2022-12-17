import { deleteCard, deleteLike, putLike } from "./api.js";
import { handleAddCardFormSubmit } from "./index.js";
import { createPopup } from "./modal.js";
import { showError } from "./utils.js";
import { formAdd, popupImg } from "./constants.js";

const imagePopupImg = document.querySelector(".popup__photo");
const textPopupImg = document.querySelector(".popup__text");

const cardTemplate = document.getElementById("element");
export const cardWrapperNode = document.querySelector("#cards");

export function renderCard(card, userId) {
  const newCardElement = createCardItem(card, userId);

  render(cardWrapperNode, newCardElement, "append");
}

const getCardLikesCount = (card) => card?.likes?.length ?? 0;

export function createCardItem(card, userId) {
  if (!card.link === "https://pictures.s3.yandex.net/") {
    return;
  }

  const likesCount = getCardLikesCount(card);
  const isUserCard = card.owner._id === userId;
  const likesIds = card.likes.map(({ _id }) => _id);
  const isLiked = likesIds.includes(userId);

  const newCard = cardTemplate.content
    .cloneNode(true)
    .querySelector(".element");

  const elementImage = newCard.querySelector(".element__photo");
  const elementText = newCard.querySelector(".element__place");
  const buttonDeleteElement = newCard.querySelector(".element__trash-button");
  const buttonLikeElement = newCard.querySelector(".element__like-button");
  const likeCounterElement = newCard.querySelector(".element__like-counter");

  const toggleLike = () =>
    buttonLikeElement.classList.toggle("element__like-button_active");

  if (isLiked) {
    toggleLike();
  }

  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementText.textContent = card.name;
  likeCounterElement.textContent = likesCount;

  elementImage.addEventListener("click", () => {
    createPopup(popupImg).open();
    imagePopupImg.src = card.link;
    imagePopupImg.alt = card.name;
    textPopupImg.textContent = card.name;
  });

  if (isUserCard) {
    buttonDeleteElement.addEventListener("click", () => {
      deleteCard(card)
        .then(() => newCard.remove())
        .catch(showError("Fail to delete card"));
    });
  } else {
    buttonDeleteElement.remove();
  }

  buttonLikeElement.addEventListener("click", () => {
    const isLiked = buttonLikeElement.classList.contains(
      "element__like-button_active"
    );
    const likeFunction = isLiked ? deleteLike : putLike;

    likeFunction(card)
      .then(getCardLikesCount)
      .then((cardLikes) => (likeCounterElement.textContent = `${cardLikes}`))
      .then(toggleLike)
      .catch(showError("Like toggle failed"));
  });

  return newCard;
}

export function render(whereNode, insertNode, how) {
  if (how === "append") {
    whereNode.append(insertNode);
  } else if (how === "prepend") {
    whereNode.prepend(insertNode);
  }
}