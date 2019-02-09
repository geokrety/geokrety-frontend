import {
  Factory, faker
} from 'ember-cli-mirage';

export default Factory.extend({
  comment() {
    return faker.lorem.sentence();
  },
  type() {
    return faker.random.number({
      'min': 0,
      'max': 1
    });
  },
});
