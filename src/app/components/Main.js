import React from "react";

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    User name: <input type="text" onChange={event => {
                        props.changeUsername(event.target.value); }}/>
                </div>
            </div>
        </div>
    );
};