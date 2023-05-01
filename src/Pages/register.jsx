// import React from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // Register with google akun
  const navigate = useNavigate();

  const handleGoogleRegister = () => {
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

  //register with email and password
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordCheck = e.target.passwordCheck.value;

    if (!email || !password || !passwordCheck) {
      return alert("Email Atau Password Tidak Sesuai!");
    }

    if (password !== passwordCheck) {
      return alert("Password Harus Sama!");
    }

    if (password < 6) {
      return alert("Password HArus Lebih Dari 6 Karakter!");
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.info(err);
      });
  };
  return (
    <>
      <main className="bg-gradient-to-tr from-blue-800 to-blue-500">
        <div className="card-detail bg-white">
          <h1 className="text-4xl text-blue-500 ">REGISTER HERE!</h1>

          <form
            action=""
            className="form-login flex flex-col gap-4 rounded-lg mt-8"
            onSubmit={handleRegister}
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
                id="password"
                name="password"
                className="h-7 rounded-md
                border-gray-300"
              />
            </div>
            <div className="input-group gap-2">
              <label htmlFor="password">Ulangi Password</label>
              <input
                type="password"
                id="passwordCheck"
                name="passwordCheck"
                className="h-7 rounded-md
                border-gray-300"
              />
            </div>
            {/* <div className="input-group gap-2">
              <input
                type="file"
                name="image"
                
              />
            </div> */}
            <div className="btn-regis-page flex flex-col">
              <button className="bg-yellow-500 text-white" type="submit">
                Register
              </button>
              <Link to="/login" className="bg-blue-500 text-white">
                Login
              </Link>
              <button
                type="button"
                className="bg-slate-500 text-white"
                onClick={handleGoogleRegister}
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

export default Register;
