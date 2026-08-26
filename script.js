document.addEventListener("DOMContentLoaded", () => {
  const phone = "09123456789";
  document.querySelectorAll("[data-phone]").forEach(el => {
    el.textContent = "0912 345 6789";
    el.href = "tel:" + phone;
  });
});