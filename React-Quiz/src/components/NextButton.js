function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  const dataType = index + 1 === numQuestions ? "quizFinished" : "nextQuestion";
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: dataType })}>
      {dataType === "nextQuestion" ? `Next` : `Finish`}
    </button>
  );
}

export default NextButton;
