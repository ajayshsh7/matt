const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// work div link script
function redirectToURL(url) {
  window.open(url, '_blank')
}

// submit button action
function submitted() {
  // Simulate form submission
  alert("Submitted!"); 
}