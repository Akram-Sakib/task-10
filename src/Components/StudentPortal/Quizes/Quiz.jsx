import React from "react";

const Quiz = ({ quiz }) => {
  const { id: quizId, question, options } = quiz || {};
  
  return (
    <div className="quiz">
      <h4 className="question">{question}</h4>
      <div className="quizOptions">
        {/* <!-- Option 1 --> */}
        {options?.map((opt) => {
          const { option, id } = opt || {};
          return (
            <label key={id} htmlFor={`option${id}_q${quizId}`}>
              <input type="checkbox" id={`option${id}_q${quizId}`} />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
