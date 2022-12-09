const showInputError = (form, formInput, errorMessage) => {
    
    const formInputError = formInput.parentElement.querySelector('.form__input-error');
    const formInputFirstFieldError = form.querySelector('.form__input-error-first-field');
    const formInputSecondFieldError = form.querySelector('.form__input-error-second-field');
    formInput.classList.add('form__input_error');
    formInputError.textContent = errorMessage;
    formInputFirstFieldError.classList.add('form__input-error_active');
    formInputSecondFieldError.classList.add('form__input-error_active');
};

const hideInputError = (form, formInput) => {
    const formInputError = formInput.parentElement.querySelector('.form__input-error');
    const formInputFirstFieldError = form.querySelector('.form__input-error-first-field');
    const formInputSecondFieldError = form.querySelector('.form__input-error-second-field');
    formInput.classList.remove('form__input_error');
    formInputError.textContent = '';
    formInputFirstFieldError.classList.remove('form__input-error_active');
    formInputSecondFieldError.classList.remove('form__input-error_active');
};

const formIsValid = (form, formInput) => {
    if (!formInput.validity.valid) {
        showInputError(form, formInput, formInput.validationMessage);
    } else {
        hideInputError(form, formInput);
    }
};

const setFormEventListeners = (form) => {
    const inputList = Array.from(form.querySelectorAll('.form__input'));
    const formSubmitButton = form.querySelector('.form__submit');

    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
            formIsValid(form, formInput);
            toggleButtonState(inputList, formSubmitButton);
        });
    });
};

export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach((form) => {
        setFormEventListeners(form);
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
    })
};

const toggleButtonState = (inputList, formSubmitButton) => {
    if (hasInvalidInput(inputList)) {
        formSubmitButton.classList.add('form__submit_error');
    } else {
        formSubmitButton.classList.remove('form__submit_error');
    }
};