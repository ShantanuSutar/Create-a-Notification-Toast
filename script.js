const buttons = document.querySelectorAll(".buttons .btn");
const notifications = document.querySelector(".notif");
const createToast = (id) => {
  const toast = document.createElement("section");
  toast.className = `toast ${id}`;
  toast.innerHTML = `<section class="column">
                     <i class="fa-solid fa-circle-check"></i>
                     <span>Success: This is a success toast</span>
                     </section>
                     <i class="fa-solid fa-xmark"></i>`;
  notifications.appendChild(toast);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
