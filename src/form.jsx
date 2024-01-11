import { useState } from "react";

function Form(props) {
  let [Description, setDescription] = useState();
  let [Amount, setAmount] = useState();
  let [Selectedvalue, setSelectedValue] = useState();
  let [val, setVal] = useState("");
  let [amountval, setAmountVal] = useState();
  function handleSubmit() {
    setVal("");
    setAmountVal("");
    props.handleAdd(Description, Amount, Selectedvalue);
  }
  const handleDropdown = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
  };
  return (
    <>
      <input
        placeholder="enter description"
        value={val}
        onChange={(data) => {
          setDescription(data.target.value);
          setVal(data.target.value);
        }}
      />
      <br />
      <br />
      <input
        placeholder="enter the amount spent"
        value={amountval}
        onChange={(data) => {
          setAmount(Number(data.target.value));
          setAmountVal(data.target.value);
        }}
      />
      <br />
      <br />

      <label htmlFor="myDropdown">Select an option:</label>
      <select id="myDropdown" onChange={handleDropdown}>
        <option value="">Select </option>
        <option value="food">food</option>
        <option value="entertainment">entertainment</option>
        <option value="selfcare">selfcare</option>
      </select>

      <br />
      <br />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}
export default Form;
