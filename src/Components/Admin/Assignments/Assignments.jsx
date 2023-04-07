import React from "react";
import Assignment from "./Assignment";
import { useGetAssignmentsQuery } from "../../../features/assignments/assignmentsApi";

const Assignments = () => {
  const { data: assignments, isError, isLoading } = useGetAssignmentsQuery();

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
      <Assignment key={assignment.id} assignment={assignment} />
    ));
  }
      
  return (
    <div className="mx-auto max-w-full px-5 lg:px-20">
      <div className="px-3 py-20 bg-opacity-10">
        <div className="w-full flex">
          <button className="btn ml-auto">Add Assignment</button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
              <tr>
                <th className="table-th">Title</th>
                <th className="table-th">Video Title</th>
                <th className="table-th">Mark</th>
                <th className="table-th">Action</th>
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

export default Assignments;
