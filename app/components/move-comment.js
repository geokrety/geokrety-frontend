import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: ['list-group-item'],
  classNameBindings: ['listGroupItemDanger'],

  listGroupItemDanger: computed(function() {
    if (this.get('comment').type == 1) {
      return 'list-group-item-danger'
    }
  }),

});
