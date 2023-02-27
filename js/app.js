
'use strict';
let sectionElem = document.getElementById('seattle');
console.log(sectionElem);
let sectionElem2 = document.getElementById('tokyo');
let sectionElem3 = document.getElementById('dubai');
let sectionElem4 = document.getElementById('paris');
let sectionElem5 = document.getElementById('lima');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let seattle = {
  minCust: 23,
  maxCust: 65,
  name: 'Seattle',
  avgCookieSale: 6.3,
  sum: 0,
  customers: [],
  hrSales: [],
  getSum: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }



  },
  hrSum: function () {
    this.getSum();
    for (let i = 0; i < this.customers.length; i++) {
      let cookies = this.customers[i] * this.avgCookieSale;
      this.hrSales.push(Math.floor(cookies));
      this.sum += Math.floor(cookies);
    }
  },


  render: function () {
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
};

let tokyo = {
  minCust: 3,
  maxCust: 24,
  name: 'Tokyo',
  avgCookieSale: 1.2,
  sum: 0,
  customers: [],
  hrSales: [],
  getSum: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }



  },
  hrSum: function () {
    this.getSum();
    for (let i = 0; i < this.customers.length; i++) {
      let cookies = this.customers[i] * this.avgCookieSale;
      this.hrSales.push(Math.floor(cookies));
      this.sum += Math.floor(cookies);
    }
  },


  render: function () {
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
};

let dubai = {
  minCust: 11,
  maxCust: 38,
  name: 'Dubai',
  avgCookieSale: 3.7,
  sum: 0,
  customers: [],
  hrSales: [],
  getSum: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }



  },
  hrSum: function () {
    this.getSum();
    for (let i = 0; i < this.customers.length; i++) {
      let cookies = this.customers[i] * this.avgCookieSale;
      this.hrSales.push(Math.floor(cookies));
      this.sum += Math.floor(cookies);
    }
  },


  render: function () {
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
};





let paris = {
  minCust: 20,
  maxCust: 38,
  name: 'Paris',
  avgCookieSale: 2.3,
  sum: 0,
  customers: [],
  hrSales: [],
  getSum: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }



  },
  hrSum: function () {
    this.getSum();
    for (let i = 0; i < this.customers.length; i++) {
      let cookies = this.customers[i] * this.avgCookieSale;
      this.hrSales.push(Math.floor(cookies));
      this.sum += Math.floor(cookies);
    }
  },


  render: function () {
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
};



let lima = {
  minCust: 23,
  maxCust: 65,
  name: 'Lima',
  avgCookieSale: 6.3,
  sum: 0,
  customers: [],
  hrSales: [],
  getSum: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }



  },
  hrSum: function () {
    this.getSum();
    for (let i = 0; i < this.customers.length; i++) {
      let cookies = this.customers[i] * this.avgCookieSale;
      this.hrSales.push(Math.floor(cookies));
      this.sum += Math.floor(cookies);
    }
  },


  render: function () {
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
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
// console.log(seattle.sum);