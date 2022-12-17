const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-55",
    headers: {
      authorization: "9f77c13f-1f75-4931-b0bc-f8990565dc87",
      "Content-Type": "application/json",
    },
  };
  
  export function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  
  export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: config.headers,
    }).then(checkResponse);
  };
  
  export const getCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "GET",
      headers: config.headers,
    }).then((res) => checkResponse(res));
  };
  
  export const editProfileRequest = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => checkResponse(res));
  };
  
  export const postNewCard = (card) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(card),
    }).then((res) => res.json());
  };
  
  export const putLike = (card) => {
    return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
      method: "PUT",
      headers: config.headers,
      body: JSON.stringify(card),
    }).then((res) => res.json());
  };
  
  export const deleteLike = (card) => {
    return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
      method: "DELETE",
      headers: config.headers,
      body: JSON.stringify(card),
    }).then((res) => res.json());
  };
  
  export const deleteCard = (card) => {
    return fetch(`${config.baseUrl}/cards/${card._id}`, {
      method: "DELETE",
      headers: config.headers,
      body: JSON.stringify(card),
    }).then((res) => res.json());
  };
  
  export const editAvatarRequest = (avatarSrc) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatarSrc,
      }),
    }).then((res) => res.json());
  };