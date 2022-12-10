import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { ensureDate } from '../../utils/date';

export default class AuthorsNewController extends Controller {
  @service router;
  @service store;

  @action
  async saveChanges(model) {
    const match = await this.store.createRecord('author', {
      name: model.name,
      lastName: model.lastName,
      picture: model.picture,
      birthdate: ensureDate(model.birthdate),
      country: model.country,
      about: model.about,
    });

    await match.save();
    this.router.transitionTo('authors.index');
  }
}
