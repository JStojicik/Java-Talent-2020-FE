import React from 'react';

function SayHello(props) {
    // Return JSX that uses the firstName and lastName values from the props argument
    // to render "Hello {props.firstName} {props.lastName}" in a div
return <div>Hello my name is {props.firstName} {props.lastName}</div>;
}

// export an example that specifies a firstName and a lastName
// as props to the SayHello component
export const Example = () => 
    <SayHello firstName="Jovica" lastName="Stojicik"/>;
