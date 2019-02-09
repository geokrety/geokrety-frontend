export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('user', 10);
  let author = server.create('user', { name: 'Zelda' });
  let author2 = server.create('user');
  let author3 = server.create('user');

  let geokret = server.create('geokret', { name: 'The First GeoKret', owner: author });
  let move = server.create('move', { author: author3, geokret: geokret });
  server.createList('move-comment', 1, { author: author, move: move });
  server.createList('move-comment', 2, { author: author2, move: move });
  server.createList('move-comment', 1, { author: author, move: move });
  server.createList('move-comment', 5, { author: author2, move: move });

  server.createList('news', 2, { author: author });
  server.createList('move', 2, { author: author, geokret: geokret });
  server.createList('geokret', 10, {owner: author3});
}
