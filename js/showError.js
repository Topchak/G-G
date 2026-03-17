  const showError = (text) => {
    ticketErrorMsg.textContent = text;
    ticketErrorMsg.style.color = "#ff4d4f";
  };

  const showSuccess = (text) => {
    ticketErrorMsg.textContent = text;
    ticketErrorMsg.style.color = "#4CAF50";
  };

  export { showError, showSuccess }; 