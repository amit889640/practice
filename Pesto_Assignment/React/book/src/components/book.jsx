import React, { useEffect, useState } from 'react';
import BookList from './bookList';
import BookRegister from './bookRegister';

export default function Book(props) {

    const [bookList, setBookList] = useState(
        [
            { title: 'Book 1', author: 'Author 1', year: 2020 },
            { title: 'Book 2', author: 'Author 2', year: 2018 },
            { title: 'Book 3', author: 'Author 3', year: 2022 },
            { title: 'Book 4', author: 'Author 4', year: 2022 },
            { title: 'Book 5', author: 'Author 5', year: 2022 },
            { title: 'Book 6', author: 'Author 6', year: 2022 },
        ])


    const handleAddBook = (bookDetail) => {
        setBookList([...bookList, bookDetail])
    }

    // useEffect(() => {
    //     console.log(bookList);
    // }, [bookList])

    return (
        <>
            <BookRegister handleAddBook={handleAddBook}></BookRegister>
            <BookList bookList={bookList}></BookList>
        </>
    )
}