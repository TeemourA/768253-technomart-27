// Add item popup

const addToCartButtons = document.querySelectorAll('.button--buy');
const addToCartPopup = document.querySelector('.popup-add');
const addToCartCloseButton = document.querySelector('.button--close-add');
const addToCartContinueButton = document.querySelector('.button--continue');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    addToCartPopup.classList.add('popup-show');
  });
});

addToCartCloseButton.onclick = () => {
  addToCartPopup.classList.remove('popup-show');
};

addToCartContinueButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addToCartPopup.classList.remove('popup-show');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addToCartPopup.classList.contains('popup-show')) {
      addToCartPopup.classList.remove('popup-show');
    }
  }
});

// Catalog sort links-buttons

const sortByPriceButton = document.querySelector('.products__sort--price');
const sortByTypeButton = document.querySelector('.products__sort--type');
const sortByFunctionalityButton = document.querySelector('.products__sort--functionality');

sortByPriceButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortByPriceButton.classList.add('products__sort-type--active');
  sortByTypeButton.classList.remove('products__sort-type--active');
  sortByFunctionalityButton.classList.remove('products__sort-type--active');
});

sortByTypeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortByPriceButton.classList.remove('products__sort-type--active');
  sortByTypeButton.classList.add('products__sort-type--active');
  sortByFunctionalityButton.classList.remove('products__sort-type--active');
});

sortByFunctionalityButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortByPriceButton.classList.remove('products__sort-type--active');
  sortByTypeButton.classList.remove('products__sort-type--active');
  sortByFunctionalityButton.classList.add('products__sort-type--active');
});

const sortByAscending = document.querySelector('.products__sort-ascending-button');
const sortByDescending = document.querySelector('.products__sort-descending-button');

sortByAscending.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortByAscending.classList.add('products__sort-button--active');
  sortByDescending.classList.remove('products__sort-button--active');
});

sortByDescending.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortByAscending.classList.remove('products__sort-button--active');
  sortByDescending.classList.add('products__sort-button--active');
});
