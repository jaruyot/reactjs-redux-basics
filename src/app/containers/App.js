import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName } from "../actions/userActions";
import { addRoom } from "../actions/roomActions";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.props.setName} addRoom={this.props.addRoom}/>
                <User username={this.props.user.name} rooms={this.props.rooms}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      rooms: state.rooms.roomList
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
