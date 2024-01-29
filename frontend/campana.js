document.getElementById('menu-button').addEventListener('click', function () {
  var dropdown = document.querySelector('.absolute');
  dropdown.classList.toggle('hidden');
  var expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
});