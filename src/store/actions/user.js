import { UPDATE_NAME } from "./types"

export function updateName(newName) {
    return {
        type: UPDATE_NAME,
        payload: newName
    }
}