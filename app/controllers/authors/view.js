import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthorsViewController extends Controller {
  @service router;

  @action
  async delete() {
    const current = this.model;
    await current.destroyRecord();
    this.router.transitionTo('authors.index');
  }
}
