import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="">
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <a href="/Home">Back to home page</a>
    </div>
  );
};

export default NotFound;
