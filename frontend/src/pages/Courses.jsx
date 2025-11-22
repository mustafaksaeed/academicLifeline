import React from "react";
import CourseCard from "../components/CourseCard";
const Courses = () => {
  return (
    <div style={{ flexGrow: "1", padding: "20px" }}>
      <h1>Courses</h1>
      <CourseCard course={"Computer Science"} />
    </div>
  );
};

export default Courses;
