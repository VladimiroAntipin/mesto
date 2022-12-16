export const getMyId = (myId) => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-55/users/me', {
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            return myId;
        });
};

export const getCards = () => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-55/cards', {
        method: "GET",
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
      });
};

export const editProfileRequest = () => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-55/users/me', {
        method: "PATCH",
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Jacques Cousteau',
            about: 'Sailor, researcher'
        })
    })
        .then(res => res.json())
        .then((result) => {
            console.log(result);
        });
};

export const postNewCard = (card) => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-55/cards', {
        method: "POST",
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
        .then(res => res.json())
};

export const putLike = (card) => {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards/likes/${card._id}`, {
        method: "PUT",
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
        .then(res => res.json());
};

export const deleteLike = (card) => {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards/likes/${card._id}`, {
        method: "DELETE",
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
        .then(res => res.json());
};

export const deleteCard = (card) => {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards/${card._id}`, {
        method: "DELETE",
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
        .then(res => res.json());
};

export const editAvatarRequest = () => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-55/users/me/avatar', {
        method: "PATCH",
        headers: {
            authorization: '9f77c13f-1f75-4931-b0bc-f8990565dc87',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg' })
    })
        .then(res => res.json());
};