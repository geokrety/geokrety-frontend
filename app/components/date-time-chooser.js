import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  date: null,
  selectedButton: "now",
  minDate: null,
  maxDate: null,

  isManual: computed('selectedButton',function() {
    return this.get("selectedButton") == "manual";
  }),

  init() {
    this._super(...arguments);
    this.setMaxDate();
  },

  setMaxDate() {
    let newMaxDate = new Date();
    newMaxDate.setTime(newMaxDate.getTime() + 1000*5);
    this.set("maxDate", newMaxDate);
  },

  getDate(value) {
    this.set('selectedButton', value);
    var newDate = new Date();
    if (value == "yesterday") {
      newDate = this.subDays(newDate, 1);
    } else if (value == "2daysago") {
      newDate = this.subDays(newDate, 2);
    } else if (value == "manual") {
      return this.get('date');
    }
    this.set('date', newDate);
    return newDate
  },
  subDays(date, days) {
    date.setDate(date.getDate() - days);
    date.setHours("12")
    date.setMinutes("00")
    date.setSeconds("00");
    return date;
  },

  actions: {
    buttonSelect(value) {
      this.setMaxDate();
      let newDate = this.getDate(value);
      let action = this.get('action');
      action(newDate);
    }
  }
});
