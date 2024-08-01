const tiltedSection = document.querySelector(".tilted-section")
const tiltedCard = document.querySelector(".tilted-section__card")

if(window.matchMedia("(pointer:fine)").matches) {

  tiltedSection.addEventListener("mousemove", handleTiltEffect)

  function handleTiltEffect(e){
    const tiltedSectionDimensions = tiltedSection.getBoundingClientRect()

    const mouseXInSection = e.clientX - tiltedSectionDimensions.left, 
          mouseYInSection = e.clientY - tiltedSectionDimensions.top

    const elementMiddleX = tiltedSectionDimensions.width / 2,
          elementMiddleY = tiltedSectionDimensions.height / 2;

    const maxTiltX = 30, 
          maxTiltY = 30;


    const tiltAngleY = ((mouseXInSection - elementMiddleX) / elementMiddleX) * maxTiltX
    const tiltAngleX = ((mouseYInSection - elementMiddleY) / elementMiddleY) * maxTiltY

    tiltedCard.style.transform = `rotateY(${tiltAngleY}deg) rotateX(${-tiltAngleX}deg)`
    console.log(elementMiddleX,elementMiddleY)
  }


  tiltedSection.addEventListener("mouseout", resetTiltOnMouseOut)

  function resetTiltOnMouseOut(){
      tiltedCard.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`
  }
}