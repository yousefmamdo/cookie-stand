'use strict';

let hours = ['6am :', '7am :', '8am :', '9am :', '10am :', '11am :', '12pm :', '1pm :', '2pm :', '3pm :', '4pm :', '5pm :', '6pm :', '7pm :'];
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let seatle = {
    name: 'Seatle',
    min: 23,
    max: 65,
    Avg: 6.3,
    randomcustomers: [],
    AverageCookies: [],

    getrandomcustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomcustomers.push(random(this.min, this.max));
        }
    },

    getAverageCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.AverageCookies.push(Math.floor(this.randomcustomers[i] * this.Avg));

        }
    }
}

seatle.getrandomcustomers();
seatle.getAverageCookies();

seatle.render = function () {
    let SalmonCookies = document.getElementById('SalmonCookies')

    let h1Name = document.createElement('h1');

    SalmonCookies.appendChild(h1Name);
    h1Name.textContent = 'Seatle';

    let SalmonCookies2 = document.createElement('ul');
    SalmonCookies.appendChild(SalmonCookies2);



    for (let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
        SalmonCookies2.appendChild(liElement);
        liElement.textContent = `${hours[i]} ${this.AverageCookies[i]} Cookies`;

        if (i == 13) {
            let total = 0;
            for (let j = 0; j < hours.length; j++) {
                total = this.AverageCookies[j] + total
            };
            liElement = document.createElement('li');
            SalmonCookies2.appendChild(liElement);
            liElement.textContent = `Total is ${total}`;
        }
    }
}
seatle.render();

let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    Avg: 1.2,
    randomcustomers: [],
    AverageCookies: [],

    getrandomcustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomcustomers.push(random(this.min, this.max));
        }
    },

    getAverageCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.AverageCookies.push(Math.floor(this.randomcustomers[i] * this.Avg));

        }
    }
}

Tokyo.getrandomcustomers();
Tokyo.getAverageCookies();


Tokyo.render = function () {
    let SalmonCookies = document.getElementById('SalmonCookies')

    let h1Name = document.createElement('h1');

    SalmonCookies.appendChild(h1Name);
    h1Name.textContent = 'Tokyo';

    let SalmonCookies2 = document.createElement('ul');


    SalmonCookies.appendChild(SalmonCookies2);

    for (let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
        SalmonCookies2.appendChild(liElement);
        liElement.textContent = `${hours[i]} ${this.AverageCookies[i]} Cookies`;

        if (i == 13) {
            let total = 0;
            for (let j = 0; j < 14; j++) {
                total = this.AverageCookies[j] + total
            };
            liElement = document.createElement('li');
            SalmonCookies2.appendChild(liElement);
            liElement.textContent = `Total is ${total}`;
        }
    }
}
Tokyo.render();


let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    Avg: 3.7,
    randomcustomers: [],
    AverageCookies: [],

    getrandomcustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomcustomers.push(random(this.min, this.max));
        }
    },

    getAverageCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.AverageCookies.push(Math.floor(this.randomcustomers[i] * this.Avg));

        }
    }
}

Dubai.getrandomcustomers();
Dubai.getAverageCookies();

Dubai.render = function () {
    let SalmonCookies = document.getElementById('SalmonCookies')


    let h1Name = document.createElement('h1');

    SalmonCookies.appendChild(h1Name);
    h1Name.textContent = 'Dubai';

    let SalmonCookies2 = document.createElement('ul');


    SalmonCookies.appendChild(SalmonCookies2);

    for (let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
        SalmonCookies2.appendChild(liElement);
        liElement.textContent = `${hours[i]} ${this.AverageCookies[i]} Cookies`;

        if (i == 13) {
            let total = 0;
            for (let j = 0; j < hours.length; j++) {
                total = this.AverageCookies[j] + total
            };
            liElement = document.createElement('li');
            SalmonCookies2.appendChild(liElement);
            liElement.textContent = `Total is ${total}`;
        }
    }
}
Dubai.render();

let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    Avg: 2.3,
    randomcustomers: [],
    AverageCookies: [],

    getrandomcustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomcustomers.push(random(this.min, this.max));
        }
    },

    getAverageCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.AverageCookies.push(Math.floor(this.randomcustomers[i] * this.Avg));

        }
    }
}

Paris.getrandomcustomers();
Paris.getAverageCookies();


Paris.render = function () {
    let SalmonCookies = document.getElementById('SalmonCookies')


    let h1Name = document.createElement('h1');

    SalmonCookies.appendChild(h1Name);
    h1Name.textContent = 'Paris';

    let SalmonCookies2 = document.createElement('ul');


    SalmonCookies.appendChild(SalmonCookies2);

    for (let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
        SalmonCookies2.appendChild(liElement);
        liElement.textContent = `${hours[i]} ${this.AverageCookies[i]} Cookies`;

        if (i == 13) {
            let total = 0;
            for (let j = 0; j < hours.length; j++) {
                total = this.AverageCookies[j] + total
            };
            liElement = document.createElement('li');
            SalmonCookies2.appendChild(liElement);
            liElement.textContent = `Total is ${total}`;
        }
    }
}
Paris.render();


let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    Avg: 4.6,
    randomcustomers: [],
    AverageCookies: [],

    getrandomcustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomcustomers.push(random(this.min, this.max));
        }
    },

    getAverageCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.AverageCookies.push(Math.floor(this.randomcustomers[i] * this.Avg));

        }
    }
}

Lima.getrandomcustomers();
Lima.getAverageCookies();


Lima.render = function () {
    let SalmonCookies = document.getElementById('SalmonCookies')

    let h1Name = document.createElement('h1');

    SalmonCookies.appendChild(h1Name);
    h1Name.textContent = 'Lima';

    let SalmonCookies2 = document.createElement('ul');


    SalmonCookies.appendChild(SalmonCookies2);

    for (let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
        SalmonCookies2.appendChild(liElement);
        liElement.textContent = `${hours[i]} ${this.AverageCookies[i]} Cookies`;

        if (i == 13) {
            let total = 0;
            for (let j = 0; j < hours.length; j++) {
                total = this.AverageCookies[j] + total
            };
            liElement = document.createElement('li');
            SalmonCookies2.appendChild(liElement);
            liElement.textContent = `Total is ${total}`;
        }
    }
}
Lima.render();


















