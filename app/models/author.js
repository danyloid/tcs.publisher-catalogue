import Model, { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') name;
  @attr('string') lastName;
  @attr('string') picture;
  @attr('date') birthdate;
  @attr('string') country;
  @attr('string') about;

  @hasMany('book') books;

  get fullName() {
    return [this.name, this.lastName].join(' ');
  }
}
