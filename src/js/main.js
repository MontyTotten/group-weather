var url = 'http://api.openweathermap.org/data/2.5/find?lat=34.0&lon=-81.0&cnt=10&appid=94d368f1ffc1c294a2ce41c5d6734883';

function toF (kelvin) {     
	var result = 0;     
	result = kelvin * 9/5 - 459.67;     
	return result.toFixed() + '\u00B0 F'; 
};

function degreeConv (value) {
    if (value === 0) {
        return 'N';
    } else if (value > 0 && value < 90) {
        return 'NE';
    } else if (value === 90) {
        return 'E';
    } else if (value > 90 && value < 180) {
        return 'SE'
    } else if (value === 180) {
        return 'S';
    } else if (value > 180 && value < 270) {
        return 'SW';
    } else if (value === 270) {
        return 'W';
    } else if (value > 270 && (value <= 359)) {
        return 'NW';
    }
};

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var getWeatherInfo = function () {
	$.ajax({
		url: url,
		success: function (results) {
			app(results.list);
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
		'<p>' + toTitleCase(this.data.weather[0].description) + '</p>' +
		'<p>' + this.data.wind.speed + ' MPH ' + degreeConv(this.data.wind.deg) + '</p>' + 
		'<p>' + toF(this.data.main.temp_max) + '</p>' + 
		'<p>' + toF(this.data.main.temp_min) + '</p>';

	this.bindEvents();
};


ForecastView.prototype.bindEvents = function () {
	var _this = this;
	this.element.addEventListener('click', function (){
		_this.element.classList.toggle('expanded');
	});
};

