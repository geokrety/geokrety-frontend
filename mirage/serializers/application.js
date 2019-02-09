import { JSONAPISerializer } from 'ember-cli-mirage';
import { isArray } from '@ember/array';

export default JSONAPISerializer.extend({
  serialize(response, request) {
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    if (isArray(response)) {
      paginate(json, request);
    }

    return json;
  }
});


function paginate(json, request) {
  const pageNumber = request.queryParams['page[number]'];
  const pageSize = request.queryParams['page[size]'];

  if (!pageNumber || !pageSize) {
    return;
  }

  const minIndex = (pageNumber - 1) * pageSize;
  const maxIndex = pageNumber * pageSize;
  const totalRecords = json.data.length;
  json.data = json.data.slice(minIndex, maxIndex);
  json.meta = json.meta || {};
  json.meta.total_pages = json.meta.total_pages || totalRecords / pageSize;
}
