import { IoIosAdd } from "react-icons/io";
import {  useRef } from "react";

const InputField = ({onNewItem}) => {
  const mystyle = {
    color: "green",
    fontSize: "2.5em",
  };

  const todoNameElement = useRef()

  const handleAddButtonClick = (event) =>{
    event.preventDefault();
    const todoName= todoNameElement.current.value
    todoNameElement.current.value = ""
    onNewItem(todoName)
  }
  return (
    <form className="flex items-center bg-slate-700 mx-2 font-myFont rounded-md md:mx-5 lg:mx-8 justify-between bg-opacity-50 backdrop-blur-sm"
    onSubmit={handleAddButtonClick}
    >
      <input
        ref={todoNameElement}
        type="text"
        placeholder="Add a Task"
        className="text-white text-xl ml-4 w-full my-2 px-1 py-3 bg-transparent font-medium outline-none"
      />
      <button className="mr-3" 
       ><IoIosAdd style={mystyle} /></button>
    </form>
  );
};

export default InputField;
