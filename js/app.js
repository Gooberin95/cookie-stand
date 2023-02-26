'use strict';
let sectionElem = document.getElementById('seattle');
console.log(sectionElem);
let sectionElem2 = document.getElementById('tokyo');
let sectionElem3 = document.getElementById('dubai');
let sectionElem4 = document.getElementById('paris');
let sectionElem5 = document.getElementById('lima');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
};

let seattle = {
    minCust: 23,
    maxCust: 65,
    name:'Seattle',
    avgCookieSale: 6.3,
    sum:0,
    customers: [],
    hrSales: [],
    getSum: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }
    

    
  },
    hrSum: function() {
      this.getSum();
      for (let i = 0; i < this.customers.length; i++){
        let cookies = this.customers[i] * this.avgCookieSale;
        this.hrSales.push(cookies);
        this.sum += cookies;
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
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: '1.2',
  daySale:'0',
  getSum: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }
    

    
  },
    hrSum: function() {
      this.getSum();
      for (let i = 0; i < this.customers.length; i++){
        let cookies = this.customers[i] * this.avgCookieSale;
        this.hrSales.push(cookies);
        this.sum += cookies;
      }
    },


  
  render: function () {

      let articleElem = document.createElement('article');
      sectionElem2.appendChild(articleElem);
      let hrElem = document.createElement('h1');
      hrElem.textContent = `${this.name}`;
      articleElem.appendChild(hrElem);
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      for (let i = 0; i < hours.length; i++) {
          let liElem = document.createElement('li');
          liElem.textContent = `${hours[i]} ${this.getSum()} cookies`;
          ulElem.appendChild(liElem);
      }
  },
};

let dubai = {
  name: 'Dubai',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: '1.2',
  daySale:'0',
  getSum: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }
    

    
  },
    hrSum: function() {
      this.getSum();
      for (let i = 0; i < this.customers.length; i++){
        let cookies = this.customers[i] * this.avgCookieSale;
        this.hrSales.push(cookies);
        this.sum += cookies;
      }
    },


  
  render: function () {

      let articleElem = document.createElement('article');
      sectionElem3.appendChild(articleElem);
      let hrElem = document.createElement('h1');
      sectionElem3.appendChild(hrElem);
      hrElem.textContent = `${this.name}`;
      articleElem.appendChild(hrElem);
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      for (let i = 0; i < hours.length; i++) {
          let liElem = document.createElement('li');
          liElem.textContent = `${hours[i]} ${this.getSum()} cookies`;
          ulElem.appendChild(liElem);
      }
  },
};





let paris = {
  name: 'Paris',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: '1.2',
  daySale:'0',
  getSum: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }
    

    
  },
    hrSum: function() {
      this.getSum();
      for (let i = 0; i < this.customers.length; i++){
        let cookies = this.customers[i] * this.avgCookieSale;
        this.hrSales.push(cookies);
        this.sum += cookies;
      }
    },


  
  render: function () {

      let articleElem = document.createElement('article');
      sectionElem4.appendChild(articleElem);
      let hrElem = document.createElement('h1');
      hrElem.textContent = `${this.name}`;
      articleElem.appendChild(hrElem);


      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      for (let i = 0; i < hours.length; i++) {
          let liElem = document.createElement('li');
          liElem.textContent = `${hours[i]} ${this.getSum()} cookies`;
          ulElem.appendChild(liElem);
      }
  },
};



let lima = {
  name: 'Lima',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: '1.2',
  daySale:0,
  getSum: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customers.push(randomAge(this.minCust, this.maxCust));
    }
    

    
  },
    hrSum: function() {
      this.getSum();
      for (let i = 0; i < this.customers.length; i++){
        let cookies = this.customers[i] * this.avgCookieSale;
        this.hrSales.push(cookies);
        this.sum += cookies;
      }
    },

  
  render: function () {

      let articleElem = document.createElement('article');
      sectionElem5.appendChild(articleElem);
      let hrElem = document.createElement('h1');
      hrElem.textContent = `${this.name}`;
      articleElem.appendChild(hrElem);
      
      
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      for (let i = 0; i < hours.length; i++) {
          let liElem = document.createElement('li');
          liElem.textContent = `${hours[i]} ${this.getSum()} cookies`;
          ulElem.appendChild(liElem);
          
      }
      
  },
};

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
