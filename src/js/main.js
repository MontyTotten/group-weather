var url = 'http://api.openweathermap.org/data/2.5/find?lat=34.0&lon=-81.0&cnt=10&appid=94d368f1ffc1c294a2ce41c5d6734883';

function toF (kelvin) {     
	var result = 0;     
	result = kelvin * 9/5 - 459.67;     
	return result.toFixed(); 
};

function degreeConversion (value) {
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


var getWeatherInfo = function () {
	$.ajax({
		url: url,
		success: function (results) {
			console.log(results)
		}
	});
};

getWeatherInfo();

function main(data) {
	var mainView = new MainView('ul', data);
	mainView.render();
	document.body.appendChild(mainView.element);
};

function View (tagName, data) {
	this.element = document.createElement(tagName);
	this.data = data;
};

function MainView () {
	View.apply(this, arguments);
};

MainView.prototype = Object.create(View.prototype)
MainView.prototype.render = function () {
	for (i = 0; i < data.list.length; i++) {
		test = new ForecastView('li', this.data[i])
	}
};


function ForecastView () {
	View.apply(this, arguments);
};

ForecastView.prototype = Object.create(View.prototype)
ForecastView.prototype.render = function () {
	this.element.textContent = this.data.name;
};