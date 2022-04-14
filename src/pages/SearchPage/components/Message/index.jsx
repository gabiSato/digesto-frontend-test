import React from "react";

const Message = ({ type = "", message = "" }) => {
  return (
    <div className={`column notification mb-4 ${type}`}>
      <button className="delete"></button>

      {message}
    </div>
  );
};

export default Message;
