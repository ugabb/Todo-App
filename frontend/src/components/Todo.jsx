import X from "../assets/icon-cross.svg";
import Check from "../assets/icon-check.svg";

const Todo = ({ text, completed, handleCompleted, id }) => {

    

  return (
    <div className="flex justify-between items-center border-b border-VeryDarkGrayishBlue p-5 ">
      <div className="flex gap-5">
        {completed ? (
          <div onClick={() => handleCompleted(id)} className="flex items-center justify-center h-6 w-6 bg-gradient-to-r from-StartGradient to-EndGradient rounded-full">
            <img src={Check} alt="" />
          </div>
        ) : (
          <div onClick={() => handleCompleted(id)} className=" h-6 w-6 border border-LightGrayishBlue rounded-full"></div>
        )}
        <p className="text-LightGrayishBlue">{text}</p>
      </div>
      <img src={X} className="h-4 w-4" alt="" />
    </div>
  );
};

export default Todo;
