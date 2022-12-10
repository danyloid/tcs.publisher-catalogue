export default function (server) {
  server.createList('author', 10).forEach((author) => {
    const booksCount = 1 + Math.floor(Math.random() * 6);
    server.createList('book', booksCount, {
      author,
    });
  });
}
