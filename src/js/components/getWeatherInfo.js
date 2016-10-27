var getWeatherInfo = function () {
	$.ajax({
		url: url,
		success: function (results) {
			console.log(results)
		}
	});
};