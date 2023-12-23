window.addEventListener('resize', checkDisplayBrands);

brandsShowAllButton.addEventListener('click', function () {
  if (!brandsShowAllBlock.classList.contains('container__brands-show-all_enable')) {
    displayBrands(slides, slides.length);
    changeShowAllButton(true);
  } else {
    hideExtraBrands();
    changeShowAllButton(false);
  }
});

function checkDisplayBrands() {
  const windowWidth = window.innerWidth;
  if (isInnerWidthLessThan(768) &&
    !brandsShowAllBlock.classList.contains('container__brands-show-all_enable') &&
    slides[slides.length - 1].classList.contains('container__brands-swiper-slide-disable')) {
    displayBrands(slides, slides.length);
  }
  if (isInnerWidthMoreThan(768) &&
    isInnerWidthLessThan(992) &&
    !brandsShowAllBlock.classList.contains('container__brands-show-all_enable') &&
    !slides[6].classList.contains('container__brands-swiper-slide-disable')) {
    displayBrands(slides, 6);
  }
  if (isInnerWidthMoreThan(992) &&
    !brandsShowAllBlock.classList.contains('container__brands-show-all_enable') &&
    !slides[8].classList.contains('container__brands-swiper-slide-disable')) {
    displayBrands(slides, 8);
  }
}

function displayBrands(slides, finishWithIndex) {
  for (let i = 0; i < finishWithIndex; i++) {
    slides[i].classList.remove('container__brands-swiper-slide-disable')
  }
  if (finishWithIndex < slides.length) hideExtraBrands()
}

function changeShowAllButton(isDisplayed) {
  if (isDisplayed) {
    brandsShowAllButton.textContent = 'Скрыть';
    brandsShowAllBlock.classList.add('container__brands-show-all_enable');
    return;
  }
  brandsShowAllButton.textContent = 'Показать все';
  brandsShowAllBlock.classList.remove('container__brands-show-all_enable');
}
