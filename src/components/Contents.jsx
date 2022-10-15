import React from "react";
import Header from "./Header";
import { ProjectsData } from "../Data/ProjectsData.jsx";
import { useState } from "react";
function Contents() {
  const [text, setText] = useState("123");
  return (
    <>
      <Header></Header>
      <div>{ProjectsData[0].title}</div>
    </>
  );
}
export default Contents;
