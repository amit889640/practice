import React, { useState } from 'react'

function InsertTodo({ handleInsertTask }) {
    const [task, setTask] = useState('')
    return (
        <>
            <div style={{ display: 'flex' }}>
                <input type="text" value={task} placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
                <button onClick={() => { handleInsertTask(task); setTask('') }} >Add</button>
            </div>
        </>
    )
}

export default InsertTodo