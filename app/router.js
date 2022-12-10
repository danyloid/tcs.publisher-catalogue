import EmberRouter from '@ember/routing/router';
import config from 'tcs-publisher-catalogue/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('welcome', { path: '/' });
  this.route('authors', function () {
    this.route('view', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('new');
  });
  this.route('books', function () {});
  this.route('not-found', { path: '/*' });
});
