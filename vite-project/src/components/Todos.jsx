// import { useReducer, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { FaRegTrashCan, FaRegSquarePlus } from "react-icons/fa6";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// export function Todos() {
//   const [todos, setTodos] = useState(initialTodos);
//   const [todo, setTodo] = useState("");
//   const [selectedTodo, setSelectedTodo] = useState(null);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   // const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const onTodoToggle = (selectedTodo) => {
//     // console.log(selectedTodo, "selectedTodo");

//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === selectedTodo.id) {
//         // return { ...selectedTodo, complete: true };
//         return { ...selectedTodo, complete: !selectedTodo.complete };
//       }
//       return todo;
//     });
//     // console.log(updatedTodos, "updatedTodos");
//     setTodos(updatedTodos);
//     // dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   function onTodoAdd(event) {
//     event.preventDefault();
//     const newTodo = { id: todos.length + 1, title: todo.trim(), complete: false };
//     // console.log(newTodo, "newTodo");
//     setTodos((prev) => {
//       // console.log([...prev, newTodo]);
//       return [...prev, newTodo];
//     });
//     setTodo("");
//   }

//   function onTodoUpdate() {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === selectedTodo.id) {
//         // return { ...selectedTodo, complete: true };
//         return { ...selectedTodo, title: selectedTodo?.title };
//       }
//       return todo;
//     });
//     console.log(updatedTodos, "updatedTodos");
//     setTodos(updatedTodos);
//     handleClose();
//   }

//   const onDeleteTodo = (todoId) => {
//     const areYouSure = confirm(
//       `Are you sure you want to delete todo with id ${todoId}, You can't undo this action.`
//     );
//     // console.log(areYouSure, "areYouSure");

//     if (areYouSure) {
//       const todosAfterDeletion = todos.filter((todo) => todo.id !== todoId);
//       // console.log(todoId, "todoId", todosAfterDeletion);
//       setTodos(todosAfterDeletion);
//     }
//   };

//   // console.log(todo, "Todos: ", todos);
//   // console.log(selectedTodo, "selectedTodo");

//   return (
//     <>
//       <form onSubmit={onTodoAdd}>
//         <input
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="Enter your todo title!"
//         />
//         <Button variant="primary">
//           Add Todo <FaRegSquarePlus />
//         </Button>
//       </form>
//       {todos.length > 0 ? (
//         todos.map((todo) => {
//           // console.log("Todo: ", todo);

//           return (
//             <div key={todo.id}>
//               <label
//               // style={{
//               //   textDecoration: todo.complete ? "line-through" : "none",
//               // }}
//               >
//                 <input
//                   type="checkbox"
//                   checked={todo.complete}
//                   onChange={() => onTodoToggle(todo)}
//                 />
//                 {todo.complete ? (
//                   <del>{todo.title} </del>
//                 ) : (
//                   <span>{todo.title}</span>
//                 )}
//               </label>
//               {/* <FaBeer size={50} color="red" /> */}
//               <FaRegTrashCan
//                 onClick={() => onDeleteTodo(todo.id)}
//                 size={15}
//                 color="red"
//                 style={{ cursor: "pointer" }}
//                 className="mx-2"
//               />
//               <Button
//                 // className="ms-2"
//                 size="sm"
//                 variant="info"
//                 onClick={() => {
//                   setSelectedTodo(todo);
//                   handleShow();
//                 }}
//               >
//                 Update Todo
//               </Button>
//             </div>
//           );
//         })
//       ) : (
//         <h3>You don't have any todos!</h3>
//       )}
//       {/* {todos.map((todo) => {
//         return (
//           <div key={todo.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={todo.complete}
//                 onChange={() => onTodoToggle(todo)}
//               />
//               {todo.title}
//             </label>
//             <FaRegTrashCan
//               onClick={() => onDeleteTodo(todo.id)}
//               size={15}
//               color="red"
//               style={{ cursor: "pointer" }}
//             />
//           </div>
//         );
//       })} */}
//       {show && selectedTodo && (
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Update Todo</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <input
//               type="text"
//               value={selectedTodo.title}
//               onChange={(e) =>
//                 setSelectedTodo({ ...selectedTodo, title: e.target.value })
//               }
//               placeholder="Enter your todo title!"
//             />
//           </Modal.Body>
//           <Modal.Footer>
//             {/* <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button> */}
//             <Button variant="primary" onClick={onTodoUpdate}>
//               Save
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// }

import { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegTrashCan, FaRegSquarePlus } from "react-icons/fa6";
import { TodoList } from "./TodoList";

const initialTodos = [
  // { id: 1, title: "Todo 1", complete: false },
  // { id: 2, title: "Todo 2", complete: false },
];

// Reducer function
function todosReducer(state, action) {
  console.log("state: ", state);
  console.log("action: ", action);
  console.log("action type: ", action.type);

  switch (action.type) {
    case "ADD_TODO":
      return [
        // {
        //   id: 1,
        //   title: "Todo 1",
        //   complete: false,
        // },
        // {
        //   id: 2,
        //   title: "Todo 2",
        //   complete: false,
        // },
        ...state,
        { id: state.length + 1, title: action.payload.trim(), complete: false },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) => {
        console.log(todo, "todo");

        return todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo;
      });

    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "DELETE_ALL_TODOS":
      return [];

    default:
      return state;
  }
}

export function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  // const reducer  = useReducer(todosReducer, initialTodos);
  const [todo, setTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [show, setShow] = useState(false);
  console.log(todos, "todos");
  // console.log(reducer[0], "reducer");
  // console.log(reducer[1](), "reducer");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onTodoAdd(event) {
    event.preventDefault();
    // if (!todo.trim()) return;
    // if (todo === "") {
    //   alert("Please enter your todo title first!");
    // } else {
    //   dispatch({ type: "ADD_TODO", payload: todo });
    //   setTodo("");
    // }
    if (todo === "") {
      return alert("Please enter your todo title first!");
    }
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function onTodoToggle(todoId) {
    dispatch({ type: "TOGGLE_TODO", payload: todoId });
  }

  function onTodoUpdate() {
    if (!selectedTodo?.title.trim()) return;
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: selectedTodo.id, title: selectedTodo.title },
    });
    handleClose();
  }

  function onDeleteTodo(todoId) {
    const areYouSure = confirm(
      `Are you sure you want to delete todo with id ${todoId}? You can't undo this action.`
    );
    if (areYouSure) {
      dispatch({ type: "DELETE_TODO", payload: todoId });
    }
  }

  const deleteAllTodos = () => {
    const areYouSure = confirm(
      `Are you sure you want to delete all todos? You can't undo this action.`
    );
    if (areYouSure) {
      dispatch({ type: "DELETE_ALL_TODOS" });
    }
  };

  const openUpdateModal = (todo) => {
    setSelectedTodo(todo);
    handleShow();
  };
  const transformedTodos = todos || [];

  return (
    <>
      <form onSubmit={onTodoAdd}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo title!"
        
        />
        <Button
          type="submit"
          // disabled={todo === "" ? true : false}
          // disabled={todo === ""}
          // disabled={!todo}
          variant="primary"
          className="mx-6"
        >
          Add Todo <FaRegSquarePlus />
        </Button>
        <Button
          type="button"
          variant="danger"
          disabled={transformedTodos.length === 0}
          onClick={deleteAllTodos}
        >
          Delete All Todos <FaRegSquarePlus />
        </Button>
        {/* {transformedTodos.length > 0 && (
          <Button type="button" variant="danger" onClick={deleteAllTodos}>
            Delete All Todos <FaRegSquarePlus />
          </Button>
        )} */}
      </form>
      <TodoList
        todos={transformedTodos}
        deleteTodo={onDeleteTodo}
        toggleTodo={onTodoToggle}
        updateTodo={openUpdateModal}
        // handleShow={handleShow}
        // setSelectedTodo={setSelectedTodo}
      />
      {/* {transformedTodos.length > 0 ? (
        transformedTodos.map((todo) => (
          <div key={todo.id} className="my-3">
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => onTodoToggle(todo.id)}
              />
              {todo.complete ? (
                <del>{todo.title}</del>
              ) : (
                <span>{todo.title}</span>
              )}
            </label>
            <FaRegTrashCan
              onClick={() => onDeleteTodo(todo.id)}
              size={15}
              color="red"
              style={{ cursor: "pointer" }}
              className="mx-2"
            />
            <Button
              size="sm"
              variant="info"
              onClick={() => {
                setSelectedTodo(todo);
                handleShow();
              }}
            >
              Update Todo
            </Button>
          </div>
        ))
      ) : (
        <h3>You don't have any todos!</h3>
      )} */}

      {show && selectedTodo && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              value={selectedTodo.title}
              onChange={(e) =>
                setSelectedTodo({ ...selectedTodo, title: e.target.value })
              }
              placeholder="Enter your todo title!"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onTodoUpdate}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
