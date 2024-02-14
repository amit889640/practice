const apiBook = () => {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
    ]
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(books)
        }, 2000);
    })
}

export { apiBook };