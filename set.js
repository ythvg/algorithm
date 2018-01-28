function Set () {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function size() {
    return this.dataStore.length;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (!set.contains(this.dataStore[i])) {
                return false;
            }
        }
        return true;
    }
}

function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function show() {
    return this.dataStore;
}

// 求两个集合的并集
var cis = new Set();
cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');
var dmp = new Set();
dmp.add('Raymond');
dmp.add('Cynthia');
dmp.add('Jonathan');
console.log(cis.union(dmp).show());
console.log(cis.intersect(dmp).show());


/*
var names = new Set();
names.add('David');
names.add('Jennifer');
names.add('Cynthia');
names.add('Mike');
names.add('Raymond');
if (names.add('Mike')) {
    console.log('Mike added');
} else {
    console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var removed = 'Mike';
if (names.remove(removed)) {
    console.log(removed + ' removed.');
} else {
    console.log(removed + ' not removed');
}
names.add('Clayton');
removed = 'Alisa';
if (names.remove(removed)) {
    console.log(removed + ' removed.');
} else {
    console.log(removed + ' not removed');
}
*/

