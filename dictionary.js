function Dictionary() {
    this.datastore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key ,value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    Object.keys(this.datastore).sort().forEach(function(key) {
        console.log(key + ' -> ' + this.datastore[key]);
    }, this);
}

function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

function clear() {
    Object.keys(this.datastore).forEach(function(key) {
        delete this.datastore[key];
    }, this);
}

var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');
console.log('Number os entries: ' + pbook.count());
console.log("David's extension: " + pbook.find('David'));
pbook.showAll();
pbook.clear();
console.log('Number of entries: ' + pbook.count());
