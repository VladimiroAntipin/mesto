const showInputError = (form, formInput, errorMessage, config) => {
	const formInputError = form.querySelector(`#${formInput.id}-error`);
	formInput.classList.add(config.inputErrorClass);
	formInputError.textContent = errorMessage;
	formInputError.classList.add(config.errorClass);
};

const hideInputError = (form, formInput, config) => {
	const formInputError = form.querySelector(`#${formInput.id}-error`);
	formInput.classList.remove(config.inputErrorClass);
	formInputError.classList.remove(config.errorClass);
	formInputError.textContent = '';
};

const formIsValid = (form, formInput, config) => {
	if (!formInput.validity.valid) {
		showInputError(form, formInput, formInput.validationMessage, config);
	} else {
		hideInputError(form, formInput, config);
	}
};

const setFormEventListeners = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const buttonElement = form.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
            formIsValid(form, formInput, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
};

export const enableValidation = (config) => {
	const formList = Array.from(document.querySelectorAll(config.formSelector));

	formList.forEach((form) => {
		setFormEventListeners(form, config);
	});
};

const hasInvalidInput = (inputList) => {
	return inputList.some((formInput) => {
		return !formInput.validity.valid;
	})
};

const toggleButtonState = (inputList, formSubmitButton, config) => {
	if (hasInvalidInput(inputList)) {
		formSubmitButton.classList.add(config.inactiveButtonClass);
	} else {
		formSubmitButton.classList.remove(config.inactiveButtonClass);
	}
};