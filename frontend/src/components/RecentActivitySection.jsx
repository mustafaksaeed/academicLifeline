import React from "react";
import RecentActivityItems from "./RecentActivityItems";

const RecentActivitySection = () => {
  const mockCourseActivity = [
    {
      name: "Final Project Proposal: Quantum Computing Ethics",
      deadline: "2025-11-15",
    },
    {
      name: "Module 4 Quiz: Advanced React Hooks",
      deadline: "2025-11-08",
    },
    {
      name: "Read Chapter 7: The Federalist Papers",
      deadline: "2025-11-05",
    },
    {
      name: "Lab Submission: Chemical Reaction Simulation",
      deadline: "2025-10-30",
    },
    {
      name: "Group Discussion: Economic Impact of AI",
      deadline: "2025-10-25",
    },
  ];

  return (
    <div>
      <RecentActivityItems course={mockCourseActivity} />
    </div>
  );
};

export default RecentActivitySection;
