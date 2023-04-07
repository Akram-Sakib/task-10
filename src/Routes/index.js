import { Navigate, Outlet } from "react-router-dom";
import AdminQuizzes from "../Components/Admin/AdminQuizzes/AdminQuizzes";
import Assignments from "../Components/Admin/Assignments/Assignments";
import AssignmentMarks from "../Components/Admin/AssignmentMarks/AssignmentMarks";
import Dashboard from "../Components/Admin/Dashboard/Dashboard";
import Videos from "../Components/Admin/Videos/Videos";
import Layout from "../Components/Common/Layout/Layout";
import Login from "../Components/Common/Login/Login";
import CoursePlayer from "../Components/StudentPortal/CoursePlayer/CoursePlayer";
import LeaderBoard from "../Components/StudentPortal/LeaderBoard/LeaderBoard";
import Quizes from "../Components/StudentPortal/Quizes/Quizes";
import StudentRegistration from "../Components/StudentPortal/StudentRegistration/StudentRegistration";

export const routes = (isLoggedIn) => {

  return [
    {
      path: "/",
      element: isLoggedIn ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: "/", element: <CoursePlayer /> },
        { path: "/quiz/:id", element: <Quizes /> },
        { path: "/leaderboard", element: <LeaderBoard /> },
        {
          path: "/admin",
          element: true ? <Outlet /> : <Navigate to="/admin/login" />,
          children: [
            {
              path: "/admin",
              element: <Dashboard />,
            },
            { path: "videos", element: <Videos /> },
            { path: "assignment", element: <Assignments /> },
            { path: "quizzes", element: <AdminQuizzes /> },
            { path: "assignment-mark", element: <AssignmentMarks /> },
          ],
        },
      ],
    },
    {
      path: "/registration",
      element: !isLoggedIn ? <StudentRegistration /> : <Navigate to="/" />,
    },
    {
      path: "/login",
      element: !isLoggedIn ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/admin/login",
      element: <Login />,
    },
    {
      path: "*",
      element: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontSize: "3rem",
          }}
        >
          <h2>404 Not Found</h2>
        </div>
      ),
    },
  ];
};
