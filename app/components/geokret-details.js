import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    if (!this.geokret.belongsTo('owner').value()) {
      throw "component:geokret-details: owner not loaded";
    }
  }
});
