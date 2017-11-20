const roomList = (state = { roomList: [] }, action) => {
    switch (action.type) {
        case "ADD_ROOM":
            const rooms = state.roomList;
            rooms.push(action.payload);
            state = {
                 ...state,
                 roomList: rooms
            };
            break;
    }
    return state;
};

export default roomList;