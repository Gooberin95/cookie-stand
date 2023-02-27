
'use strict';
let sectionElem = document.getElementById('seattle');
let sectionElem6 = document.getElementById('salmon');
console.log(sectionElem);


let trash = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(seattle.sum);


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
  let tableElem = document.createElement('table');
  sectionElem6.appendChild(tableElem);

  // first row
  // going to need a row for every store
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  let th1Elem = document.createElement('th');
  row1.appendChild(th1Elem);
  th1Elem.textContent = hours;
  let th2Elem = document.createElement('th');
  row1.appendChild(th2Elem);
  th2Elem.textContent = "Daily total";
  let th3Elem = document.createElement('th');
  row1.appendChild(th3Elem);
  th3Elem.textContent = this.sum;
}
//   // second row
//   let row2 = document.createElement('tr');
//   tableElem.appendChild(row2);
//   let td1Elem = document.createElement('td');
//   row2.appendChild(td1Elem);
//   td1Elem.textContent = this.isGoodWithDogs;
//   let td2Elem = document.createElement('td');
//   row2.appendChild(td2Elem);
//   td2Elem.textContent = this.isGoodWithCats;
//   let td3Elem = document.createElement('td');
//   row2.appendChild(td3Elem);
//   td3Elem.textContent = this.isGoodWithKids;
// }



let homeTown = new Store(23, 65, 6.3, 'Seattle');
let tokyoTown = new Store(3,25,1.2, 'Tokyo');
let dubaiTown = new Store(11,38,3.7,'Dubai');

console.log(homeTown.sum);
homeTown.rendering();
tokyoTown.rendering();
dubaiTown.rendering();










// let tokyo = new Store(3,24,1.2, 'Tokyo',)
// homeTown.
// homeTown.rendering()
