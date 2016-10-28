var api = {
	url: 'http://api.openweathermap.org/data/2.5/find?lat=34.0&lon=-81.0&cnt=10&appid=94d368f1ffc1c294a2ce41c5d6734883',
	getWeatherInfo: function () {
		$.ajax({
			url: api.url,
			success: function (results) {
				app(results.list);
				$('.container').fadeOut('slow');
				console.log(results);
			}
		});
	}
};

// lat lon of other places with a greater variance in weather information/city

// Galapagos: lat=-0.9&lon=-90.9
// Northern Alaska: lat=69.0&lon=-158.6 