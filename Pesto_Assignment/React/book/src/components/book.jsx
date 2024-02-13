import React, { useEffect, useState } from 'react';
import BookList from './bookList';
import BookRegister from './bookRegister';

export default function Book(props) {

    const [bookList, setBookList] = useState(
        [
            { title: 'Book 1', author: 'Author 1', year: 2020 },
            { title: 'Book 2', author: 'Author 2', year: 2018 },
        ])


    const handleAddBook = (bookDetail) => {
        setBookList([...bookList, bookDetail])
    }

    const handleDeleteBook = (index) => {
        bookList.splice(index, 1);
        setBookList([...bookList])
    }

    // useEffect(() => {
    //     console.log(bookList);
    // }, [bookList])

    return (
        <>
            <BookRegister handleAddBook={handleAddBook}></BookRegister>
            <BookList handleDeleteBook={handleDeleteBook} bookList={bookList}></BookList>
        </>
    )
}