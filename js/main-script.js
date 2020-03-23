// Proposals slider

const proposalsPrevButton = document.querySelector('.proposals__slider-prev-button');
const proposalsNextButton = document.querySelector('.proposals__slider-next-button');

const radioFirstSlide = document.querySelector('#product-1');
const radioSecondSlide = document.querySelector('#product-2');

const radioFirstIcon = document.querySelector('label[for="product-1"] .proposals__slider-radio');
const radioSecondIcon = document.querySelector('label[for="product-2"] .proposals__slider-radio');

const proposalsSlideOne = document.querySelector('#slide-1');
const proposalsSlideTwo = document.querySelector('#slide-2');

const moveSlide = () => {
  if (proposalsSlideOne.classList.contains('proposals__slide-toggle')) {
    proposalsSlideOne.classList.remove('proposals__slide-toggle');
    proposalsSlideTwo.classList.add('proposals__slide-toggle');

    radioSecondIcon.classList.remove('checked-radio');
    radioFirstIcon.classList.add('checked-radio');
    radioFirstSlide.checked = true;
  } else if (proposalsSlideTwo.classList.contains('proposals__slide-toggle')) {
    proposalsSlideTwo.classList.remove('proposals__slide-toggle');
    proposalsSlideOne.classList.add('proposals__slide-toggle');

    radioFirstIcon.classList.remove('checked-radio');
    radioSecondIcon.classList.add('checked-radio');
    radioSecondSlide.checked = true;
  }
}

proposalsPrevButton.onclick = () => {
  moveSlide();
}

proposalsNextButton.onclick = () => {
  moveSlide();
}

radioFirstIcon.onclick = () => {
  moveSlide();
}

radioSecondIcon.onclick = () => {
  moveSlide();
}

// Map popup

const mapPopup = document.querySelector('.map-popup__container');
const mapCallButton = document.querySelector('.about__map-link');
const mapCloseButton = document.querySelector('.button--close-map');

mapCallButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapPopup.classList.add('popup-show');
});

mapCloseButton.onclick = () => {
  mapPopup.classList.remove('popup-show');
};

// Feedback popup

const feedbackPopup = document.querySelector('.popup');
const feedbackCallButton = document.querySelector('.button--about-feedback');
const feedbackCloseButton = document.querySelector('.button--close-popup');

const feedbackForm = document.querySelector('.popup__form');
const feedbackNameInput = document.querySelector('[name=name]');
const feedbackEmailInput = document.querySelector('[name=email]');
const feedbackContentInput = document.querySelector('[name=feedback]');
const submitFeedbackButton = document.querySelector('.button--popup');

const isInputEmpty = (input) => input ? false : true;

feedbackCallButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.add('popup-show');
  feedbackNameInput.focus();
});

feedbackCloseButton.onclick = () => {
  feedbackPopup.classList.remove('popup-show');
  feedbackPopup.classList.remove('popup-error');
};

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains('popup-show')) {
      feedbackPopup.classList.remove('popup-show');
      feedbackPopup.classList.remove('popup-error');
    } else if (mapPopup.classList.contains('popup-show')) {
      mapPopup.classList.remove('popup-show');
    }
  }
});

submitFeedbackButton.addEventListener('click', (evt) => {
  if (isInputEmpty(feedbackNameInput.value) || isInputEmpty(feedbackEmailInput.value) || isInputEmpty(feedbackContentInput.value)) {
    evt.preventDefault();
    feedbackPopup.classList.remove('popup-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('popup-error');
  }
});
