function Greeting(props) {

    console.log(props, 'props');
    const { name, age, hobbies, hoby, html, component } = props;
    return (
        <div>
            {component}
            {html}
            <pre>{JSON.stringify(hoby, undefined, 4)}</pre>
            {/* <pre>{hoby}</pre> */}
            <p>
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
                        <>
                            <li key={item.id}>
                                <strong>{item.name}</strong>
                            </li>
                            <p></p>
                        </>

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