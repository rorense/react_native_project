import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "384601e5admshccdf2397e1640a0p11c704jsn693b03cf8856",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
