var api = {
	url: 'http://api.openweathermap.org/data/2.5/find?lat=34.0&lon=-81.0&cnt=10&appid=94d368f1ffc1c294a2ce41c5d6734883',
	getWeatherInfo: function (cb) {
		$.ajax({
			url: api.url,
			success: function (results) {
				cb(results);
			}
		});
	}
};