import React from "react";
import "./spinner.scss";
import { incCount, setCount } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Spinner = () => {
  const count = useSelector((state) => state.user.count);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // make a setInterval function that will dispatch the incCount action every 1 second
  // and clear the interval when the count is 100
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        navigate("/login");
        dispatch(setCount());
      } else {
        dispatch(incCount());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count, dispatch]);
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="div">
        <h2>You are directing to the login page in : {count}</h2>
      </div>
    </div>
  );
};

export default Spinner;
