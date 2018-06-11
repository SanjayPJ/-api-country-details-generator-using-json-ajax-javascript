var generateBtn = document.getElementById('generate-country-details');
var countrySelect = document.getElementById('country-name');
var detailsBox = document.querySelector('.alert');

(function() {




    detailsBox.style.display = 'none';

    // loading countries
    loadCountries();

    // generate button click
    generateBtn.addEventListener("submit", function(e) {

        if (countrySelect.value !== "") {
            console.log('starting loading details from api')

            // clearing text
            detailsBox.textContent = "";

            //country code

            var xhrMain = new XMLHttpRequest();

            xhrMain.open('GET', 'assets/names.json', true);

            xhrMain.onload = function() {
                if (this.status == 200) {
                    var continentStr = JSON.parse(this.responseText);
                    detailsBox.innerHTML += `Country code ${countrySelect.value}<br>`;
                }

            }

            xhrMain.send();



            // custom http

            var getdata1 = new getData;

            getdata1.get('assets/continent.json', 'Continent code');

            getdata1 = new getData;

            getdata1.get('assets/capital.json', 'Capital code');

            getdata1 = new getData;

            getdata1.get('assets/iso.json', 'ISO code');

            getdata1 = new getData;

            getdata1.get('assets/currency.json', 'Currency');

            getdata1 = new getData;

            getdata1.get('assets/phone.json', 'Phone code');

            var messagebox = document.querySelector('.alert').style.display = 'block';
        }

        e.preventDefault();
    });
})();



function loadCountries() {
    // this function will load country names from loading.io api
    console.log('loading countries from api...');

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/names.json', true);

    xhr.onload = function() {
        if (this.status == 200) {
            var fullList = JSON.parse(this.responseText);
            var ListCountries = Object.values(JSON.parse(this.responseText)).sort();
            const getKey = (obj, val) => Object.keys(obj).find(key => obj[key] === val);


            for (var i = 0; i < ListCountries.length; i++) {
                var countryNameHTML = `<option value="${getKey(fullList, ListCountries[i])}">${ListCountries[i]}</option>`;
                countrySelect.innerHTML += countryNameHTML;
            }

        }

    }

    xhr.send();
};


function getData() {
    this.http = new XMLHttpRequest();
}

getData.prototype.get = function(url, str) {
    this.http.open('GET', url, true);

    var self = this;
    this.http.onload = function() {
        if (self.http.status == 200) {
            var continentStr = JSON.parse(self.http.responseText);
            detailsBox.innerHTML += `${str} : ${continentStr[countrySelect.value]}<br>`;
        }

    }

    this.http.send();
}