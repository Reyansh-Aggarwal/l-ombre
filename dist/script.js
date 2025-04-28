function scrollToSect(targID) {
    const target = document.getElementById(targID); // Use the parameter
    if (target) {
        target.scrollIntoView({behavior: 'smooth'});
        console.log("Scrolling to:", targID); // Better debug message
    } else {
        console.error("Element not found:", targID);
    }
}

let isScrolling;
window.addEventListener('scroll', () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
  }, 120);
}, false);

AOS.init({
    duration: 1500,
    easing: 'ease-out-quad',
    once: true // Animate only once
  });