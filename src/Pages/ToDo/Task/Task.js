import React from "react";

const Task = ({ task }) => {
  const { title, detail } = task;
  return (
    <div class="card  shadow-md ">
      <div class="card-body">
        <div class="card-actions justify-end">
          <input
            type="checkbox"
            class="checkbox checkbox-xs  border-neutral shadow-lg "
          />
        </div>
        <p className="text-neutral text-2xl font-bold font-serif">{title}</p>
        <p className="text-black font-sans">{detail}</p>
      </div>
    </div>
  );
};

export default Task;
