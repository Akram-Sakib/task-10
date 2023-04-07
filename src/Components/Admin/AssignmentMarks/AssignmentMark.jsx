import React from "react";
import { format } from "date-fns";

const AssignmentMark = ({ assignmentMark }) => {
  const { title, student_name, createdAt, mark, repo_link } =
    assignmentMark || {};

  return (
    <tr>
      <td className="table-td">{title}</td>
      <td className="table-td">
        {/* 10 Mar 2023 10:58:13 PM */}
        {format(new Date(createdAt), "dd MMM yyyy hh:mm:ss a")}
      </td>
      <td className="table-td">{student_name}</td>
      <td className="table-td">{repo_link}</td>
      <td className="table-td input-mark">
        <input max="100" value={mark} />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </td>
    </tr>
  );
};

export default AssignmentMark;
