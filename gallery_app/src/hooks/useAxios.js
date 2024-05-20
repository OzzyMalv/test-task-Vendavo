import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url, condition = true) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!condition) {
      return;
    }
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await axios(url);
        if (!response) {
          throw new Error(response.statusText);
        }
        setIsPending(false);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error, setData, setIsPending };
};
