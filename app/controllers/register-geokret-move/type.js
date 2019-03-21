import Controller from '@ember/controller';

export default Controller.extend({

actions: {
  logTypeSelected() {
    console.log('logTypeSelected');
    // this.transitionToRoute('register-geokret-move.identification');
  }
}
});
