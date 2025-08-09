import Button from "react-bootstrap/esm/Button";
import { FaRegTrashCan } from "react-icons/fa6";

export const TodoList = ({
  todos,
  deleteTodo,
  updateTodo,
  toggleTodo,
//   handleShow,
//   setSelectedTodo,
}) => {
  if (todos.length > 0) {
    return todos.map((todo) => (
      <div key={todo.id} className="my-3">
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.complete ? <del>{todo.title}</del> : <span>{todo.title}</span>}
        </label>
        <FaRegTrashCan
          onClick={() => deleteTodo(todo.id)}
          size={15}
          color="red"
          style={{ cursor: "pointer" }}
          className="mx-2"
        />
        <Button
          size="sm"
          variant="info"
          onClick={() => updateTodo(todo)}
          //   onClick={() => {
          //     setSelectedTodo(todo);
          //     handleShow()
          //   }}
        >
          Update Todo
        </Button>
      </div>
    ));
  }
  return <h3>You don't have any todos!</h3>;
};
