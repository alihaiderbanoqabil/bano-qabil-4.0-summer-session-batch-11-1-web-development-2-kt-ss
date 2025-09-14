import { useSelector } from "react-redux";

export const CakeStoreShowCase = () => {
  const { cake } = useSelector((state) => state);
//   const state = useSelector((state) => state);
//   console.log(state, "state");

  return (
    <>
      <h1>Cake Store</h1>
      <p>There are {cake.numOfCakes || 0} cakes present in store right now</p>
    </>
  );
};
