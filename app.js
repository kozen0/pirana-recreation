// start of functions called
colorScheme();
stickyNav();
// end of functions called

// start of individual functions
function stickyNav() {
  const nav = document.querySelector('header');
  let homeSectionHeight = document.querySelector('#home').offsetHeight;

  window.addEventListener('scroll', fixNav);

  function fixNav() {
    // if the navigation is halfway throught the home section, then add the styles
    if (window.scrollY >= ( homeSectionHeight / 2 )) {
      nav.style.backgroundColor = 'black';
      nav.style.color = 'white';
    } else {
      nav.style.backgroundColor = '';
      nav.style.color = '';
    }
  }
}

function colorScheme() {
  let colorSchemes = document.querySelectorAll('.color-scheme');
  let root = document.querySelector(':root');

  colorSchemes.forEach(function(color) {
    color.addEventListener('click', function(event) {
      // changes the css variable 'brand-color' to the background color of the clicked color
      root.style.setProperty('--brand-color', event.target.style.backgroundColor);
    });
  });
}
// end of individual functions
