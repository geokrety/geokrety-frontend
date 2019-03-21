import Controller from '@ember/controller';
import { computed } from '@ember/object';
import _moment from 'ember-moment/computeds/moment';
import fromNow from 'ember-moment/computeds/from-now';

export default Controller.extend({
  btnNowToggled: false,
  btnTodayToggled: false,
  btnYesterdayToggled: false,
  btnTwoDaysAgoToggled: false,
  btnManualToggled: false,

  geokretBirthDate: computed(function() {
    var birth = new Date();
    birth.setDate(birth.getDate()-4);
    return birth;
  }),
  today: computed(function() {
    var today = new Date();
    today.setDate(today.getDate()+1);
    return today;
  }),
  now: null,

  actions: {
    toggleReset() {
      this.set('btnNowToggled', false);
      this.set('btnTodayToggled', false);
      this.set('btnYesterdayToggled', false);
      this.set('btnTwoDaysAgoToggled', false);
      // this.set('btnManualToggled', false);
    },
    toggle(button) {
      console.log(this.isMobile);
      this.send('toggleReset');
      this.toggleProperty(button);
    },
  }
});
