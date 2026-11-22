
// Jump to the Top
const topLink = document.querySelector('footer a');

topLink.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
