export default function () {
  this.namespace = '/api/v1';

  this.get('/authors');
  this.get('/authors/:id');
  this.post('/authors');
  this.patch('/authors/:id');
  this.delete('/authors/:id', function (schema, request) {
    const authorId = request.params.id;

    schema.db.books.remove({ authorId: authorId });
    const b = schema.books.where({ authorId: authorId });
    console.log(b);

    schema.db.authors.remove(authorId);
  });

  this.get('/books');
  this.get('/books/:id');
  this.post('/books');
  this.patch('/books/:id');
  this.delete('/books/:id');
}
