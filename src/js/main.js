

api.getWeatherInfo();

function app(data) {
	var appView = new AppView('article', data);
	appView.element.classList.add('cf');
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
		view = new ForecastView('section', this.data[i]);
		view.element.classList.add('cf')
		view.element.classList.add('main-sections')
		view.render();
		this.element.appendChild(view.element);
	}
};



function ForecastView () {
	View.apply(this, arguments);
};

ForecastView.prototype = Object.create(View.prototype)

ForecastView.prototype.render = function () {
	var cityName = this.data.name;
	var description = utils.toTitleCase(this.data.weather[0].description);
	var highTemp = utils.toF(this.data.main.temp_max);
	var lowTemp = utils.toF(this.data.main.temp_min);
	var windDirection = utils.degreeConv(this.data.wind.deg);
	var windSpeed = this.data.wind.speed;

	this.element.innerHTML = `
		<div class='city-info'>
			<h3>${cityName}</h3>
			<span class="desc">${description}</span>
			<div class='sun'>
				${sunSVG}
			</div>
		</div>
		<section class='temp-container'>
			<div class='thermometer'>
				${thermometerSVG}
			</div>
			<div class='temp'>
				<ul>
					<li class="no-styles temp-value">${highTemp}</li>
					<li class="no-styles temp-value">${lowTemp}</li>
				</ul>
			</div>
		</section>
		<section class="wind-container">
			<div class="wind">
				${windSVG}
			</div>
			<div class="wind-desc">
				<ul>
					<li class="no-styles wind-info">${windSpeed}</li>
					<li class="no-styles wind-info">${windDirection}</li>
				</ul>
			</div>
		</section>

	`;

	this.bindEvents();
};


ForecastView.prototype.bindEvents = function () {
	var _this = this;
	this.element.addEventListener('click', function (){
		_this.element.classList.toggle('expanded');
	});
	this.elemnet
};

function showTime (date) {
	var formatted = date.toLocaleString()
	document.querySelector('#date').innerHTML = formatted;
};

setInterval(function () {
	showTime(new Date())
}, 1000);




