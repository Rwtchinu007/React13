import React from "react";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div className="sale bg-blue-900 overflow-hidden">
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
      </div>
      <h1> All Courses Page</h1>
      <Outlet/>
    </div>
  );
};

export default Courses;
