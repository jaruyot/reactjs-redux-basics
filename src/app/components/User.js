import React from "react";

export const User = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {props.username}</p>
                </div>
                <div className="col-xs-12">
                    <p>Room List:</p>
                    <ul>
                        {
                            props.rooms.map((r, index) => (<li key={index}>{r}</li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
