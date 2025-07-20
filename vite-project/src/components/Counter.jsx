import { useState } from "react";
// array destructuring

// const arr = [1, 2, 3, 74, 5];
// const array = ["ali", 26, true, 10, 20, 30];
// const [name, age, isMale, ...remainingElements] = array;
// // console.log(array[0]);
// // console.log(array[1]);
// // console.log(array[2]);
// console.log(name);
// console.log(age);
// console.log(isMale);
// console.log(remainingElements, "remainingElements");
// const add = () => {
//   const [count, setCount] = useState(0);
// };

// add();


export const Counter = () => {
  //   const count = useState("ali");
  const [count, setCount] = useState(0);
  //   const [name, setName] = useState('');
  console.log(count, "count");
  // count[1]()
  const increment = () => {
    // setCount(count + 1);
    setCount((previousCount) => previousCount + 1);
    console.log(count, "increment");
  };

  const decrement = () => {
    // setCount(count - 1);
    // OR
    setCount((prevCount) => {
      console.log(prevCount, "prevCount");
      //   if (prevCount === 0) {
      //     return 0; // Prevent going below zero
      //   }
      return prevCount - 1;

      //   if (prevCount === 0) {
      //     return 0; // Prevent going below zero
      //   } else {
      //     return prevCount - 1;
      //   }
    });
    console.log(count, "decrement");
  };

  console.log("Counter component is rendering", count);

  return (
    <div>
      <button tabIndex={0} onClick={() => increment()}>
        +
      </button>
      {/* <button
        tabIndex={0}
        onClick={function () {
          increment();
        }}
      >
        +
      </button> */}
      {/* <button tabIndex={0} onClick={increment}>
        +
      </button> */}
      <span>{count}</span>
      <button disabled={count === 0} onClick={decrement}>
        -
      </button>
      {/* <button tab-index="0" onclick="decrement()" >-</button> */}
    </div>
  );
};
// export const Counter = () => {
//     let count = 0;
//     const increment = () => {
//         // count += 1;
//         // OR
//         count = count + 1;
//         console.log(count, 'increment');
//     }
//     const decrement = () => {
//         // count -= 1;
//         // OR
//         count = count - 1;
//         console.log(count, 'decrement');
//     }

// console.log('Counter component is rendering', count);

//     return (
//             <div>
//                 <button  tabIndex={0} onClick={increment}>+</button>
//                 <span>{count}</span>
//                 <button  onClick={decrement} >-</button>
//                 {/* <button tab-index="0" onclick="decrement()" >-</button> */}
//             </div>

//     )
// }
// export const Counter = () => {

//     return (
//         <>
//             <div>Counter</div>
//             <div>Counter</div>
//         </>
//     )
// }
// import { Fragment } from 'react';

// export const Counter = () => {
//     return (
//         <Fragment>
//             <div>Counter</div>
//             <div>Counter</div>
//         </Fragment>
//     )
// }
// import React from 'react';

// export const Counter = () => {
//     return (
//         <React.Fragment>
//             <div>Counter</div>
//             <div>Counter</div>
//         </React.Fragment>
//     )
// }

// export const Counter = () => {
//     return (
//         <div>
//             <div>Counter</div>
//             <div>Counter</div>
//         </div>
//     )
// }
