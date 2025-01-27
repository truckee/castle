$('#nav-placeholder').load('../templates/navbar.html');

function updateBodyClass() {
document.addEventListener('DOMContentLoaded', function() {
    const width = window.innerWidth;
    if (width < 760) {
     document.body.className = 'small-screen';
    }
  });
}

updateBodyClass(); // Call the function initially
window.addEventListener('load', updateBodyClass); // Update on page load (for SPAs)