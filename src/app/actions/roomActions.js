export function addRoom(roomName) {
    return {
        type: "ADD_ROOM",
        payload: roomName
    };
}
