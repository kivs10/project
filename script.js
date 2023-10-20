// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



// Get the color palette, color elements, and jersey image element
const colorPalette = document.querySelector('.color-palette');
const colorImage = document.getElementById('color-image');

// Click event listener for the color palette
colorPalette.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        // Get the data-color attribute from the clicked color element
        const imageFilename = event.target.getAttribute('data-color');
        
        // Change the image source based on the selected color
        colorImage.src = imageFilename;
        
        // Remove the 'selected' class from all colors
        colorPalette.querySelectorAll('.color').forEach((color) => {
            color.classList.remove('selected');
        });
        
        // Add the 'selected' class to the clicked color
        event.target.classList.add('selected');
    }
});



  