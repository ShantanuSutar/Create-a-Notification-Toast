const buttons = document.querySelectorAll(".buttons .btn");
const notifications = document.querySelector(".notif");

const toastDetails = {
  success: {
    icon: "fa-solid fa-circle-check",
    text: "Success: This is a success toast",
  },
  error: {
    icon: "fa-solid fa-circle-xmark",
    text: "Error: This is a error toast",
  },
  warning: {
    icon: "fa-solid fa-triangle-exclamation",
    text: "Warning: This is a warning toast",
  },
  info: {
    icon: "fa-solid fa-circle-info",
    text: "Info: This is a info toast",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hidden");
  setTimeout(() => toast.remove(), 1000);
};

const createToast = (id) => {
  const toast = document.createElement("section");
  const { icon, text } = toastDetails[id];
  toast.className = `toast ${id}`;
  toast.innerHTML = `<section class="column">
                     <i class="${icon}"></i>
                     <span>${text}</span>
                     </section>
                     <i class="fa-solid fa-xmark" onClick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);
  setTimeout(() => removeToast(toast), 5000);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
