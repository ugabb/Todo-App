
import X from "../assets/icon-cross.svg";
import Check from "../assets/icon-check.svg";

const Todo = ({ text, completed, handleCompleted, id, deleteTodo }) => {

    

  return (
    <div className={`flex justify-between items-center border-b border-VeryDarkGrayishBlueLight p-5 `}>
      <div className="flex gap-5">
        {completed ? (
          <div
            onClick={() => handleCompleted(id)}
            className="flex items-center justify-center h-6 w-6 bg-gradient-to-r from-StartGradient to-EndGradient rounded-full"
          >
            <img src={Check} alt="" />
          </div>
        ) : (
          <div
            onClick={() => handleCompleted(id)}
            className={` h-6 w-6 border border-gray-600 rounded-full`}
          ></div>
        )}

        {
            completed ?  <p className="text-VeryDarkGrayishBlue line-through ">{text}</p> : <p className="text-LightGrayishBlue">{text}</p>
        }
       
      </div>
      <img src={X} className="h-4 w-4" onClick={() => deleteTodo(id)} />
    </div>
  );
};

export default Todo;
