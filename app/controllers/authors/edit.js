import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { ensureDate } from '../../utils/date';

export default class AuthorsEditController extends Controller {
  @service store;
  @service router;

  @action
  async saveChanges(model) {
    const { id } = model;
    const match = await this.store.find('author', id);

    match.name = model.name;
    match.lastName = model.lastName;
    match.picture = model.picture;
    match.birthdate = ensureDate(model.birthdate);
    match.about = model.about;

    await match.save();

    this.router.transitionTo('authors.index');
  }
}
