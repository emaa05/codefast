document.getElementById('showTermsLink').addEventListener('click', function() {
  document.getElementById('modalContainer').classList.remove('hidden');
});

document.getElementById('closeTerms').addEventListener('click', function() {
  document.getElementById('modalContainer').classList.add('hidden');
});