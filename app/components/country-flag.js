import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  tagName: 'span',
  classNames: ['flag-icon'],
  classNameBindings: ['countryFlag'],

  countryFlag: computed(function() {
    var country = this.get('country');
    if (country) {
      return `flag-icon-${country}`;
    } else {
      return "flag-icon-xyz";
    }
  }),
  country: null,
});
