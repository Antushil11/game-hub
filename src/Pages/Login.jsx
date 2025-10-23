import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation()

  const navigate = useNavigate()
  console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    signIn(email,password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        alert("Login successfully")
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode,errorMessage)
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md text-white backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="font-semibold text-2xl text-center py-4">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4 text-white ">
              Login
            </button>
            <p className="font-semibold text-center  pt-5">
              {" "}
              Dont’t Have An Account ?{" "}
              <Link
                to={"/auth/register"}
                className="text-secondary text-[12px]"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
