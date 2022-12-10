import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BooksIndexRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('book', { include: 'author' });
  }
}
