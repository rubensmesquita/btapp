$(function() {
	window.app = new Btapp;
	app.bind('add:dht', function() {
		btapp.dht.get_any_hash(function(hash) { console.log(
		window.app.get('dht').bt['get_any_hash'](function() {}, function(hash) {
			$('body').append('<div>' + hash + '</div>');
			window.app.get('add').bt['torrent'](_.bind(function(hash) { console.log('Added ' + hash); }, this, hash), 'magnet:?xt=urn:btih:' + hash + '&tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce');
		});
	});
});