// Higher Order Component (HOC) - A component (HOC) that renders another component (regular)
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// Regular Component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// HOC Component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && (<p>This is private info. Please don't share!</p>)}
            <WrappedComponent {...props} />
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);

const requiereAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?
                (<WrappedComponent {...props} />)
                :
                (<p>Please login to view the info!</p>)
            }
        </div>
    );
}
const AuthInfo = requiereAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'))