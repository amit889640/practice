import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import InsertTodo from './InsertTodo';

function TodoList() {
    const dispatch = useDispatch();
    const todoStore = useSelector((store) => store);
    const handleInsertTask = (task) => {
        dispatch({ type: 'add', task: task });
    }

    return (
        <>
            <InsertTodo handleInsertTask={handleInsertTask} />
            {todoStore?.todo.map((l, i) => {

                return (
                    <div style={{ display: 'flex', margin: '10px' }}>
                        <div style={{ margin: '10px' }}>
                            {i + 1}
                        </div>
                        <div style={{ margin: '10px' }}>
                            {l.task}
                        </div>
                        <div style={{ margin: '10px' }}>
                            {l.status ? 'Complete' : 'Incomplete'}
                        </div>
                        <div style={{ margin: '10px' }}>
                            {l.status ?
                                <button type="button" onClick={() => dispatch({ type: 'toggle', position: i })}>Mark as Incomplete</button> :
                                <button type="button" onClick={() => dispatch({ type: 'toggle', position: i })}>Mark as Complete</button>}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default TodoList