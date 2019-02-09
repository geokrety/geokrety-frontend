import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },
  content() {
    return faker.lorem.paragraphs();
  },
  username() {
    return faker.internet.userName();
  },
  commentsCount: 0,
  createdOnDatetime() {
    return faker.date.past();
  },
  lastCommentDatetime: null
});
