var _ = require('lodash');
var formatArtistInput = require('./format_artist_input');
var buildTopAlbumsQueryUrl = require('./build_top_albums_query_url');
var requestLastfmTopAlbums = require('./request_lastfm_top_albums');
var renderResults = require('./render_results');

module.exports = function getSearchHandler(req, res) {
  console.info(['\nDate[', Date.now(), '] Alert[Request From Address: ', req.ip, ']'].join(''));
  var artist = formatArtistInput(req);
  var queryUrl = buildTopAlbumsQueryUrl(artist);

  requestLastfmTopAlbums(queryUrl, _.partial(renderResults, res));
};
