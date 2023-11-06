function changeSlide(n, project) {
  const slides = document.querySelectorAll(`.${project} .project-image`);
  let currentSlide = 0;

  slides.forEach((slide, index) => {
    if (slide.style.display === "block") {
      currentSlide = index;
      slide.style.display = "none";
    }
  });

  currentSlide += n;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].style.display = "block";
}
