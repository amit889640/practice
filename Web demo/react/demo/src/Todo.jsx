import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Todo() {
    let todos = useSelector((state) => state);
    console.log('datas');
    console.log(todos);
    return (
        <div>Todo</div>
    )
}

// db.getCollection().updateOne({id:1},{$set:{}})