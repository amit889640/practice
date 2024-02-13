import React, { useEffect } from 'react'
import BookDetail from './bookDetail'

export default function BookList({ bookList }) {

    // useEffect(() => {
    //     console.log('useEffect list');
    //     console.log(bookList);
    // }, [bookList])
    return (
        <>
            {/* <BookDetail></BookDetail> */}
            {bookList.map((book) =>
                <div>
                    <h3>Book Name : {book.title}</h3>
                    <p>Author : {book.author}</p>
                    <p>Year : {book.year}</p>
                </div>
            )}
        </>
    )
}
