import { useState } from "react"; // why because the input value changes
export default function Searchbar(props) {
  const [values, setValues] = useState({
    searchTerm: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getEmployee(values.searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        name="searchTerm"
        onChange={handleChange}
        value={values.searchTerm}
      />
      <input className="search" type="submit" value="search" />
    </form>
  );
}
