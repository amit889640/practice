import React from 'react'

export default function BookList({ bookList }) {
    // const bookList = bookList;
    return (
        <>
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
