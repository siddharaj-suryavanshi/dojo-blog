import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setISPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setISPending(false);
          setError(null);
        })
        .catch((err) => {
          setISPending(false);
          setError(err.message);
        });
    }, 2000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
