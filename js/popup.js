const popap = () => {

  const popup = document.getElementById("ticketPopup");
  const popupCity = document.getElementById("popupCity");
  const selectPopup = document.getElementById("selectConcertPopup");

  if (!popup) return;

  // ===== ОТКРЫТИЕ ПО КНОПКАМ =====
  document.querySelectorAll(".js-open-ticket-popup").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      const city = btn.dataset.city || "Ваше місто";
      popupCity.textContent = city;

      popup.classList.add("active");
    });
  });

  // ===== ЗАКРЫТИЕ ticketPopup =====
  popup.querySelector(".popup__close")?.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  popup.querySelector(".popup__overlay")?.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  // ===== ОТКРЫТИЕ selectPopup =====
  const heroBtn = document.querySelector(".button--hero");

  heroBtn?.addEventListener("click", e => {
    e.preventDefault();
    selectPopup?.classList.add("active");
  });

  // ===== ЗАКРЫТИЕ selectPopup =====
  selectPopup?.querySelector(".popup__close")?.addEventListener("click", () => {
    selectPopup.classList.remove("active");
  });

  selectPopup?.querySelector(".popup__overlay")?.addEventListener("click", () => {
    selectPopup.classList.remove("active");
  });

  // ===== ВЫБОР КОНЦЕРТА =====
  document.querySelectorAll(".concert-list li").forEach(item => {
    item.addEventListener("click", () => {

      const city = item.dataset.city || "Ваше місто";

      selectPopup?.classList.remove("active");

      popupCity.textContent = city;
      popup.classList.add("active");
    });
  });

};

export default popap;