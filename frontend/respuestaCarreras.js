document.addEventListener("DOMContentLoaded", function() {
  const toggleAnswers = document.querySelectorAll(".toggle-answer");

  toggleAnswers.forEach(function(toggleAnswer) {
    toggleAnswer.addEventListener("click", function() {
      const answer = this.closest('.faq-item').querySelector(".answer");
      answer.classList.toggle("hidden");
    });
  });
});
