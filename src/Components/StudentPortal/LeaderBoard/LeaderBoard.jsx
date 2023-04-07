import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../../features/users/usersApi";
import { leaderBoardLoaded } from "../../../features/leaderBoard/leaderBoardSlice";
import { useGetAssignmentMarksQuery } from "../../../features/assignmentMark/assignmentMarkApi";
import { useGetQuizMarksQuery } from "../../../features/quizMark/quizMarkApi";

const LeaderBoard = () => {
  const { data: users, isLoading, isError, isSuccess } = useGetUsersQuery();
  const { leaderBoard } = useSelector((state) => state.leaderBoard);

  const {
    data: assignmentMark,
    isLoading: assignmentMarkLoading,
    isError: assignmentMarkError,
    isSuccess: assignmentMarkSuccess,
  } = useGetAssignmentMarksQuery();
  const {
    data: quizMarks,
    isLoading: quizMarksLoading,
    isError: quizMarksError,
    isSuccess: quizMarksSuccess,
  } = useGetQuizMarksQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && assignmentMarkSuccess && quizMarksSuccess) {
      // make new array of object
      const newLeaderBoard = users.map((user,index) => {
        const { id, name, email } = user;
        // get assignment mark
        const userAssignmentMark = assignmentMark.filter(
          (mark) => mark.student_id === id
        );
        const assignment = userAssignmentMark.reduce(
          (acc, cur) => acc + cur.mark,
          0
        );
        // get quiz mark
        const userQuizMark = quizMarks.filter((mark) => mark.student_id === id);
        const quiz = userQuizMark.reduce((acc, cur) => acc + cur.mark, 0);

        return {
          id,
          rank:index + 1,
          name,
          email,
          quizMark: quiz || 0,
          assignmentMark: assignment || 0,
          total: assignment + quiz,
        };
      });
      // sort the array
      newLeaderBoard.sort((a, b) => b.total - a.total);
      // dispatch the action
      dispatch(leaderBoardLoaded(newLeaderBoard));
    }
  }, [
    users,
    isSuccess,
    dispatch,
    assignmentMark,
    assignmentMarkSuccess,
    quizMarks,
    quizMarksSuccess,
  ]);

  const { email } = useSelector((state) => state?.auth?.user) || {};

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>Something went wrong!</p>;
  }

  if (!isLoading && !isError && leaderBoard.length > 0) {
    const selfUser = leaderBoard.find((user) => user.email === email);
    content = (
      <>
        <div>
          <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
          <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
            <thead>
              <tr>
                <th className="table-th !text-center">Rank</th>
                <th className="table-th !text-center">Name</th>
                <th className="table-th !text-center">Quiz Mark</th>
                <th className="table-th !text-center">Assignment Mark</th>
                <th className="table-th !text-center">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-2 border-cyan">
                <td className="table-td text-center font-bold">
                  {selfUser?.rank}
                </td>
                <td className="table-td text-center font-bold">
                  {selfUser?.name}
                </td>
                <td className="table-td text-center font-bold">
                  {selfUser?.quizMark}
                </td>
                <td className="table-td text-center font-bold">
                  {selfUser?.assignmentMark}
                </td>
                <td className="table-td text-center font-bold">
                  {selfUser?.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8">
          <h3 className="text-lg font-bold">Top 20 Result</h3>
          <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
            <thead>
              <tr className="border-b border-slate-600/50">
                <th className="table-th !text-center">Rank</th>
                <th className="table-th !text-center">Name</th>
                <th className="table-th !text-center">Quiz Mark</th>
                <th className="table-th !text-center">Assignment Mark</th>
                <th className="table-th !text-center">Total</th>
              </tr>
            </thead>

            <tbody>
              {leaderBoard
                .filter((user) => user.role !== "admin")
                .map((user, index) => (
                  <tr key={user.id} className="border-b border-slate-600/50">
                    <td className="table-td text-center">{index + 1}</td>
                    <td className="table-td text-center">{user.name}</td>
                    <td className="table-td text-center">{user.quizMark}</td>
                    <td className="table-td text-center">
                      {user.assignmentMark}
                    </td>
                    <td className="table-td text-center">{user.total}</td>
                  </tr>
                ))}

              {/* <tr className="border-b border-slate-600/50">
              <td className="table-td text-center">4</td>
              <td className="table-td text-center">Saad Hasan</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">100</td>
            </tr> */}

              {/* <tr className="border-b border-slate-600/50">
              <td className="table-td text-center">4</td>
              <td className="table-td text-center">Saad Hasan</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">100</td>
            </tr>

            <tr className="border-b border-slate-600/50">
              <td className="table-td text-center">4</td>
              <td className="table-td text-center">Saad Hasan</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">100</td>
            </tr>

            <tr className="border-b border-slate-600/50">
              <td className="table-td text-center">4</td>
              <td className="table-td text-center">Saad Hasan</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">100</td>
            </tr>

            <tr className="border-slate-600/50">
              <td className="table-td text-center">4</td>
              <td className="table-td text-center">Saad Hasan</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">50</td>
              <td className="table-td text-center">100</td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return <div className="mx-auto max-w-7xl px-5 lg:px-0">{content}</div>;
};

export default LeaderBoard;
