function Greeting(props) {

    console.log(props, 'props', props.name);
    const { name, age, hobbies } = props;
    return (
        <div><p>
            Hello, Good Morning, <strong>{name}</strong>, your age is <b>{age}</b>
        </p>
            {/* <ul>

            </ul> */}
            {/* {hobbies.map((item, index,) => {
                console.log(item, index);
                return <p key={item.id}>
                    <strong>{item.name}</strong>
                </p>

            })} */}
            <ul>
                {hobbies.map((item, index,) => {
                    console.log(item, index);
                    return (
                        <div>
                            <li key={item.id}>
                                <strong>{item.name}</strong>
                            </li>
                            <p></p>
                        </div>
                    )



                })}
            </ul>
            {/* {hobbies.map((item, index, array) => {
                console.log(item, index, array);

            })} */}
        </div>
    )
}

export default Greeting
// function Greeting(props) {

//     console.log(props, 'props', props.name);

//     return (
//         <div><p>
//             Hello, Good Morning, <strong>{props.name}</strong>, your age is <b>{props.age}</b>
//         </p>
//             {/* <ul>

//             </ul> */}

//         </div>
//     )
// }

// export default Greeting
// function Greeting(properties) {

//     console.log(properties, 'properties');

//     return (
//         <div>Hello, Good Morning, Ali Haider</div>
//     )
// }

// export default Greeting