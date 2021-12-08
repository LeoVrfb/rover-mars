import { FORWARD_ROVER, RIGHT_DIRECTION, LEFT_DIRECTION } from './constants'


export const forward = data => {
    return {
        type: FORWARD_ROVER,
        payload: data /* Object */
}
}


export const turnRight = id => {
    return {
        type: RIGHT_DIRECTION,
        payload: id
}
}

export const TurnLeft = () => {
    return {
        type: LEFT_DIRECTION,
        payload: id
}
}