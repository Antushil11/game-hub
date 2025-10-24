import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaShower } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  // Sign Up
  const { createUser, setUser, updateProfileFunc} = use(AuthContext);

  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ displayName, photoURL, email, password });
    if (password.length < 6) {
      toast.error("password should be at least 6 digit");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password Must have an Uppercase letter in the password Must have a Lowercase letter in the password  Length must be at least 6 character"
      );
      return;
    }

    //1 step create user

    createUser(email, password)
      .then((result) => {
        //2 step update profile
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            //3step email virification
            sendEmailVerification(result.user)
              .then((res) => {
                console.log(res);
                toast.success(" Check your email to active your account Verified your account");
              })
              .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
              });
          })
          .catch((error) => {
            console.log(error);
          });
        const user = result.user;
        // console.log(user);
        toast.success("Successfuly Register");
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
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
            <div className="relative">
              <label className="label text-white">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input text-gray-200"
                placeholder="Password"
                required
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-6 bottom-4 cursor-pointer z-50"
              >
                {show ? (
                  <FaEye className="w-8"></FaEye>
                ) : (
                  <IoEyeOff className="w-8"></IoEyeOff>
                )}
              </span>
            </div>
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
