import { showError, showSuccess  } from "./showError";

const initForms = () => {

  showError();
  showSuccess();

  // ===== ВАЛИДАЦИЯ EMAIL =====
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // ===== ФОРМА БИЛЕТОВ =====
  const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {
  const phoneInput = document.getElementById("phone");
  const firstNameInput = document.getElementById("firstName");
  const emailInput = document.getElementById("email");
  const ticketErrorMsg = document.getElementById("errorMsg");
  const ticketPopup = document.getElementById("ticketPopup");

  const phoneMask = IMask(phoneInput, { mask: "+{38}(000) 000 00 00" });

  const showError = (text) => {
    ticketErrorMsg.textContent = text;
    ticketErrorMsg.style.color = "#ff4d4f";
  };

  const showSuccess = (text) => {
    ticketErrorMsg.textContent = text;
    ticketErrorMsg.style.color = "#4CAF50";

    // Убираем лишние фокусы и двойные таймауты
    setTimeout(() => {
      if (ticketPopup) ticketPopup.classList.remove("active");
      ticketErrorMsg.textContent = "";
      ticketForm.reset();
      phoneMask.value = "";
    }, 3000);
  };

  ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ticketErrorMsg.textContent = "";

    // Валидация
    if (!firstNameInput.value.trim()) {
      showError("Введіть ваше ім’я");
      return;
    }

    if (!phoneMask.masked.isComplete) {
      showError("Введіть повний номер телефону");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      showError("Введіть коректний email");
      return;
    }

    const formData = {
      name: firstNameInput.value.trim(),
      phone: phoneMask.value,
      email: emailInput.value.trim()
    };

    console.log(formData);

    // Успех
    showSuccess("Дякуємо! Заявку прийнято");
  });
}
  // ===== ФОРМА ОБРАТНОЙ СВЯЗИ (контакты) =====
  const touchForm = document.getElementById("formTouch");
  const touchErrorMsg = touchForm?.querySelector(".contacts-form__error");

  if (touchForm && touchErrorMsg) {
    const nameInput = document.getElementById("firstNameTouch");
    const emailInput = document.getElementById("emailTouch");
    const messageTouch = document.getElementById("messageTouch");

    const showTouchError = (text) => {
      touchErrorMsg.textContent = text;
      touchErrorMsg.style.color = "#ff4d4f";

      setTimeout(() => {
        touchErrorMsg.textContent = "";
      }, 3000);
    };

    const showTouchSuccess = (text) => {
      touchErrorMsg.textContent = text;
      touchErrorMsg.style.color = "#4CAF50";

      setTimeout(() => {
        touchErrorMsg.textContent = "";
      }, 3000);
    };

    touchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!nameInput.value.trim()) {
        showTouchError("Введіть ваше ім’я");
        nameInput.focus();
        return;
      }

      if (!validateEmail(emailInput.value.trim())) {
        showTouchError("Введіть коректний email");
        emailInput.focus();
        return;
      }

      if (!messageTouch.value.trim()) {
        showTouchError("Введіть ваше повідомлення");
        messageTouch.focus();
        return;
      }

      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageTouch.value.trim()
      };

      console.log(formData);
      
      showTouchSuccess("Повідомлення відправлено");

      touchForm.reset();
    });
  }
};

export default initForms;