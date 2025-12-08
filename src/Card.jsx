import React from "react";
import userData from "./data/UserData";

const card = ({ name, age, interest, isActive, email }) => {
  return (
    <>
      <div className="p-4 border rounded-lg shadow-md w-60">
        <h1 className="text-xl font-bold">Name: {name}</h1>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <h4>Interest: </h4>
        <ul className="list-disc ml-4">
          {interest.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>IsActive: </p>
       
      </div>
    </>
  );
};

export default card;
