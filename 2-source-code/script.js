const header = document.querySelector(".header")
const tiltedCard = document.querySelector(".tilted-card")
const tiltedCardButton = document.querySelector(".tilted-card__button")


if (window.matchMedia("(pointer: fine)").matches) {

  header.addEventListener("mousemove", handleTiltEffect)

  function handleTiltEffect(e) {
    const headerDimensions = header.getBoundingClientRect();
    const mouseXInHeader = e.clientX - headerDimensions.left;
    const mouseYInHeader = e.clientY - headerDimensions.top;

    const elementMiddleX = headerDimensions.width / 2,
          elementMiddleY = headerDimensions.height / 2

    const maxTiltX = 30,
          maxTiltY = 30

    const titlAngleX = ((mouseXInHeader - elementMiddleX) / elementMiddleX) * maxTiltX
    const tiltAngleY = ((mouseYInHeader - elementMiddleY) / elementMiddleY) * maxTiltY


    tiltedCard.style.transform = `rotateY(${titlAngleX}deg) rotateX(${-1 * tiltAngleY}deg)`;

    if (e.target === document.querySelector(".tilted-card__button")) e.stopPropagation()
  }

  header.addEventListener("mouseout", resetTiltOnMouseOut)
  function resetTiltOnMouseOut() {
    tiltedCard.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
  }
  tiltedCardButton.addEventListener("mousemove", handleTiltEffect)
}


tiltedCardButton.addEventListener('click', () => {
  console.log("button clicked")
});

