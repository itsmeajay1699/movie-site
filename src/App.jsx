import { useState } from "react";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getApiConfiguration } from "./store/homeSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_TMBD_API_BASE_URL
        }/configuration?api_key=${import.meta.env.VITE_REACT_APP_TMBD_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.images.secure_base_url);
        const url = {
          backdrop: res.data.images.secure_base_url + "original",
          poster: res.data.images.secure_base_url + "w500",
        };
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Home />
    </>
  );
}

export default App;
