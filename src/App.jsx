import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchCategory from "./components/SearchCategory";
import axios from "axios";

const API_URL = "https://api.api-ninjas.com/v1/quotes";

function App() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`${API_URL}?category=${value.value}`, {
        headers: {
          "X-Api-Key": "G2KgWC5eprHAdbE45nE5vw==wF6yoDYGTCKmOVxV",
        },
      })
      .then(({ data }) => {
        setData(data);
      });
  };

  return (
    <>
      <Navbar />
      <SearchCategory
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
