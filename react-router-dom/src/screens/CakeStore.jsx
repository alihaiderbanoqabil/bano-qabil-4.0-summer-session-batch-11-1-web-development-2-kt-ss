import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "../store/features/cakeSlice";
import { CakeStoreShowCase } from "../components/CakeStoreShowCase";

const CakeStore = () => {
  const [numberOfOrder, setNumberOfOrder] = useState(0);
  const [numberOfRestock, setNumberOfRestock] = useState(0);
  const dispatch = useDispatch();
  //   const cake = useSelector((state) => state.cake);
  //   const user = useSelector((state) => state.user);
  //   const state = useSelector((state) => state.user);
  //   console.log(state, 'state from global store');
  //   console.log(user, "user from global store");
  //   console.log(cake, "cake from global store");
  //   console.log(state.cake, 'cake from global store');
  //     console.log(state.user, 'cake from global store');

  return (
    <div>
      <CakeStoreShowCase />
      <div>
        {/* <button onClick={() => cakeActions.order1Cake()}>Order 1 Cake</button> */}
        <button onClick={() => dispatch(cakeActions.order1Cake())}>
          Order 1 Cake
        </button>
        <input
          type="number"
          value={numberOfOrder}
          onChange={(e) => setNumberOfOrder(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(cakeActions.orderNCake(Number(numberOfOrder)))
          }
        >
          Order {numberOfOrder} Cake
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(cakeActions.restock1Cake())}>
          Restock 1 Cake
        </button>
        <input
          type="number"
          value={numberOfRestock}
          onChange={(e) => setNumberOfRestock(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(cakeActions.restockNCake(Number(numberOfRestock)))
          }
        >
          Restock {numberOfRestock} Cake
        </button>
      </div>
    </div>
  );
};

export default CakeStore;
