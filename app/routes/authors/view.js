import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthorsViewRoute extends Route {
  @service store;
  @service router;

  model(params) {
    const authorId = params.id;
    return this.store.findRecord('author', authorId, {
      include: 'books',
    });
  }

  @action
  error(error) {
    console.log(error);
    this.router.replaceWith('not-found');
    return true;
  }
}
