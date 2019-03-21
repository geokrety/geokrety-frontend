import pageNumber from 'ember-cli-pagination/components/page-numbers';
import {
  computed
} from '@ember/object';

export default pageNumber.extend({
  numPagesToShow: computed(function() {
    if (this.get('isMobile.any')) {
      return 4;
    }
    return 25;
  }),
});
