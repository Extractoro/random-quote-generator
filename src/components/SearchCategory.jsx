import axios from "axios";
import { useState } from "react";
import { categories } from "../../categories.json";
import Select from "react-select";

const API_URL = "https://api.api-ninjas.com/v1/quotes";

const SearchCategory = () => {
  const [value, setValue] = useState(categories[0]);
  const [isClearable] = useState(true);
  const [isSearchable] = useState(true);
  //   const [findCategories, setFindCategories] = useState(categories);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${API_URL}?category=${value}`);
  };

  const handleChange = (val) => {
    setValue(val);
  };
  console.log(value);

  return (
    <form onSubmit={handleSubmit}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={isClearable}
        isSearchable={isSearchable}
        name="color"
        value={value}
        onChange={(e) => handleChange(e)}
        options={categories}
      />
      <button type="submit">Get Quote</button>
    </form>
  );
};

export default SearchCategory;
