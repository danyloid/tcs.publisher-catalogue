import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  sex() {
    return faker.name.sex();
  },
  name() {
    return faker.name.firstName(this.sex);
  },
  lastName() {
    return faker.name.lastName(this.sex);
  },
  picture() {
    return faker.image.avatar();
  },
  birthdate() {
    return faker.date.birthdate();
  },
  country() {
    return faker.address.country();
  },
  about() {
    return faker.lorem.paragraphs().replace('\n', '\n\n');
  },
});
