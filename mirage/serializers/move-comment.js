import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(moveComment) {
    return {
      'author': {
        related: `/v1/moves-comments/${moveComment.id}/author`
      }
    };
  }
});
