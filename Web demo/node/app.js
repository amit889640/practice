const axios = require('axios')
async function fetchData() {
    let obj = {};
    const fetchTodo = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(Object.keys(fetchTodo));
    // console.log(fetchTodo.slice(0, 5));

    for (const todo of fetchTodo.data) {
        if (obj[todo.userId]) {
            if (todo.completed) {
                obj[todo.userId]["completed"].push(todo.id)
            } else {
                obj[todo.userId]["inCompleted"].push(todo.id)
            }
        } else {
            obj[todo.userId] = { completed: [], inCompleted: [] }
        }
    }
    console.log(obj);
}

fetchData()
