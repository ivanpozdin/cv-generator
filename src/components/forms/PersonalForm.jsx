import { useState } from "react";

export default function PersonalForm({ personalInfo, setPersonalInfo }) {
  const [name, setName] = useState(personalInfo.name);
  const [phone, setPhone] = useState(personalInfo.phone);
  const [email, setEmail] = useState(personalInfo.email);
  const [address, setAddress] = useState(personalInfo.address);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  return (
    <form
      className="personal-form"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        setPersonalInfo({ name, phone, email, address });
        console.log("submit!");
      }}
    >
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        placeholder="Enter your Name"
        id="name"
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="phone">Phone: </label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        id="phone"
        value={phone}
        onChange={handlePhoneChange}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        placeholder="Enter your email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />

      <label htmlFor="address">Address: </label>
      <input
        type="text"
        placeholder="Enter your address"
        id="address"
        value={address}
        onChange={handleAddressChange}
      />

      <button type="submit">SAVE</button>
    </form>
  );
}
