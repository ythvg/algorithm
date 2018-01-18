function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

// 向队尾添加一个元素
function enqueue(element) {
    this.dataStore.push(element);
}

// 删除队首的元素
function dequeue() {
    var entry = 0;
    var el;
    for (let i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i;
        }
    }
    el = this.dataStore.splice(entry, 1);
    return el[0];

}

// 读取队首和队尾的元素
function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    let retStr = '';
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + ' code: ' +
            this.dataStore[i].code + '\n';
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

let ed = new Queue();
ed.enqueue(new Patient('Smith', 5));
ed.enqueue(new Patient('Jones', 4));
ed.enqueue(new Patient('Fehrenbach', 6));
ed.enqueue(new Patient('Brown', 1));
ed.enqueue(new Patient('Ingram', 1));
console.log(ed.toString());

let seen = ed.dequeue();
console.log('Patient being treated: ' + seen.name);
console.log('Patientys waiting to be seen: ');
console.log(ed.toString());

seen = ed.dequeue();
console.log('Patient being treated: ' + seen.name);
console.log('Patientys waiting to be seen: ');
console.log(ed.toString());