// Catalog popup

const addToCartButtons = document.querySelectorAll('.button--buy');
const addToCartPopup = document.querySelector('.popup-add');
const addToCartCloseButton = document.querySelector('.button--close-popup');
const addToCartContinueButton = document.querySelector('.button--continue');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    addToCartPopup.classList.remove('visually-hidden');
  });
});

addToCartCloseButton.onclick = () => {
  addToCartPopup.classList.add('visually-hidden');
};

addToCartContinueButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addToCartPopup.classList.add('visually-hidden');
});
