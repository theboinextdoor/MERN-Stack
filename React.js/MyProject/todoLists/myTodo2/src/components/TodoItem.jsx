import { GiCrossMark } from "react-icons/gi";

const TodoItem = ({ todoName, onDeleteClick }) => {
    const deleteButton = {
        color: "red",
        fontSize: "1.5em",
      };
    
  return (
    <div
      className="bg-gray-100 m-2 rounded-lg p-6 text-slate-100 flex items-start space-x-3
    justify-between h-auto mb-2 bg-opacity-40 backdrop-blur-sm md:mx-5 lg:mx-8 "
    >
      <div className="font-semibold text-xl" >{todoName}</div>
      <div className="">
        <button type="submit"
        onClick={() => onDeleteClick(todoName)}>
          <GiCrossMark style={deleteButton} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
