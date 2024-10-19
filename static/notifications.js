"use strict";

const toastBox = document.querySelector('.toastBox');
export function showToast(message, type) {
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.innerHTML =
    '<button class="close-btn">X</button>'
                   + '<span>•</span>' + message;

  toastBox.appendChild(toast);

  const closeButton = toast.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    toast.remove();
  });

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
