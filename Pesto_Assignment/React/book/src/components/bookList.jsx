import React, { useEffect } from 'react'
import BookDetail from './bookDetail'

export default function BookList({ bookList, handleDeleteBook }) {
    const handleDelete = (i) => {
        console.log(i);
        handleDeleteBook(i)
    }

    // useEffect(() => {
    //     console.log('useEffect list');
    //     console.log(bookList);
    // }, [bookList, handleDelete])


    return (
        <>
            {/* <BookDetail></BookDetail> */}
            {bookList.map((book, i) =>
                <div key={i}>
                    <h3>Book Name : {book.title}</h3>
                    <p>Author : {book.author}</p>
                    <p>Year : {book.year}</p>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
            )}
        </>
    )
}
