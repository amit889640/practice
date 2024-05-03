import { combineReducers } from "redux";



const initialTodos = [
    { task: 'This is 1 task', status: false },
    { task: 'This is 2 task', status: false },
    { task: 'This is 3 task', status: true }
];

let todoReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case 'toggle': {
            return state.map((t, p) => {
                if (p == action.position) {
                    return { ...t, status: !t.status };
                }
                return { ...t };
            })
        }
        case 'add': {
            // return state.push({ task: action.task, status: false })
            state = [...state, { task: action.task, status: false }]
        }
        default: {
            return state;
        }
    }
}

export const combineReducer = combineReducers({
    todo: todoReducer,
})