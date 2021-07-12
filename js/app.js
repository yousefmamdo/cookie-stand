 'use strict';

let hours = ['6am: ', '7am: ', '8am: ', '9am: ',
    '10am: ', '11am: '
    , '12pm: ', '1pm: ', '2pm: ',
    '3pm: ', '4pm: ', '5pm: ',
    '6pm: ', '7pm: '];

let salmonCookie1 = [];
function salmonCookie(postion,name, min, max, avg) {
    this.postion=postion;
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    let randomCustomersArray = [];
    let avgCookiesperHour = [];
    salmonCookie1.push(this.postion);
   

}

let seattle = new salmonCookie('seattle', 23, 65, 6.3);
let tokyo = new salmonCookie('tokyo', 3, 24, 1.2);
let Dubai = new salmonCookie('Dubai',11, 38, 3.7);
let paris = new salmonCookie('paris', 20, 38, 2.3);
let lima = new salmonCookie('lima', 2, 16, 4.6);




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

salmonCookie.prototype.randomCustomersArray=function(){
    for (let i=0;i<hours.length;i++){
     this.avgCookiesperHour.push(math.floor(this.randomCustomersArray[i]))
     }}
     let thEl;
     let headingRow;
     let parent;
     let table;
     let td1;
     function header(){
        parent=document.getElementById('scookes');
        table=document.createElement('table');
        parent.appendChild(table);
        headingRow=document.createElement('tr');
        table.appendChild(headingRow);
        thEl=document.createElement("th");
        headingRow.appendChild(thEl);
        thEl.textContent='name'

        
        for (let i = 0; i < hours.length; i++) {
            let thEl=document.createElement('th');
    
            headingRow.appendChild(thEl);
    
            thEl.textContent=`${hours[i]}`;
    
     }}
     header();

     salmonCookie.prototype.render=function(){
        parent=document.getElementById('scookes');
        trEl=document.createElement('tr');
        table.appendChild(trEl);
        td1=document.createElement('td');
            dataRow.appendChild(td1);
    
            td2.textContent=`${this.postion}`;
      
        for (let i = 0; i < hours.length; i++) {
         td1=document.createElement('td');
        dataRow.appendChild(trEl);
    
        td1.textContent=`${this.avgCookiesperHour[i]}`;
        
    }
}
    
   
    
    
    function footer(){
     
    }