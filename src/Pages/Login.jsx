import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";


const Login = () => {
  // Sign In
  const { signIn, user,logOut,signInWithEmailFunc } = use(AuthContext);
  console.log(user);
  const location = useLocation();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert("Your Logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignin =() =>{
    signInWithEmailFunc()
    .then((result) => {
        
        console.log(result);
        // navigate(from)
        toast.success("signUp successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
   
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md text-white backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="font-semibold text-2xl text-center py-4">
          Login your account
        </h2>
        {user ? (
          <div>
            <img
              src={
                user?.photoURL ||
                "https://www.canto.com/cdn/2019/08/19194138/image-url-3.jpg"
              }
              className="h-20 w-20 rounded-full mx-auto"
              alt=""
            />
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <h2 className="text-white/80 font-semibold">{user?.email}</h2>
            <button onClick={handleSignOut} className="btn bg-primary">
              Sign Out
            </button>
          </div>
        ) : (
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
              <button
                type="submit"
                className="btn btn-primary mt-4 text-white "
              >
                Login
              </button>
               {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
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
        )}
      </div>
    </div>
  );
};

export default Login;
