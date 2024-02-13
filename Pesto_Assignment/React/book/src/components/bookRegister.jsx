import React, { memo, useState } from 'react'

export default memo(function BookRegister({ handleAddBook }) {
    const [detail, setDetail] = useState({});
    const handleSubmit = () => {
        handleAddBook(detail);
    }
    return (
        <>
            <div>
                <label htmlFor="book_name">Book Name</label>
                <input type="text" onChange={(e) => setDetail({ ...detail, title: e.target.value })} value={detail.title} name="book_name" id="book_name" />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" onChange={(e) => setDetail({ ...detail, author: e.target.value })} value={detail.author} name="author" id="author" />
            </div>
            <div>
                <label htmlFor="year">Book publish year</label>
                <input type="text" onChange={(e) => setDetail({ ...detail, year: e.target.value })} value={detail.year} name="year" id="year" />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
})
