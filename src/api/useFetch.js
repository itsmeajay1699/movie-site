import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_REACT_APP_TMBD_API_BASE_URL}${url}?api_key=${
            import.meta.env.VITE_REACT_APP_TMBD_API_KEY
          }`
        );
        
        setApiData(resp.data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};

export default useFetch;
