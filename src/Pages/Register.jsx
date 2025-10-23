import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
      
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md text-white backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="font-semibold text-2xl text-center py-4">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label text-white"> Name </label>
            <input
              name="name"
              type="text"
              className="input text-gray-200"
              placeholder="Enter your name "
              required
            />
            {/* photoURL */}

            <label className="label text-white">photoURL</label>
            <input
              name="photo"
              type="text"
              className="input text-gray-200"
              placeholder="Enter your photoURL"
              required
            />
            {/* Email */}
            <label className="label text-white"> Email</label>
            <input
              name="email"
              type="email"
              className="input text-gray-200"
              placeholder="Enter your email address"
              required
            />

            {/* password */}
            <label className="label text-white">Password</label>
            <input
              name="password"
              type="password"
              className="input text-gray-200"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4 text-white ">
              Register
            </button>
            <p className="font-semibold text-center  pt-5">
              {" "}
              Allready Have a Account ?{" "}
              <Link to={"/auth/login"} className="text-secondary text-[12px]">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
