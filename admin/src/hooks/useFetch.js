import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("there was a problem getting data");
        }
        const data = await res.json();

        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getData(url);
  }, [url]);

  return { data, error };
};
export default useFetch;
