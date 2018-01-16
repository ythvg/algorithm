function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
}

List.prototype.append = function (element) {
    this.dataStore[this.listSize++] = element;
};

List.prototype.find = function (element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
};

List.prototype.remove = function (element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
};

List.prototype.length = function () {
    return this.listSize;
};

List.prototype.toString = function () {
    return this.dataStore;
};

List.prototype.insert = function (element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
};

List.prototype.clear = function () {
    delete this.dataStore;
    this.dataStore = [];
    this.liseSize = this.pos = 0;
};

List.prototype.contains = function (element) {
    var contains = this.find(element);
    if (contains > 0) {
        return true;
    } else {
        return false;
    }
};

List.prototype.front = function () {
    this.pos = 0;
}

List.prototype.end = function () {
    this.pos = this.listSize - 1;
};

List.prototype.prev = function () {
    --this.pos;
};

List.prototype.next = function () {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
};

List.prototype.currPos = function () {
    return this.pos;
};

List.prototype.moveTo = function (position) {
    this.pos = position;
};

List.prototype.getElement = function () {
    return this.dataStore[this.pos];
}

List.prototype.hasNext = function () {
    return this.pos < this.listSize;
};

List.prototype.hasPrev = function () {
    return this.pos >= 0;
};


var names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');

names.front();
names.next();
names.next();
names.next();
names.prev();
// console.log(names.getElement())

var movies;

function createArr(file) {
    var fs = require('fs');
    var arr = fs.readFileSync(file).toString().split('\n');

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
    return arr;
}
movies = createArr('./films.txt');

var movieList = new List();
for (var i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}

function displayList(list) {
    for (list.front(); list.hasNext(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()['name']  + ', ' +
            list.getElement()['movie']);
        } else {
            console.log(list.getElement());
        }
    }
}

// displayList(movieList);

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
    } else {
        console.log(movie + 'is not available');
    }
}

var customerList = new List();
console.log('Avaliable movies: \n');
displayList(movieList);
console.log('\nEnter your name: ');

checkOut('Jane Doe', '2.教父', movieList, customerList);
console.log('\nCustomeer Rentalss: \n');
displayList(customerList);
console.log('\nMoviews Now Avaliable\n');
displayList(movieList);
