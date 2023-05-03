// import React from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./../css/dashboard.css";

const Login = () => {
  // Login with google akun
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.info(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.info(err);
      });
  };

  //login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Terjadi Kesalahan!");
      });
  };
  return (
    <>
      <main className="">
        <div className="card-detail bg-white">
          <h1 className="text-4xl text-blue-500 ">LOGIN HERE!</h1>

          <form
            action=""
            className="form-login flex flex-col gap-4 rounded-lg mt-8"
            onSubmit={handleLogin}
          >
            <div className="input-group gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="h-7 rounded-md 
              border-gray-300"
              />
            </div>
            <div className="input-group gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="h-7 rounded-md
              border-gray-300"
              />
            </div>
            <div className="btn-regis-page flex flex-col">
              <button className="bg-blue-500 text-white">Login</button>
              <Link to="/register" className="bg-yellow-500 text-white">
                Register
              </Link>
              <button
                type="button"
                className="bg-slate-500 text-white"
                onClick={handleGoogleLogin}
              >
                With Google
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
