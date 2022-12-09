import './index.css';

import { profileEditButton, profileAddButton, formEdit, formEditCloseButton, formEditSubmitButton, formAdd, formAddCloseButton, formAddSubmitButton } from './components/utils';
import { enableValidation } from './components/validate';
import { openEditPopup, closeEditPopup, openAddPopup, closeAddPopup, handleFormSubmit } from './components/modal';
import { handleAddCardFormSubmit } from './components/card';


const addButtonImage = new URL('./images/add-button.svg', import.meta.url);
const closeButtonImage = new URL('./images/close-icon.svg', import.meta.url);
const editButtonImage = new URL('./images/edit-button.svg', import.meta.url);
const headerLineImage = new URL('./images/header-line.jpg', import.meta.url);
const headerLogoImage = new URL('./images/header-logo.svg', import.meta.url);
const likeButtonImage = new URL('./images/like-button.svg', import.meta.url);
const likeButtonActiveImage = new URL('./images/like-button-active.svg', import.meta.url);
const profileAvatarImage = new URL('./images/profile-avatar.jpg', import.meta.url);
const trashButtonImage = new URL('./images/Trash.svg', import.meta.url);

const projectImages = [
    { name: 'Add Button', link: addButtonImage },
    { name: 'Close Button', link: closeButtonImage },
    { name: 'Edit Button', link: editButtonImage },
    { name: 'Header Line', link: headerLineImage },
    { name: 'Header Logo', link: headerLogoImage },
    { name: 'Like Button', link: likeButtonImage },
    { name: 'Like Button Active', link: likeButtonActiveImage },
    { name: 'Profile Avatar', link: profileAvatarImage },
    { name: 'Trash Button', link: trashButtonImage },
];

// CARDS //

formAdd.addEventListener('submit', handleAddCardFormSubmit);

// MODAL //

profileEditButton.addEventListener('click', openEditPopup);
formEditCloseButton.addEventListener('click', closeEditPopup);
formEditSubmitButton.addEventListener('click', closeEditPopup);
profileAddButton.addEventListener('click', openAddPopup);
formAddCloseButton.addEventListener('click', closeAddPopup);
formAddSubmitButton.addEventListener('click', closeAddPopup);
formEdit.addEventListener('submit', handleFormSubmit);

// VALIDATION //

enableValidation();