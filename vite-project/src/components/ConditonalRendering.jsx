import { useUserContext } from "../context/UserContext";

export const ConditonalRendering = () => {
  const { user, login, logout, updateUser } = useUserContext();

  return (
    <>
      <div>ConditonalRendering</div>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
      <button onClick={() => login({ email: "aligmail.com" })}>Login</button>
      {/* <button onClick={()=>logout()}>Logout</button> */}
      <button onClick={logout}>Logout</button>
      <button onClick={() => updateUser({ isLoggedIn: true })}>Update User</button>
    </>
  );
};
