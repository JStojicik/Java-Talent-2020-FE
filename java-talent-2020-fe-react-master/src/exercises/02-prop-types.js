// Learn more about React PropTypes here: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
import propTypes from 'prop-types'
import React from 'react';


SayHello.propTypes={
    firstName: propTypes.string.isRequired,
    lastName: propTypes.string.isRequired
}
function SayHello(props) {
    return (
        <div>
            Hello {props.firstName} {props.lastName}!
        </div>
    );
}

// Specify firstName and lastName PropTypes for the SayHello
// component by giving SayHello a `propTypes` object property
// They should both be strings and be required.
// Tips:
// - SayHello.propTypes = {}
//
// Then check out the error you get in the console when this example is rendered
// Then fix this example and see the error removed
export const Example = () => <SayHello firstName='Jovica' lastName='Stojicik' />;
