export const FaqComponent = () => {
  const faqComponent = document.querySelector(".faq-component");

  const faqAllQuestions = faqComponent.querySelectorAll(
    ".faq-question-partial"
  );

  faqAllQuestions.forEach((faqSingleQuestion) => {
    new ResizeObserver(listenToQuestionResize).observe(faqSingleQuestion);
    const faqAnswer = faqSingleQuestion.querySelector(
      ".faq-question-partial__answer"
    );
    faqSingleQuestion.addEventListener("click", () => {
      foldAllSiblingQuestions(faqSingleQuestion);
      faqSingleQuestion.toggleAttribute("data-question-expanded");
    });
  });

  function listenToQuestionResize(faqQuestionToListen) {
    const faqQuestion = faqQuestionToListen[0].target;

    const faqAnswer = faqQuestion.querySelector(
      ".faq-question-partial__answer"
    );

    faqQuestion.style.setProperty(
      "--faq-answer-height",
      `${faqAnswer.scrollHeight}px`
    );
  }

  function foldAllSiblingQuestions(clickedQuestion) {
    faqAllQuestions.forEach((faqQuestionToFold) => {
      if (faqQuestionToFold != clickedQuestion) {
        faqQuestionToFold.removeAttribute("data-question-expanded");
      }
    });
  }
};
