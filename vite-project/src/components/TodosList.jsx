import { memo } from "react";

export const TodosList = memo(({ obj, todos, addTodo }) => {
  console.log("child render", todos, obj);
  return (
    <>
      <h2>My Todos</h2>
      <button onClick={() => addTodo()}>Add Todo</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
});

// const TodosList =({ todos }) => {
//   console.log("child render", todos);
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//     </>
//   );
// }

// export default memo(TodoList)
