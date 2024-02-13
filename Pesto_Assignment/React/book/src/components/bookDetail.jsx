import React from 'react'

export default function BookDetail(bookDetail) {
    return (
        <div style={{ 'border': '1px solid black' }}>
            <h3>Book Name : {bookDetail.title}</h3>
            <p>Author : {bookDetail.author}</p>
            <p>Year : {bookDetail.year}</p>
        </div>
    )
}
