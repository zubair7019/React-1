import React from "react";

const ExpenseItem = (props) => {
  return (
    <div>
      <div>
        <h1>{props.id}</h1>
       <h2>{props.date.toISOString()}</h2>
       <h2>{props.title}</h2>
       <h2>${props.amount}</h2>
       <h2>{props.location}</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
