import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthorsNewRoute extends Route {
  @service store;

  model() {
    return {};
  }
}
