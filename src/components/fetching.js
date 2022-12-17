import { changeProfileInfo } from ".";
import { getCards, getUserInfo } from "./api";
import { renderCard } from "./card";
import { showError } from "./utils";

export let userId = null;

Promise.all([getUserInfo(), getCards()])
  .then(([userInfo, cards]) => {
    userId = userInfo._id;
    changeProfileInfo(userInfo);
    cards.forEach((card) => renderCard(card, userInfo._id));
  })
  .catch(showError("Can't fetch data"));