import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const handleChange = (event) => setFirstName(event.target.value);
  const [lastName, setLastName] = useState("");
  const handleChange2 = (event) => setLastName(event.target.value);
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (firstName.trim() !== "" || lastName.trim() !== "") {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="FirstName" value={firstName} onChange={handleChange} />
        <input type="text" placeholder="LastName" value={lastName} onChange={handleChange2} />
        <button type="submit">Submit</button>
      </form>
      {fullName !== "" && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}





