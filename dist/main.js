/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkResponse\": () => (/* binding */ checkResponse),\n/* harmony export */   \"deleteCard\": () => (/* binding */ deleteCard),\n/* harmony export */   \"deleteLike\": () => (/* binding */ deleteLike),\n/* harmony export */   \"editAvatarRequest\": () => (/* binding */ editAvatarRequest),\n/* harmony export */   \"editProfileRequest\": () => (/* binding */ editProfileRequest),\n/* harmony export */   \"getCards\": () => (/* binding */ getCards),\n/* harmony export */   \"getUserInfo\": () => (/* binding */ getUserInfo),\n/* harmony export */   \"postNewCard\": () => (/* binding */ postNewCard),\n/* harmony export */   \"putLike\": () => (/* binding */ putLike)\n/* harmony export */ });\nvar config = {\n  baseUrl: \"https://mesto.nomoreparties.co/v1/cohort-55\",\n  headers: {\n    authorization: \"9f77c13f-1f75-4931-b0bc-f8990565dc87\",\n    \"Content-Type\": \"application/json\"\n  }\n};\nfunction checkResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \".concat(res.status));\n}\nvar getUserInfo = function getUserInfo() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: \"GET\",\n    headers: config.headers\n  }).then(checkResponse);\n};\nvar getCards = function getCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"GET\",\n    headers: config.headers\n  }).then(function (res) {\n    return checkResponse(res);\n  });\n};\nvar editProfileRequest = function editProfileRequest(name, about) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(function (res) {\n    return checkResponse(res);\n  });\n};\nvar postNewCard = function postNewCard(card) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify(card)\n  }).then(function (res) {\n    return res.json();\n  });\n};\nvar putLike = function putLike(card) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(card._id), {\n    method: \"PUT\",\n    headers: config.headers,\n    body: JSON.stringify(card)\n  }).then(function (res) {\n    return res.json();\n  });\n};\nvar deleteLike = function deleteLike(card) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(card._id), {\n    method: \"DELETE\",\n    headers: config.headers,\n    body: JSON.stringify(card)\n  }).then(function (res) {\n    return res.json();\n  });\n};\nvar deleteCard = function deleteCard(card) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(card._id), {\n    method: \"DELETE\",\n    headers: config.headers,\n    body: JSON.stringify(card)\n  }).then(function (res) {\n    return res.json();\n  });\n};\nvar editAvatarRequest = function editAvatarRequest(avatarSrc) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatarSrc\n    })\n  }).then(function (res) {\n    return res.json();\n  });\n};\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardWrapperNode\": () => (/* binding */ cardWrapperNode),\n/* harmony export */   \"createCardItem\": () => (/* binding */ createCardItem),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"renderCard\": () => (/* binding */ renderCard)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/components/index.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/components/utils.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.js */ \"./src/components/constants.js\");\n\n\n\n\n\nvar imagePopupImg = document.querySelector(\".popup__photo\");\nvar textPopupImg = document.querySelector(\".popup__text\");\nvar cardTemplate = document.getElementById(\"element\");\nvar cardWrapperNode = document.querySelector(\"#cards\");\nfunction renderCard(card, userId) {\n  var newCardElement = createCardItem(card, userId);\n  render(cardWrapperNode, newCardElement, \"append\");\n}\nvar getCardLikesCount = function getCardLikesCount(card) {\n  var _card$likes$length, _card$likes;\n  return (_card$likes$length = card === null || card === void 0 ? void 0 : (_card$likes = card.likes) === null || _card$likes === void 0 ? void 0 : _card$likes.length) !== null && _card$likes$length !== void 0 ? _card$likes$length : 0;\n};\nfunction createCardItem(card, userId) {\n  if (!card.link === \"https://pictures.s3.yandex.net/\") {\n    return;\n  }\n  var likesCount = getCardLikesCount(card);\n  var isUserCard = card.owner._id === userId;\n  var likesIds = card.likes.map(function (_ref) {\n    var _id = _ref._id;\n    return _id;\n  });\n  var isLiked = likesIds.includes(userId);\n  var newCard = cardTemplate.content.cloneNode(true).querySelector(\".element\");\n  var elementImage = newCard.querySelector(\".element__photo\");\n  var elementText = newCard.querySelector(\".element__place\");\n  var buttonDeleteElement = newCard.querySelector(\".element__trash-button\");\n  var buttonLikeElement = newCard.querySelector(\".element__like-button\");\n  var likeCounterElement = newCard.querySelector(\".element__like-counter\");\n  var toggleLike = function toggleLike() {\n    return buttonLikeElement.classList.toggle(\"element__like-button_active\");\n  };\n  if (isLiked) {\n    toggleLike();\n  }\n  elementImage.src = card.link;\n  elementImage.alt = card.name;\n  elementText.textContent = card.name;\n  likeCounterElement.textContent = likesCount;\n  elementImage.addEventListener(\"click\", function () {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.createPopup)(_constants_js__WEBPACK_IMPORTED_MODULE_4__.popupImg).open();\n    imagePopupImg.src = card.link;\n    imagePopupImg.alt = card.name;\n    textPopupImg.textContent = card.name;\n  });\n  if (isUserCard) {\n    buttonDeleteElement.addEventListener(\"click\", function () {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteCard)(card).then(function () {\n        return newCard.remove();\n      }).catch((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.showError)(\"Fail to delete card\"));\n    });\n  } else {\n    buttonDeleteElement.remove();\n  }\n  buttonLikeElement.addEventListener(\"click\", function () {\n    var isLiked = buttonLikeElement.classList.contains(\"element__like-button_active\");\n    var likeFunction = isLiked ? _api_js__WEBPACK_IMPORTED_MODULE_0__.deleteLike : _api_js__WEBPACK_IMPORTED_MODULE_0__.putLike;\n    likeFunction(card).then(getCardLikesCount).then(function (cardLikes) {\n      return likeCounterElement.textContent = \"\".concat(cardLikes);\n    }).then(toggleLike).catch((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.showError)(\"Like toggle failed\"));\n  });\n  return newCard;\n}\nfunction render(whereNode, insertNode, how) {\n  if (how === \"append\") {\n    whereNode.append(insertNode);\n  } else if (how === \"prepend\") {\n    whereNode.prepend(insertNode);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/card.js?");

/***/ }),

/***/ "./src/components/constants.js":
/*!*************************************!*\
  !*** ./src/components/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formAdd\": () => (/* binding */ formAdd),\n/* harmony export */   \"formUpdateAvatar\": () => (/* binding */ formUpdateAvatar),\n/* harmony export */   \"popupAdd\": () => (/* binding */ popupAdd),\n/* harmony export */   \"popupEdit\": () => (/* binding */ popupEdit),\n/* harmony export */   \"popupImg\": () => (/* binding */ popupImg),\n/* harmony export */   \"popupUpdateAvatar\": () => (/* binding */ popupUpdateAvatar)\n/* harmony export */ });\nvar popupEdit = document.querySelector('#popup-edit');\nvar popupImg = document.querySelector(\"#popup-img\");\nvar popupAdd = document.querySelector('#popup-add');\nvar popupUpdateAvatar = document.querySelector(\"#popup-update-avatar\");\nvar formAdd = document.querySelector('#form-add');\nvar formUpdateAvatar = document.querySelector('#form-update-avatar');\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/constants.js?");

/***/ }),

/***/ "./src/components/fetching.js":
/*!************************************!*\
  !*** ./src/components/fetching.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userId\": () => (/* binding */ userId)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/components/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar userId = null;\nPromise.all([(0,_api__WEBPACK_IMPORTED_MODULE_1__.getUserInfo)(), (0,_api__WEBPACK_IMPORTED_MODULE_1__.getCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    userInfo = _ref2[0],\n    cards = _ref2[1];\n  userId = userInfo._id;\n  (0,___WEBPACK_IMPORTED_MODULE_0__.changeProfileInfo)(userInfo);\n  cards.forEach(function (card) {\n    return (0,_card__WEBPACK_IMPORTED_MODULE_2__.renderCard)(card, userInfo._id);\n  });\n}).catch((0,_utils__WEBPACK_IMPORTED_MODULE_3__.showError)(\"Can't fetch data\"));\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/fetching.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeProfileInfo\": () => (/* binding */ changeProfileInfo),\n/* harmony export */   \"formEdit\": () => (/* binding */ formEdit),\n/* harmony export */   \"handleAddCardFormSubmit\": () => (/* binding */ handleAddCardFormSubmit),\n/* harmony export */   \"handleChangeAvatar\": () => (/* binding */ handleChangeAvatar),\n/* harmony export */   \"handleProfileEditSubmit\": () => (/* binding */ handleProfileEditSubmit),\n/* harmony export */   \"inputAddName\": () => (/* binding */ inputAddName),\n/* harmony export */   \"inputAddUrl\": () => (/* binding */ inputAddUrl),\n/* harmony export */   \"inputEditJob\": () => (/* binding */ inputEditJob),\n/* harmony export */   \"inputEditName\": () => (/* binding */ inputEditName),\n/* harmony export */   \"inputUpdateAvatar\": () => (/* binding */ inputUpdateAvatar)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _fetching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetching */ \"./src/components/fetching.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate */ \"./src/components/validate.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./src/components/constants.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\nvar formEdit = document.querySelector(\"#form-edit\");\nvar profileName = document.querySelector(\".profile__name\");\nvar profileDescription = document.querySelector(\".profile__text\");\nvar profileAvatar = document.querySelector(\".profile__avatar\");\nvar buttonEditProfile = document.querySelector(\".profile__edit-button\");\nvar buttonAddCards = document.querySelector(\".profile__add-button\");\nvar buttonEditAvatar = document.querySelector(\".profile__avatar-edit-button\");\n\n// INPUT //\nvar inputEditName = document.querySelector(\"#name-input\");\nvar inputEditJob = document.querySelector(\"#job-input\");\nvar inputAddName = document.querySelector(\"#place-name-input\");\nvar inputAddUrl = document.querySelector(\"#url-input\");\nvar inputUpdateAvatar = document.querySelector(\"#url-avatar\");\nvar buttonAddIcon = new URL(/* asset import */ __webpack_require__(/*! ../images/add-button.svg */ \"./src/images/add-button.svg\"), __webpack_require__.b);\nvar buttonCloseIcon = new URL(/* asset import */ __webpack_require__(/*! ../images/close-icon.svg */ \"./src/images/close-icon.svg\"), __webpack_require__.b);\nvar buttonEditIcon = new URL(/* asset import */ __webpack_require__(/*! ../images/edit-button.svg */ \"./src/images/edit-button.svg\"), __webpack_require__.b);\nvar headerLineImage = new URL(/* asset import */ __webpack_require__(/*! ../images/header-line.jpg */ \"./src/images/header-line.jpg\"), __webpack_require__.b);\nvar headerLogoImage = new URL(/* asset import */ __webpack_require__(/*! ../images/header-logo.svg */ \"./src/images/header-logo.svg\"), __webpack_require__.b);\nvar buttonLikeIcon = new URL(/* asset import */ __webpack_require__(/*! ../images/like-button.svg */ \"./src/images/like-button.svg\"), __webpack_require__.b);\nvar buttonLikeActiveIcon = new URL(/* asset import */ __webpack_require__(/*! ../images/like-button-active.svg */ \"./src/images/like-button-active.svg\"), __webpack_require__.b);\nvar profileAvatarImage = new URL(/* asset import */ __webpack_require__(/*! ../images/profile-avatar.jpg */ \"./src/images/profile-avatar.jpg\"), __webpack_require__.b);\nvar buttonTrashIcon = new URL(/* asset import */ __webpack_require__(/*! ../images/Trash.svg */ \"./src/images/Trash.svg\"), __webpack_require__.b);\nvar projectImages = [{\n  name: \"Add Button\",\n  link: buttonAddIcon\n}, {\n  name: \"Close Button\",\n  link: buttonCloseIcon\n}, {\n  name: \"Edit Button\",\n  link: buttonEditIcon\n}, {\n  name: \"Header Line\",\n  link: headerLineImage\n}, {\n  name: \"Header Logo\",\n  link: headerLogoImage\n}, {\n  name: \"Like Button\",\n  link: buttonLikeIcon\n}, {\n  name: \"Like Button Active\",\n  link: buttonLikeActiveIcon\n}, {\n  name: \"Profile Avatar\",\n  link: profileAvatarImage\n}, {\n  name: \"Trash Button\",\n  link: buttonTrashIcon\n}];\n\n// MODAL //\nfunction changeProfileInfo(_ref) {\n  var name = _ref.name,\n    avatarSrc = _ref.avatar,\n    about = _ref.about;\n  if (typeof name !== \"undefined\") {\n    profileName.textContent = name;\n  }\n  if (typeof avatarSrc !== \"undefined\") {\n    profileAvatar.src = avatarSrc;\n  }\n  if (typeof about !== \"undefined\") {\n    profileDescription.textContent = about;\n  }\n}\nvar modals = [{\n  trigger: buttonEditProfile,\n  element: formEdit,\n  handler: handleProfileEditSubmit\n}, {\n  trigger: buttonAddCards,\n  element: _constants__WEBPACK_IMPORTED_MODULE_7__.formAdd,\n  handler: handleAddCardFormSubmit\n}, {\n  trigger: buttonEditAvatar,\n  element: _constants__WEBPACK_IMPORTED_MODULE_7__.formUpdateAvatar,\n  handler: handleChangeAvatar\n}];\nmodals.forEach(function (_ref2) {\n  var element = _ref2.element,\n    handler = _ref2.handler,\n    trigger = _ref2.trigger;\n  var popup = (0,_modal__WEBPACK_IMPORTED_MODULE_4__.createPopup)(_toConsumableArray(document.querySelectorAll(\".popup\")).find(function (popupElement) {\n    return popupElement.contains(element);\n  }));\n  trigger.addEventListener(\"click\", popup.open);\n  element.querySelector('.popup__close').addEventListener('click', popup.close);\n  element.addEventListener(\"click\", function (e) {\n    return e.stopPropagation();\n  });\n  var formButton = element.querySelector(\"button[type='submit']\");\n  var initialSubmitButtonText = formButton.textContent;\n  var resetSubmitText = function resetSubmitText() {\n    return formButton.textContent = initialSubmitButtonText;\n  };\n  var resetForm = function resetForm() {\n    return element.reset();\n  };\n  element.addEventListener(\"submit\", function (ev) {\n    formButton.textContent = \"Сохранение ...\";\n    handler(ev).finally(popup.close).finally(resetSubmitText).finally(resetForm);\n  });\n});\n\n// EDIT-FORM //\n\nfunction handleProfileEditSubmit(evt) {\n  evt.preventDefault();\n  var nameInputValue = inputEditName.value;\n  var jobInputValue = inputEditJob.value;\n  return (0,_api__WEBPACK_IMPORTED_MODULE_2__.editProfileRequest)(nameInputValue, jobInputValue).then(function () {\n    profileDescription.textContent = jobInputValue;\n    profileName.textContent = nameInputValue;\n  }).catch((0,_utils__WEBPACK_IMPORTED_MODULE_5__.showError)(\"Failed to edit profile info\"));\n}\n\n// CARDS //\n\nfunction handleAddCardFormSubmit(evt) {\n  if (!_fetching__WEBPACK_IMPORTED_MODULE_1__.userId) return;\n  evt.preventDefault();\n  var cardData = {\n    link: inputAddUrl.value,\n    name: inputAddName.value\n  };\n  return (0,_api__WEBPACK_IMPORTED_MODULE_2__.postNewCard)(cardData).then(function (card) {\n    var newCard = (0,_card__WEBPACK_IMPORTED_MODULE_3__.createCardItem)(card, _fetching__WEBPACK_IMPORTED_MODULE_1__.userId);\n    (0,_card__WEBPACK_IMPORTED_MODULE_3__.render)(_card__WEBPACK_IMPORTED_MODULE_3__.cardWrapperNode, newCard, \"prepend\");\n  }).catch((0,_utils__WEBPACK_IMPORTED_MODULE_5__.showError)(\"Failed to create new card\"));\n}\n\n// CHANGE AVATAR //\n\nfunction handleChangeAvatar(evt) {\n  evt.preventDefault();\n  var inputAvatarValue = inputUpdateAvatar.value;\n  return (0,_api__WEBPACK_IMPORTED_MODULE_2__.editAvatarRequest)(inputAvatarValue).then(function () {\n    profileAvatar.src = inputAvatarValue;\n    _constants__WEBPACK_IMPORTED_MODULE_7__.formUpdateAvatar.reset();\n  }).catch((0,_utils__WEBPACK_IMPORTED_MODULE_5__.showError)(\"New avatar upload failed\"));\n}\n\n// VALIDATION //\n\n(0,_validate__WEBPACK_IMPORTED_MODULE_6__.enableValidation)(_utils__WEBPACK_IMPORTED_MODULE_5__.configSelectors);\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/index.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopup\": () => (/* binding */ createPopup)\n/* harmony export */ });\nvar createPopup = function createPopup(modalNode) {\n  var popupElement = modalNode;\n  var onKeydown = function onKeydown(event) {\n    if (event.key === \"Escape\") {\n      closePopup();\n    }\n  };\n  var closePopup = function closePopup() {\n    popupElement.classList.remove(\"popup_opened\");\n    window.removeEventListener(\"keydown\", onKeydown);\n  };\n  var openPopup = function openPopup() {\n    popupElement.classList.add(\"popup_opened\");\n    window.addEventListener(\"keydown\", onKeydown);\n  };\n  popupElement.querySelector(\".popup__overlay\").addEventListener(\"click\", closePopup);\n  return {\n    close: closePopup,\n    open: openPopup\n  };\n};\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configSelectors\": () => (/* binding */ configSelectors),\n/* harmony export */   \"showError\": () => (/* binding */ showError)\n/* harmony export */ });\nvar configSelectors = {\n  formSelector: \".form\",\n  inputSelector: \".form__input\",\n  submitButtonSelector: \".form__submit\",\n  inactiveButtonClass: \"form__submit_disabled\",\n  inputErrorClass: \"form__input_error\",\n  errorClass: \"form__input-error_active\"\n};\nvar showError = function showError(text) {\n  return function (err) {\n    console.error(err);\n    window.alert(text);\n  };\n};\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/utils.js?");

/***/ }),

/***/ "./src/components/validate.js":
/*!************************************!*\
  !*** ./src/components/validate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableValidation\": () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(form, formInput, errorMessage, config) {\n  var formInputError = form.querySelector(\"#\".concat(formInput.id, \"-error\"));\n  formInput.classList.add(config.inputErrorClass);\n  formInputError.textContent = errorMessage;\n  formInputError.classList.add(config.errorClass);\n};\nvar hideInputError = function hideInputError(form, formInput, config) {\n  var formInputError = form.querySelector(\"#\".concat(formInput.id, \"-error\"));\n  formInput.classList.remove(config.inputErrorClass);\n  formInputError.classList.remove(config.errorClass);\n  formInputError.textContent = '';\n};\nvar formIsValid = function formIsValid(form, formInput, config) {\n  if (!formInput.validity.valid) {\n    showInputError(form, formInput, formInput.validationMessage, config);\n  } else {\n    hideInputError(form, formInput, config);\n  }\n};\nvar setFormEventListeners = function setFormEventListeners(form, config) {\n  var inputList = Array.from(form.querySelectorAll(config.inputSelector));\n  var buttonElement = form.querySelector(config.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, config);\n  inputList.forEach(function (formInput) {\n    formInput.addEventListener('input', function () {\n      formIsValid(form, formInput, config);\n      toggleButtonState(inputList, buttonElement, config);\n    });\n  });\n};\nvar enableValidation = function enableValidation(config) {\n  var formList = Array.from(document.querySelectorAll(config.formSelector));\n  formList.forEach(function (form) {\n    setFormEventListeners(form, config);\n  });\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (formInput) {\n    return !formInput.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, formSubmitButton, config) {\n  if (hasInvalidInput(inputList)) {\n    formSubmitButton.disabled = true;\n    formSubmitButton.classList.add(config.inactiveButtonClass);\n  } else {\n    formSubmitButton.disabled = false;\n    formSubmitButton.classList.remove(config.inactiveButtonClass);\n  }\n};\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/components/validate.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/index.css?");

/***/ }),

/***/ "./src/images/Trash.svg":
/*!******************************!*\
  !*** ./src/images/Trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"823b0cf1b0b7e9cb7cad.svg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/Trash.svg?");

/***/ }),

/***/ "./src/images/add-button.svg":
/*!***********************************!*\
  !*** ./src/images/add-button.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d86bb2edc2f6eadb96b7.svg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/add-button.svg?");

/***/ }),

/***/ "./src/images/close-icon.svg":
/*!***********************************!*\
  !*** ./src/images/close-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad98de32e342afafa118.svg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/close-icon.svg?");

/***/ }),

/***/ "./src/images/edit-button.svg":
/*!************************************!*\
  !*** ./src/images/edit-button.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8667ac4a523e8fc42e59.svg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/edit-button.svg?");

/***/ }),

/***/ "./src/images/header-line.jpg":
/*!************************************!*\
  !*** ./src/images/header-line.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c13f3c82220502c8c92.jpg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/header-line.jpg?");

/***/ }),

/***/ "./src/images/header-logo.svg":
/*!************************************!*\
  !*** ./src/images/header-logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03b78ada3425e9132ff3.svg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/header-logo.svg?");

/***/ }),

/***/ "./src/images/like-button-active.svg":
/*!*******************************************!*\
  !*** ./src/images/like-button-active.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe17a515669479b1e649.svg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/like-button-active.svg?");

/***/ }),

/***/ "./src/images/like-button.svg":
/*!************************************!*\
  !*** ./src/images/like-button.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"87ed371465c7a6a1cd01.svg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/like-button.svg?");

/***/ }),

/***/ "./src/images/profile-avatar.jpg":
/*!***************************************!*\
  !*** ./src/images/profile-avatar.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41d09de2e96c52cbba9a.jpg\";\n\n//# sourceURL=webpack://mesto-project-bootcamp-main/./src/images/profile-avatar.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;