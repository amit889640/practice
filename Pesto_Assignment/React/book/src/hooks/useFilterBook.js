export function useFilterBooks() {

    function filterBook(books, query) {
        return books.filter(b => b.title === query)
    }
    return [filterBook];
}
