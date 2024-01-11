import { useEffect, useState } from "react";
import React from "react";
import Form from "./form";
import Transactions from "./transactions";
import { v4 as uuid4 } from "uuid";

function App() {
  let [Filter, setFilter] = useState("");
  let [Data, setData] = useState([
    { id: 1, description: "Madv", amount: 15, category: "food" },
  ]);
  function handleAdd(Description, Amount, Category) {
    setData((prevData) => [
      ...prevData,
      {
        id: uuid4,
        description: Description,
        amount: Amount,
        category: Category,
      },
    ]);
  }
  function handleFilter(value) {
    if (value === "all") {
      setFilter("");
    }
    setFilter(value);
  }
  function handleEdit(idt, descriptiont, amount, category) {
    setData((prevData) => {
      let temp = prevData.filter((row) => row.id !== idt);
      return [
        ...temp,
        {
          id: idt,
          description: descriptiont,
          amount: amount,
          category: category,
        },
      ];
    });
  }
  function handleDelete(idt) {
    setData((prevData) => {
      let temp = prevData.filter((row) => row.id !== idt);
      return [...temp];
    });
  }
  return (
    <>
      <Form
        handleAdd={(des, amount, cat) => {
          handleAdd(des, amount, cat);
        }}
      />
      <br />
      <br />
      <br />
      <h1>Your transactions</h1>
      <select
        id="myDropdown"
        onChange={(e) => {
          handleFilter(e.target.value);
        }}
      >
        <option value="">filter by</option>
        <option value="food">food</option>
        <option value="entertainment">entertainment</option>
        <option value="selfcare">selfcare</option>
        <option value="all">all</option>
      </select>
      {Data.filter((row) => row.category.includes(Filter)).map((row) => (
        <Transactions
          id={row.id}
          context={row.description}
          amount={row.amount}
          category={row.category}
          description={(id, des) => {
            handleEdit(id, des, row.amount, row.category);
          }}
          del={(id) => {
            handleDelete(id, row.description, row.amount, row.category);
          }}
        />
      ))}
    </>
  );
}

export default App;
