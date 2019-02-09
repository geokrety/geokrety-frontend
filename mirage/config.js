export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://api.geokrety.house.kumy.net';
  this.namespace = 'v1';
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.get('/users');
  this.get('/users/:id');
  this.get('/users/:id/moves', (schema, request) => {
    let user = schema.users.find(request.params.id);
    return user.moves;
  });

  this.get('/news');
  this.get('/news/:id');
  this.get('/news/:id/author', (schema, request) => {
    let news = schema.news.find(request.params.id);
    return news.author;
  });

  this.get('/geokrety', 'geokret');
  this.get('/geokrety/:id', 'geokret');
  this.get('/geokrety/:id/owner', (schema, request) => {
    let geokret = schema.geokrety.find(request.params.id);
    return geokret.owner;
  });
  this.get('/geokrety/:id/moves', (schema, request) => {
    let geokret = schema.geokrety.find(request.params.id);
    return geokret.moves;
  });

  this.get('/moves');
  this.get('/moves/:id');
  this.get('/moves/:id/author', (schema, request) => {
    let move = schema.moves.find(request.params.id);
    return move.author;
  });
  this.get('/moves/:id/comments', (schema, request) => {
    let move = schema.moves.find(request.params.id);
    return move.comments;
  });

  this.get('/moves-comments');
  this.get('/moves-comments/:id');
  this.get('/moves-comments/:id/author', (schema, request) => {
    let moveComment = schema.moveComments.find(request.params.id);
    return moveComment.author;
  });

}
