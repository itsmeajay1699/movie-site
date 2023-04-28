import React from "react";
import { incCount, setCount } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const DetailPageSpinner = () => {
  const count = useSelector((state) => state.user.count);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    React.useEffect(() => {
      const interval = setInterval(() => {
        if (count == 2) {
          navigate("/home");
          dispatch(setCount());
        } else {
          dispatch(incCount());
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [count, dispatch]);
  return (
    <div id="container">
      &nbsp;
      <p id="text">OOPS😢</p>
      <p id="shadow">
        <span id="glow">DA</span>
        <span id="blink">TA NOT FOUND</span>
        <span id="glow"></span>
        <span id="blink"></span>
      </p>
    </div>
  );
};

export default DetailPageSpinner;
