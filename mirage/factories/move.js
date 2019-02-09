import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  waypoint: 'ABC123',
  latitude() {
    return faker.address.latitude();
  },
  longitude() {
    return faker.address.longitude();
  },
  comment() {
    return faker.lorem.paragraphs();
  },
  application: "www",
  applicationVersion: "2.0.0",
  altitude: 0,
  country: "fr",
  distance: 0,
  commentsCount: 0,
  picturesCount: 0,
  createdOnDatetime() {
    return faker.date.past();
  },
  movedOnDatetime() {
    return faker.date.recent();
  },
  updatedOnDatetime() {
    return faker.date.recent();
  },
});
