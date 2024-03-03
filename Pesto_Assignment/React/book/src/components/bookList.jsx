import React, { memo, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../App'
import { useSortBook } from '../hooks/useSortBook';


export default memo(function BookList({ bookList, handleDeleteBook }) {
    // stuck here in sorting button not working
    console.log(bookList);
    const [bookListItem, setBookListItem] = useState(bookList)
    const Theme = useContext(ThemeContext);
    const [sortBook] = useSortBook();
    const handleDelete = (i) => {
        handleDeleteBook(i)
    }

    const handleSort = (order) => {
        const books = sortBook(bookListItem, order);
        console.log(books);
        setBookListItem(books)
    }

    useEffect(() => {
        console.log('e1');
        setBookListItem(bookList)
    }, [bookList]);

    useEffect(() => {
        console.log('e2');
        setBookListItem(bookListItem)
    }, [bookListItem])

    return (
        <>
            <h1>Theme:{JSON.stringify(Theme)}</h1>
            <button onClick={() => handleSort('asc')}>Sort Asc</button>
            <button onClick={() => handleSort('des')}>Sort Dsc</button>
            {bookListItem.map((book, i) =>
                <div key={i}>
                    <h3>Book Name : {book.title}</h3>
                    <p>Author : {book.author}</p>
                    <p>Year : {book.year}</p>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
            )}
        </>
    )
})
