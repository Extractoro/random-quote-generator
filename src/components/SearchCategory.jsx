import { useState } from "react";
import { categories } from "../../categories.json";
import Select from "react-select";

const SearchCategory = ({ value, setValue, handleSubmit }) => {
  const [isClearable] = useState(true);
  const [isSearchable] = useState(true);

  return (
    <div className="px-10 max-w-screen-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <Select
          className="basic-single w-full md:w-4/5"
          classNamePrefix="select"
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="quotes"
          value={value}
          onChange={(e) => setValue(e)}
          options={categories}
        />
        <button
          disabled={!value}
          className="mt-5 md:mt-0 md:ml-5 md:w-1/5 bg-blue-600 text-white font-semibold rounded py-2 hover:bg-blue-800 transition-all duration-300"
          type="submit"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default SearchCategory;
