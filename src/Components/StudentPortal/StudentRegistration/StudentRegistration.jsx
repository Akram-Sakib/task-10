import React, { useState } from "react";
import { useRegisterMutation } from "../../../features/auth/authApi";
import LogoAndTitle from "../../Common/LogoAndTitle";

const StudentRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register] = useRegisterMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      register({ name, email, role: "student", password });
    } else {
      return alert("Password and Confirm Password must be same");
    }
  };

  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <LogoAndTitle title={"Create Your New Account"} />
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autocomplete="name"
                required
                className="login-input rounded-t-md"
                placeholder="Student Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label for="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="login-input "
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="login-input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label for="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autocomplete="confirm-password"
                required
                className="login-input rounded-b-md"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StudentRegistration;
