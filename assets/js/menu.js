$('#nav-placeholder').load('../templates/navbar.html');

/* const url = window.location.pathname;
const htmlFileName = url.substring(url.lastIndexOf('/') + 1);
textfile = '../text/text_'+ htmlFileName;
$('#menu').load('../templates/navbar.html');
$('#placeholder').load(textfile);
console.log(htmlFileName);
 */
function updateBodyClass() {
document.addEventListener('DOMContentLoaded', function() {
    const width = window.innerWidth;
    if (width < 1200) {
     document.body.className = 'small-screen';
    }
  });
}

updateBodyClass(); // Call the function initially
window.addEventListener('load', updateBodyClass); // Update on page load (for SPAs)