import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(move) {
    return {
      'comments': {
        related: `/v1/moves/${move.id}/comments`
      }
    };
  }
});
