import React, { useEffect, useState, useContext } from 'react';
import BookList from './bookList';
import BookRegister from './bookRegister';
import { apiBook } from '../utils/bookDataLoader';
import { useFilterBooks } from '../hooks/useFilterBook';
import BookFilter from './bookFilter';

export default function Book(props) {

    const [bookList, setBookList] = useState([]);
    const [filterBookList, setFilterBookList] = useState([]);
    const [filterBook] = useFilterBooks();

    const handleAddBook = (bookDetail) => {
        console.log("add book");
        setBookList([...bookList, bookDetail])
        setFilterBookList([...filterBookList, bookDetail])
    }

    const handleDeleteBook = (index) => {
        console.log("delete book");
        filterBookList.splice(index, 1);
        setBookList([...filterBookList])
    }
    const getBooks = async () => {
        const book = await apiBook();
        setFilterBookList([...book])
        setBookList([...book])
    }

    const getBookByName = (name) => {
        console.log('get book by name');
        let book;
        if (name) {
            book = filterBook(filterBookList, name);
        } else {
            book = bookList;
        }
        setFilterBookList([...book])
    }

    useEffect(() => {
        getBooks();
    }, [])

    useEffect(() => {
    }, [filterBookList])

    return (
        <>
            <BookRegister handleAddBook={handleAddBook}></BookRegister>
            <BookFilter getBookByName={getBookByName}></BookFilter>
            <BookList handleDeleteBook={handleDeleteBook} bookList={filterBookList}></BookList>
        </>
    )
}