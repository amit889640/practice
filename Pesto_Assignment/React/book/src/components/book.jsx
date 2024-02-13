import react from 'react';
import BookList from './bookList';

export default function Book(props) {

    const bookList =
        [
            { title: 'Book 1', author: 'Author 1', year: 2020 },
            { title: 'Book 2', author: 'Author 2', year: 2018 },
            { title: 'Book 3', author: 'Author 3', year: 2022 },
            { title: 'Book 4', author: 'Author 4', year: 2022 },
            { title: 'Book 5', author: 'Author 5', year: 2022 },
            { title: 'Book 6', author: 'Author 6', year: 2022 },
        ]

    return (
        <>
            <BookList bookList={bookList}></BookList>
        </>
    )
}