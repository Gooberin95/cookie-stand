
'use strict';
let sectionElem = document.getElementById('seattle');
console.log(sectionElem);

let sectionElem6 = document.getElementById('salmon');
let trash = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(seattle.sum);


function Store(minCust, maxCust, averageCookieSale, name, sum, customers, hrSales) {
  this.name = name;
  this.sum = sum;
  this.customers = customers;
  this.hrSales = hrSales;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookieSale = averageCookieSale;



  trash.push(this);
}

Store.prototype.getSum = function (){}
    for(let i = 0; i < hours.length; i++) {
  this.customers.push(randomAge(this.minCust, this.maxCust));
}

store.prototype.hrSum = function () {
  this.getSum();
  for (let i = 0; i < this.customers.length; i++) {
    let cookies = this.customers[i] * this.avgCookieSale;
    this.hrSales.push(Math.floor(cookies));
    this.sum += Math.floor(cookies);
  }

}
Store.prototype.render = function () {
    this.hrSum();
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);
    let hrElem = document.createElement('h1');
    hrElem.textContent = `${this.name}`;
    articleElem.appendChild(hrElem);
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]} ${this.hrSales[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liTotal = document.createElement('li');
    liTotal.textContent = `Total cookies:${this.sum}`;
    ulElem.appendChild(liTotal);

  },


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
  th3Elem.textContent = this.name;

  // second row
  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);
  let td1Elem = document.createElement('td');
  row2.appendChild(td1Elem);
  td1Elem.textContent = this.isGoodWithDogs;
  let td2Elem = document.createElement('td');
  row2.appendChild(td2Elem);
  td2Elem.textContent = this.isGoodWithCats;
  let td3Elem = document.createElement('td');
  row2.appendChild(td3Elem);
  td3Elem.textContent = this.isGoodWithKids;
}



let homeTown = new Store(23, 65, 6.3, 'Seattle', 0, [], []);
homeTown.hrSum();


let tokyo = new Store(3,24,1.2, 'Tokyo',)
homeTown.
homeTown.rendering();
console.log(trash);