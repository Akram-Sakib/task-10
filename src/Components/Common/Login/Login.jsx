import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../features/auth/authApi";
import LogoAndTitle from "../LogoAndTitle";

const Login = ({ admin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, isSuccess, isError }] = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [navigate, isSuccess, data, isError]);

  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        {admin ? (
          <LogoAndTitle title={"Sign in to Admin Account"} />
        ) : (
          <LogoAndTitle title={"Sign in to Student Account"} />
        )}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="login-input rounded-t-md"
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
                className="login-input rounded-b-md"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a
                href="/#"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
