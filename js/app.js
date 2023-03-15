
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
    trash.push(this);
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
  trash + this.hrSales; 
}
this.hrSales.push(trash);
let ender = document.createElement('td');
rows.appendChild(ender);
ender.textContent = this.sum;


}
function header() {
  let headElem = document.createElement('thead');
  sectionElem.appendChild(headElem);

  let rowHeader = document.createElement('tr');
  headElem.appendChild(rowHeader);
  let space = document.createElement('th');
  rowHeader.appendChild(space);
  space.textContent = ('');
  for(let i = 0; i < hours.length; i++) {
    let lead = document.createElement('th');
    rowHeader.appendChild(lead);
    lead.textContent = hours[i];
  }

  let ending = document.createElement('th');
  rowHeader.appendChild(ending);
  ending.textContent = `Daily total`;

};


function companyTotal() {
  let headElem = document.createElement('thead');
  sectionElem.appendChild(headElem);

  let rowHeader = document.createElement('tr');
  headElem.appendChild(rowHeader);
  let space = document.createElement('th');
  rowHeader.appendChild(space);
  space.textContent = ('Total sales');

  let totalRowArray = [];
  for(let i = 0; i < hours.length; i ++) {
    let currentTotal = 0;
    for(let j = 0; j < trash.length; j ++) {
      currentTotal += trash[j].hrSales[i];

    }
    totalRowArray.push(currentTotal);
    console.log(totalRowArray);
  }
  let grandTotal = 0;
  for(let i = 0; i < totalRowArray.length; i ++) {
    grandTotal += totalRowArray[i];
    let next = document.createElement('td');
    rowHeader.appendChild(next);
    next.textContent = totalRowArray[i];
  }

  let lastCell = document.createElement('th');
  space.appendChild(lastCell);
  lastCell.textContent = grandTotal;

}


function formsub() {
  let forms = document.createElement('input');
  sectionElem.appendChild(forms);
}


let homeTown = new Store(23, 65, 6.3, 'Seattle');
let tokyoTown = new Store(3, 24, 1.2, 'Tokyo');
let dubaiTown = new Store(11, 38, 3.7, 'Dubai');
let parisTown = new Store(20, 38, 2.3, 'Paris');
let limaTown = new Store(23, 65, 6.3, 'Lima');


header();



homeTown.rendering();
tokyoTown.rendering();
dubaiTown.rendering();
parisTown.rendering();
limaTown.rendering();

companyTotal();


function handleSubmit(event) {
  event.preventDefault();

  let userInput1 = +event.target.avg.value;
  let userInput2 = +event.target.min.value;
  let userInput3 = +event.target.max.value;
  let userInput4 = event.target.cityName.value;

  console.log(userInput1);
  console.log(userInput2);
  console.log(userInput3);
  console.log(userInput4);
}

form.addEventListener('submit', handleSubmit);






