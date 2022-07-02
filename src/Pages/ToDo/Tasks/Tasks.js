import React from "react";
import Task from "../Task/Task";

const Tasks = () => {
  const tasks = [
    {
      _id: 1,
      title: "masum",
      detail: "my name is md mozammel hoq masum",
    },
    {
      _id: 2,
      title: "masum",
      detail: "my name is md mozammel hoq masum",
    },
    {
      _id: 3,
      title: "masum",
      detail: "my name is md mozammel hoq masum",
    },
    {
      _id: 4,
      title: "masum",
      detail: "my name is md mozammel hoq masum",
    },
    {
      _id: 5,
      title: "masum",
      detail: "my name is md mozammel hoq masum",
    },
    {
      _id: 6,
      title: "masum",
      detail: "my name is md mozammel hoq masum",
    },
  ];
  return (
    <div className="mt-14  px-10">
      <h1 className="text-center text-3xl text-black font-bold font-sans antialiased">
        this is to do page
      </h1>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-14">
        {tasks.map((task) => (
          <Task key={task._id} task={task}></Task>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
