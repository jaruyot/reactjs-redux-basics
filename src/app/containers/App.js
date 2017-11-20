import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName } from "../actions/userActions";
import { addRoom } from "../actions/roomActions";

class App extends React.Component {

    roomListChanged = false;

    componentWillReceiveProps(nextProps) {
        this.roomListChanged = this.props.rooms.roomList !== nextProps.rooms.roomList;
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.props.setName} addRoom={this.props.addRoom}/>
                <User username={this.props.user.name} rooms={this.props.rooms}/>
                { this.roomListChanged && 'room list was changed!' }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      rooms: state.rooms
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        addRoom: (roomName) => {
            dispatch(addRoom(roomName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
