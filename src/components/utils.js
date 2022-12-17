export const configSelectors = {
	formSelector: ".form",
	inputSelector: ".form__input",
	submitButtonSelector: ".form__submit",
	inactiveButtonClass: "form__submit_disabled",
	inputErrorClass: "form__input_error",
	errorClass: "form__input-error_active",
};

export const showError = (text) => (err) => {
	console.error(err);
	window.alert(text);
  };