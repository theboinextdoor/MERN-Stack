import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems , onDeleteClick }) => {
  return (
    <div>
      { todoItems && todoItems.map((item) => (
        <TodoItem todoName={item.name} key={item.name} onDeleteClick = {onDeleteClick}/>
      ))}
    </div>
  );
};

export default TodoItems;
