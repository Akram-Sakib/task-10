import React from "react";
import { useParams } from "react-router-dom";
import { useGetQuizQuery } from "../../../features/quizzes/quizzesApi";
import Quiz from "./Quiz";

const Quizes = () => {
  const { id } = useParams();
  const { data: quizzes, isLoading, isError, error } = useGetQuizQuery(id);

  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    // const selectedOptions = Array.from(
    //   document.querySelectorAll(`input[type="checkbox"]:checked`)
    // );
    // const selectedOptionsIds = selectedOptions.map((opt) => {
    //   const { id } = opt || {};
    //   return id.split("_")[0].split("option")[1];
    // });
    // console.log(selectedOptionsIds);

    // match the selected options with the correct options and match it with the quiz Iscorrect
  };

  // decide what to do with the data
  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error.message}</p>;
  }
  if (!isLoading && !isError && quizzes.length > 0) {
    const videoTitle = quizzes[0]?.video_title || {};

    content = (
      <>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{videoTitle}</h1>
          <p className="text-sm text-slate-200">
            Each question contains 5 Mark
          </p>
        </div>
        <div className="space-y-8 ">
          {quizzes.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmitQuiz}
      className="mx-auto max-w-7xl px-5 lg:px-0"
    >
      {content}
      <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
        Submit
      </button>
    </form>
  );
};

export default Quizes;
