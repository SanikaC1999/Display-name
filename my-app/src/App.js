import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const handleChange = (event) => setFirstName(event.target.value);
  const [lastName, setLastName] = useState("");
  const handleChange2 = (event) => setLastName(event.target.value);
  const [fullName, setFullName] = useState("");
  const handleSubmit = () => setFullName(`${firstName} ${lastName}`);

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <input type="text" placeholder="FirstName" onChange={handleChange} />
      <input type="text" placeholder="LastName" onChange={handleChange2} />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      {fullName ? <h2>Full Name: {fullName}</h2> : "Full Name:"}
    </div>
  );
}

