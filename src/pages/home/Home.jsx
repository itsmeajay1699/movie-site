import React, { useEffect, useState } from "react";

import useFetch from "../../api/useFetch";

const Home = () => {
  // print env variables
  // console.log(import.meta.env.VITE_REACT_APP_TMBD_API_KEY );
  const { isLoading, apiData, serverError } = useFetch("/movie/popular");
  console.log(apiData);
  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {serverError && <p>{serverError}</p>}
      {apiData && (
        <ul>
          {apiData.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
