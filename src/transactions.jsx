import { useState } from "react";

function Transactions(props) {
  let id = props.id;
  let description = props.context;
  let money = props.amount;
  let category = props.category;
  let edit = props.description;
  let del = props.del;
  let [Edit, setEdit] = useState(true);
  function handleEdit() {
    setEdit(false);
  }
  function handleDelete() {
    console.log(id);
    del(id);
  }
  function handleSubmit() {
    console.log(description);
    edit(id, description);
    setEdit(true);
  }
  return Edit ? (
    <>
      <div style={{ width: "500px", border: "1px solid black" }}>
        <span>{description}</span>
        <span style={{ marginLeft: "30px" }}>{money}</span>
        <span style={{ float: "right" }}>{category}</span>
        <button onClick={handleEdit}> edit </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  ) : (
    <>
      <div style={{ width: "500px", border: "1px solid black" }}>
        <input
          placeholder="enter the description"
          onKeyUp={(data) => (description = data.target.value)}
          //   onKeyDown={(data) => (description = data.target.value)}
        />
        {/* <span>{description}</span> */}
        <span style={{ marginLeft: "30px" }}>{money}</span>
        <span style={{ float: "right" }}>{category}</span>
        <button onClick={handleSubmit}> submit </button>
      </div>
    </>
  );
}
export default Transactions;
