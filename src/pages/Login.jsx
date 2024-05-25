/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loggeduser } from "../redux/userSlice";
import { getDatabase, ref, set } from "firebase/database";


const Login = () => {
  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [storedData, setStoredData] = useState('');

  const handleLogin = () => {
    if (email == "") {
      toast.error("Email is required");
    } else if (password == "") {
      toast.error("Password is required");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          if (user.emailVerified == true) {
            set(ref(db, 'users/' + user.uid), {
              username: user.displayName,
              email: user.email,
              profile_picture : user.photoURL
            });          
            toast.success("Signed in successfully");
            setTimeout(() => {
              setEmail("");
              setPassword("");
              navigate("/");
            }, 3000);
            localStorage.setItem('myData', JSON.stringify(user));
            dispatch(loggeduser({user}))
            
          } else {
            toast.error("'Please verify your email before signing in.");
          }
          // ...
        })
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            toast.error("The email address is not valid.");
          } else if (error.code === "auth/weak-password") {
            toast.error("Password should be at least 6 characters");
          } else if (error.code === "auth/email-already-in-use") {
            toast.error(
              "The email address is already in use by another account."
            );
          } else if (error.code === "auth/operation-not-allowed") {
            toast.error("Email/Password accounts are not enabled.");
          } else {
            toast.error(
              "The address is not valid ! please check email & password"
            );
          }
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log(errorCode, errorMessage);
        });
    }
    
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <div className=" relative">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                    >
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  onClick={handleLogin}
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    to="/registration"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
