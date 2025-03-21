function updateTime() {
  // London
  let londonElement = document.querySelector('#london');
  if (londonElement) {
    let londonDateElement = londonElement.querySelector('.date');
    let londonTimeElement = londonElement.querySelector('.time');
    let londonTime = moment().tz('Europe/London');

    londonDateElement.innerHTML = londonTime.format('MMMM Do YYYY');
    londonTimeElement.innerHTML = londonTime.format(
      'h:mm:ss [<small>]A[</small>]'
    );
  }

  // Rome
  let romeElement = document.querySelector('#rome');
  if (romeElement) {
    let romeDateElement = romeElement.querySelector('.date');
    let romeTimeElement = romeElement.querySelector('.time');
    let romeTime = moment().tz('Europe/Rome');

    romeDateElement.innerHTML = romeTime.format('MMMM Do YYYY');
    romeTimeElement.innerHTML = romeTime.format('h:mm:ss [<small>]A[</small>]');
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === 'current') {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace('_', ' ').split('/')[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector('#cities');
  citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
            <div class="date">${cityTime.format('MMMM Do YYYY')}</div>
          </div>
          <div class="time">${cityTime.format(
            'h:mm:ss '
          )}<small>${cityTime.format('A')}</small></div>
        </div>
        <a href="/">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector('#city');
citiesSelectElement.addEventListener('change', updateCity);
