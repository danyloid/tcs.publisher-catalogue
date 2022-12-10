import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { toStanardDateString } from '../utils/date';

export default class AuthorEditorComponent extends Component {
  @service store;
  @service router;

  maxDate;
  @tracked pristine;

  @tracked name;
  @tracked lastName;
  @tracked picture;
  @tracked country;
  @tracked about;

  constructor(app, args) {
    super(app, args);

    this.maxDate = new Date(2010, 1, 1);

    this.pristine = true;

    const { author } = args;

    this.name = author.name;
    this.lastName = author.lastName;
    this.picture = author.picture;
    this.country = author.country;
    this.about = author.about;
  }

  get isNew() {
    return !this.args.author.id;
  }

  get birthdate() {
    const { birthdate } = this.args.author;
    return birthdate ? toStanardDateString(birthdate) : null;
  }

  set birthdate(value) {
    this.args.author.birthdate = new Date(value);
  }

  get valid() {
    const { name, lastName, picture, birthdate, country, about } = this;
    return name && lastName && picture && birthdate && country && about;
  }

  @action
  async saveChanges() {
    const author = this.args.author;

    author.name = this.name;
    author.lastName = this.lastName;
    author.picture = this.picture;
    author.birthdate = this.birthdate;
    author.country = this.country;
    author.about = this.about;

    this.args.onSubmit();
  }

  setDirty = () => {
    this.pristine = false;
  };
}
