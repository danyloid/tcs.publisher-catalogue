import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  authorId() {
    return null;
  },
  title() {
    return faker.music.songName();
  },
  cover() {
    return `${faker.image.abstract(200, 320)}?q=${faker.random.numeric(6)}`;
  },
  published() {
    return faker.date.birthdate();
  },
  synopsis() {
    return faker.lorem.sentences(2);
  },
});
