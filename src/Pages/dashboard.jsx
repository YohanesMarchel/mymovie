import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./../css/dashboard.css";

const Dashboard = () => {
  // use data user login
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  //logout
  const handleLogOut = (e) => {
    const auth = getAuth();
    signOut(auth)
      .then((result) => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <main className="dashboard-container">
        <div className="card-detail bg-white">
          <h1 className="text-4xl text-blue-500 ">WELCOME!</h1>
          <img src={user?.photoURL} alt={user?.displayName} className="" />
          <h2 className="text-1xl">{user?.displayName}</h2>
          <h3 className="text-1xl">{user?.email}</h3>
          <button
            className="bg-red-500 text-white"
            onClick={handleLogOut}
            type="button"
          >
            Logout
          </button>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
