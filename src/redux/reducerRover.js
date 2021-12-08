// import { FORWARD_ROVER, RIGHT_DIRECTION, LEFT_DIRECTION } from './constants'
// import { v4 as uuiv4 } from 'uuid'

// const initialState = {
//     taille : 0,
//     direction : "N",
//     X : 0,
//     Y : 0
// }

// const helperAdddata = action => {
//     return {
//         taille : action.payload.taille,
//         direction: action.payload.direction,
//         X: action.payload.X,
//         Y: action.payload.Y

//     }
// }

// // reducer
// const reducerRover = ( state = initialState, action ) => {

//     if (localStorage.getItem('RoverPosition')) {
//         state = localStorage.getItem('RoverPosition')
//     }

//     switch (action.type) {
//         case FORWARD_ROVER:
//             if (
//                 state.direction === "N" &&
//                 state.taille !== 0 &&
//                 state.taille !== 1 &&
//                 state.taille !== 2 &&
//                 state.taille !== 3 &&
//                 state.taille !== 4 &&
//                 state.taille !== 5 &&
//                 state.taille !== 6 &&
//                 state.taille !== 7 &&
//                 state.taille !== 8 &&
//                 state.taille !== 9
//               ) {
//                 settaille((taille) => taille - 10);
//                 setX(taille % 10);
//                 setY(parseInt(taille / 10 - 1));
//               } else if (
//                 state.direction === "W" &&
//                 state.taille !== 0 &&
//                 state.taille !== 10 &&
//                 state.taille !== 20 &&
//                 state.taille !== 30 &&
//                 state.taille !== 40 &&
//                 state.taille !== 50 &&
//                 state.taille !== 60 &&
//                 state.taille !== 70 &&
//                 state.taille !== 80 &&
//                 state.taille !== 90
//               ) {
//                 settaille((taille) => taille - 1);
//                 setX((taille % 10) - 1);
//                 setY(parseInt(taille / 10));
//               } else if (
//                 state.direction === "S" &&
//                 state.taille !== 90 &&
//                 state.taille !== 91 &&
//                 state.taille !== 92 &&
//                 state.taille !== 93 &&
//                 state.taille !== 94 &&
//                 state.taille !== 95 &&
//                 state.taille !== 96 &&
//                 state.taille !== 97 &&
//                 state.taille !== 98 &&
//                 state.taille !== 99
//               ) {
//                 state = {...state, taille : state.taille + 10}
//                 setX(taille % 10);
//                 setY(parseInt(taille / 10 + 1));
//                 X : (state.taille % 10) + 1,
//                 Y : parseInt(taille / 10)
//               } else if (
//                 state.direction === "E" &&
//                 state.taille !== 9 &&
//                 state.taille !== 19 &&
//                 state.taille !== 29 &&
//                 state.taille !== 39 &&
//                 state.taille !== 49 &&
//                 state.taille !== 59 &&
//                 state.taille !== 69 &&
//                 state.taille !== 79 &&
//                 state.taille !== 89 &&
//                 state.taille !== 99
//               ) {
//                 state = {...state, taille : state.taille + 1,
//                                    X : (state.taille % 10) + 1,
//                                    Y : parseInt(state.taille / 10)}
//                 localStorage.setItem('RoverPosition', state)
                
               
//               }
//             };
          



            
           
//             return state;

//         case RIGHT_DIRECTION:
//             state = removeDataById(state, action.payload);
//             localStorage.setItem('booksData', JSON.stringify(state))
//             return state;

//         case LEFT_DIRECTION:    
//             state = [];
//             localStorage.setItem('booksData', JSON.stringify(state))
//             return state;
    
//         default: return state
//     }

// }

// export default reducerAddBooks