import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.internet.userName();
  },
  email() {
    return faker.internet.email();
  },
  language() {
    return faker.address.countryCode();
  },
  country() {
    return faker.address.country();
  },
  latitude() {
    return faker.address.latitude();
  },
  longitude() {
    return faker.address.longitude();
  },
  dailyMails: false,
  observationRadius: 0,
  hour: 0,
  statpicUrl: "https://cdn.geokrety.org/images/statpics/26422.png",
  avatarUrl() {
    return faker.image.avatar();
  },
  secid() {
    return faker.random.alphaNumeric();
  },
  joinedOnDatetime() {
    return faker.date.past();
  },
  lastUpdateDatetime() {
    return faker.date.recent();
  },
  lastMailDatetime() {
    return faker.date.recent();
  },
  lastLoginDatetime() {
    return faker.date.recent();
  },
});
