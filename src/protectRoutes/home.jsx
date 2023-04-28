import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
const ProtectUserDashBoard = () => {
  const [ok, setOk] = React.useState(false);
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    console.log(user)
    if (user && user.token) {
      axios
        .get("http://localhost:8000/api/v1/auth/test", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setOk(res.data.ok);
          console.log(res.data.ok);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return ok ? <Outlet /> : <Spinner />;
};

export default ProtectUserDashBoard;
