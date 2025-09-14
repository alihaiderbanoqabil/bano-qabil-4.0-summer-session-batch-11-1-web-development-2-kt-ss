import axios from "axios";
import { fetchUsers } from "../store/features/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// export async function getUsersByFetch() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users",
//       {
//         headers: {},
//         method: "GET",
//         body: JSON.stringify({}),
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     const users = await response.json();
//     return users;
//   } catch (error) {
//     console.log("Error fetching users:", error);
//     return [];
//   }
// }

// const fetchUsers = await getUsersByFetch();
// console.log(fetchUsers, "fetchUsers");
export async function getUsersByAxios() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        headers: {},
        method: "GET",
        data: JSON.stringify({}),
      }
    );
    return response.data; // Axios already parses JSON
  } catch (error) {
    console.log("Error fetching users:", error);
    return [];
  }
}

// const axiosUsers = await getUsersByAxios();
// console.log(axiosUsers, "axiosUsers");

 const Axios = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  return (
    <div>
      Axios
      {/* <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button> */}
    </div>
  );
};


export default Axios;