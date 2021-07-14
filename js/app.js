'use strict';

let hours = ['6am', '7am', '8am', '9am',
    '10am', '11am'
    , '12pm', '1pm', '2pm',
    '3pm', '4pm', '5pm',
    '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let salmonCookie1 = [];
function salmonCookie(postion, min, max, avg) {
    this.postion = postion;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalCookiesPerDay = 0;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    salmonCookie1.push(this);


}


salmonCookie.prototype.calcCustEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this
            .min, this.max));

    }

}
salmonCookie.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avg));
        this.totalCookiesPerDay += this.cookiesEachHour[i];
    }
}
let seattle = new salmonCookie('seattle', 23, 65, 6.3);
let tokyo = new salmonCookie('tokyo', 3, 24, 1.2);
let Dubai = new salmonCookie('Dubai', 11, 38, 3.7);
let paris = new salmonCookie('paris', 20, 38, 2.3);
let lima = new salmonCookie('lima', 2, 16, 4.6);

let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


function header() {

    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let thEl = document.createElement("th");
    headingRow.appendChild(thEl);
    thEl.textContent = 'Name';


    for (let i = 0; i < hours.length; i++) {
        let thHours = document.createElement('th');

        headingRow.appendChild(thHours);

        thHours.textContent = hours[i];

    }

    let lastTh = document.createElement('th');
    headingRow.appendChild(lastTh);
    lastTh.textContent = 'Daily Location Total';
}



salmonCookie.prototype.render = function () {

    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let td1 = document.createElement('td');
    dataRow.appendChild(td1);

    td1.textContent = this.postion;

    for (let i = 0; i < hours.length; i++) {
        let cookiesTD = document.createElement('td');
        dataRow.appendChild(cookiesTD);

        cookiesTD.textContent = this.cookiesEachHour[i];

    }


    let tdTotal = document.createElement('td');
    dataRow.appendChild(tdTotal);

    tdTotal.textContent = this.totalCookiesPerDay;
}



function footer() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let firstth = document.createElement('th');
    footerRow.appendChild(firstth);
    firstth.textContent = 'Totals';
    let totalTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let totalForEachHour =0;

        for (let j = 0; j < salmonCookie1.length; j++) {
            totalForEachHour+=salmonCookie1[j].cookiesEachHour[i];
            totalTotal+=salmonCookie1[j].cookiesEachHour[i];
            
        }
        let footrth = document.createElement('th');
        footerRow.appendChild(footrth);
        footrth.textContent = totalForEachHour;
    }

    let lastTh = document.createElement("th");
    footerRow.appendChild(lastTh);
    lastTh.textContent = totalTotal;

}
header();

for (let i = 0; i < salmonCookie1.length; i++) {
    salmonCookie1[i].calcCustEachHour();
    salmonCookie1[i].calcCookiesEachHour();
    salmonCookie1[i].render();

}
footer();

let form = document.getElementById('form');

form.addEventListener('submit', AddNew);
function AddNew(event) {
   event.preventDefault();

     let nameCustomer = event.target.salmonName.value;
   let minCustomer = parseInt(event.target.min.value);
    let maxCustomer = parseInt(event.target.max.value);
  let avgchookies = parseFloat(event.target.avg.value);


   let addSalmonCookie = new salmonCookie(nameCustomer, minCustomer, maxCustomer, avgchookies);
   //delete the last element
   table.deleteRow(-1);
     addSalmonCookie.calcCustEachHour();
   addSalmonCookie.calcCookiesEachHour();
   addSalmonCookie.render();
   footer();
}