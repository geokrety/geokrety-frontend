import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.internet.userName();
  },
  trackingCode() {
    return faker.random.word().toUpperCase();
  },
  description() {
    return faker.lorem.text();
  },
  missing: false,
  distance: 0,
  cachesCount: 0,
  picturesCount: 0,
  averageRating: 0,
  createdOnDatetime() {
    return faker.date.past();
  },
  updatedOnDatetime() {
    return faker.date.recent();
  },
});
