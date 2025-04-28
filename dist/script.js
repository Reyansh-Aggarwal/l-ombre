function scrollToSect(targID) {
    const target = document.getElementById(targID); // Use the parameter
    if (target) {
        target.scrollIntoView({behavior: 'smooth'});
        console.log("Scrolling to:", targID); // Better debug message
    } else {
        console.error("Element not found:", targID);
    }
}