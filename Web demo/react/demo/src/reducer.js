export const reducer = (state = ['task 1'], action) => {
    switch (action.type) {
        case 'add':
            return state.push(action.todo)
        case 'remove':
            return state.remove()
    }
}