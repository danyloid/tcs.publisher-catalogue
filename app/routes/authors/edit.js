import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { toStanardDateString } from '../../utils/date';

export default class AuthorsEditRoute extends Route {
  @service store;

  model(params) {
    return this.store.find('author', params.id).then((match) => {
      const { id, name, lastName, birthdate, country, picture, about } = match;

      return {
        id,
        name,
        lastName,
        picture,
        country,
        about,
        birthdate: toStanardDateString(birthdate),
      };
    });
  }
}
