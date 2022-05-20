// % Storing Contact Me Results on a page.
const placeForResults = document.getElementById('results');

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.insertAdjacentHTML(
    'afterbegin',
    `<p class=result-info><span class=name-result>${name}</span> :<br> <span class=value-result>${value}</span></p>`
  );
  // placeForResults.append(`${name} : ${value}`);
  // placeForResults.append(document.createElement('br'));
});