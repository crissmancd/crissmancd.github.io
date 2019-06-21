document.getElementById('js-show-nav').addEventListener('click', function(event) {
  event.preventDefault();
  event.target.parentElement.classList.toggle('show');
});
