
'use strict';
let sectionElem = document.getElementById('salesTable');





let trash = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};




class Store {
  constructor(minCust, maxCust, averageCookieSale, name) {
    this.name = name;
    this.sum = 0;
    this.customersPerHour = [];
    this.hrSales = [];
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averageCookieSale = averageCookieSale;

    for (let i = 0; i < hours.length; i++) {
      let tally = this.customersPerHour = randomAge(this.minCust, this.maxCust);
      this.hrSales.push(tally);
      this.sum += tally;
    }

    for (let i = 0; i < this.customersPerHour.length; i++) {
      let cookies = this.customers[i] * this.avgCookieSale;
      this.hrSales.push(Math.floor(cookies));
      this.sum += Math.floor(cookies);
    }

  }
};








Store.prototype.rendering = function () {
  
let row1 = document.createElement('tbody');
sectionElem.appendChild(row1);
  // for (let i = 0; i < this.hrSales.length; i++);

let rows = document.createElement('tr');
row1.appendChild(rows);

let th1Elem = document.createElement('td');
rows.appendChild(th1Elem);
th1Elem.textContent = `${this.name}`;

for (let i = 0; i < this.hrSales.length; i ++) {
  let tdSalesElem = document.createElement('td')
  rows.appendChild(tdSalesElem);
  tdSalesElem.textContent = this.hrSales[i];
}


}
function header() {
  let headElem = document.createElement('thead');
  sectionElem.appendChild(headElem);

  let rowHeader = document.createElement('tr');
  headElem.appendChild(rowHeader);

  for(let i = 0; i < hours.length; i++) {
    let lead = document.createElement('th');
    rowHeader.appendChild(lead);
    lead.textContent = hours[i];
  }


};

let homeTown = new Store(23, 65, 6.3, 'Seattle');
let tokyoTown = new Store(23, 25, 3.2, 'Tokyo');
let dubaiTown = new Store(11, 38, 3.7, 'Dubai');
let parisTown = new Store(20, 38, 2.3, 'Paris');
let limaTown = new Store(23, 65, 6.3, 'Lima');


header();

homeTown.rendering();
tokyoTown.rendering();
dubaiTown.rendering();
parisTown.rendering();
limaTown.rendering();











