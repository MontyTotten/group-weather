var url = 'http://api.openweathermap.org/data/2.5/find?lat=34.0&lon=-81.0&cnt=10&appid=94d368f1ffc1c294a2ce41c5d6734883';


var getWeatherInfo = function () {
	$.ajax({
		url: url,
		success: function (results) {
			app(results.list);
			$('.container').fadeOut('slow');
			console.log(results);
		}
	});
};

getWeatherInfo();

function app(data) {
	var appView = new AppView('div', data);
	appView.render();
	document.body.appendChild(appView.element);
};


function View (tagName, data) {
	this.element = document.createElement(tagName);
	this.data = data;
};


function AppView () {
	View.apply(this, arguments);
};

AppView.prototype = Object.create(View.prototype)

AppView.prototype.render = function () {
	for (var i = 0; i < this.data.length; i++) {
		view = new ForecastView('div', this.data[i]);
		view.render();
		this.element.appendChild(view.element);
	}
};



function ForecastView () {
	View.apply(this, arguments);
};

ForecastView.prototype = Object.create(View.prototype)

ForecastView.prototype.render = function () {
	this.element.innerHTML =
		'<h4>' + this.data.name + '</h4>' +
		'<p>' + utils.toTitleCase(this.data.weather[0].description) + '</p>' +
		'<p>' + this.data.wind.speed + ' MPH ' + utils.degreeConv(this.data.wind.deg) + '</p>' + 
		'<p>' + 'Max: ' + utils.toF(this.data.main.temp_max) + '</p>' + 
		'<p>' + 'Min: ' + utils.toF(this.data.main.temp_min) + '</p>';

	this.bindEvents();
};


ForecastView.prototype.bindEvents = function () {
	var _this = this;
	this.element.addEventListener('click', function (){
		_this.element.classList.toggle('expanded');
	});
};







