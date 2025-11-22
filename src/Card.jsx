import React from "react";

const card = ({ Content, userName, age }) => {
  return (
    <>
    <div className="h-screen flex items-center justify-center">
      <div className="flex justify-center py-16 w-[300px] mx-auto rounded-lg bg-green-900">
        <div className="text-center mb-4">
          <h2 className="text-white ">User Name: {userName}</h2>
          <p className="text-white ">Age: {age}</p>
          <p className="text-white ">Content: {Content}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default card;
