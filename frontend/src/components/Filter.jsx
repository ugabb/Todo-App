
const Filter = ({ handleFilterValue }) => {
  const active =false;
  const completed = true
  const all = "all";

  return (
    <div className="flex justify-center items-center p-4 gap-5 rounded bg-VeryDarkDesaturatedBlue text-VeryDarkGrayishBlue font-bold text-lg ">
      <p className="cursor-pointer text-BrightBlue" onClick={() => handleFilterValue(all)}>All</p>
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
