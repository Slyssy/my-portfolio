const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

// % Storing Contact Me Results on a page.
const placeForResults = document.getElementById('results');

new URLSearchParams(window.location.search).forEach((value, name) => {
  if (name === 'Birthday') {
    value = `${value.slice(-5)}-${value.slice(0, 4)}`;
  }
  placeForResults.insertAdjacentHTML(
    'beforeend',
    `<div class=result-info>
    <p class=name-result>${name}:</p>
    <p class=value-result>${value}</p>
    </div>`
  );
});

//% Navbar toggle button event listener
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});
