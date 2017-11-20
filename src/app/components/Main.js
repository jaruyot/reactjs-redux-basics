import React from "react";

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.onRoomNameChange = this.onRoomNameChange.bind(this);

        this.state = {
            roomName: ''
        };  
    }

    onRoomNameChange(event) {
        this.setState({
            roomName: event.target.value
        });
    }

    render() {
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
                            this.props.changeUsername(event.target.value); }}/>
                    </div>
                    <div className="col-xs-12">
                        Room name: <input type="text" value={ this.state.roomName } onChange={this.onRoomNameChange}/>
                        <button onClick={event => { this.props.addRoom(this.state.roomName)}}>Add Room</button>
                    </div>
                </div>
            </div>
        );
    };
}