import { useState } from "react";

const Filter = ({ handleFilterValue }) => {
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(true);

  return (
    <div className="flex justify-center items-center p-4 gap-5 rounded bg-VeryDarkDesaturatedBlue text-VeryDarkGrayishBlue font-bold text-lg ">
      <p className="cursor-pointer text-BrightBlue">All</p>
      <p className="cursor-pointer " onClick={() => handleFilterValue(active)}>
        Active
      </p>
      <p
        className="cursor-pointer "
        onClick={() => handleFilterValue(completed)}
      >
        Completed
      </p>
    </div>
  );
};

export default Filter;
