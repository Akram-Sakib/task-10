import React from "react";
import { useGetQuizzesQuery } from "../../../features/quizzes/quizzesApi";
import AdminQuiz from "./AdminQuiz";

const AdminQuizzes = () => {
  const { data: assignments, isError, isLoading } = useGetQuizzesQuery();

  // decide what to show based on the state
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>Something went wrong...</div>;
  }
  if (!isLoading && !isError && assignments.length > 0) {
    content = assignments.map((assignment) => (
      <AdminQuiz key={assignment.id} quiz={assignment} />
    ));
  }

  return (
    <div className="mx-auto max-w-full px-5 lg:px-20">
      <div className="px-3 py-20 bg-opacity-10">
        <div className="w-full flex">
          <button className="btn ml-auto">Add Quiz</button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
              <tr>
                <th className="table-th">Question</th>
                <th className="table-th">Video</th>
                <th className="table-th justify-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50">
              {content}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminQuizzes;
