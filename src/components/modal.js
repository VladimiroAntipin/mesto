export const createPopup = (modalNode) => {
    const popupElement = modalNode;
  
    const onKeydown = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
  
    const closePopup = () => {
      popupElement.classList.remove("popup_opened");
      window.removeEventListener("keydown", onKeydown);
    };
    const openPopup = () => {
      popupElement.classList.add("popup_opened");
      window.addEventListener("keydown", onKeydown);
    };
  
    popupElement
      .querySelector(".popup__overlay")
      .addEventListener("click", closePopup);
  
    return {
      close: closePopup,
      open: openPopup,
    };
  };