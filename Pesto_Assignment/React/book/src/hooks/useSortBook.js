export function useSortBook() {
    // books, sort = 'des'
    function sortBook(books, sort) {
        books.sort((a, b) => {
            if (sort === 'asc') return a.title > b.title ? 1 : -1;
            if (sort === 'des') return a.title > b.title ? -1 : 1;
        })
        return books;
    }
    return [sortBook]
}

