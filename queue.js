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
    return this.dataStore.shift();
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
        retStr += this.dataStore[i] + '\n';
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

/*
let q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log('Front of queue: ' + q.front());
console.log('Back of queue: ' + q.back());
*/




function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    let fs = require('fs');
    let names = fs.readFileSync('./dancers.txt').toString().split('\n');
    for (let i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (let i = 0; i < names.length; ++i) {
        let dancer = names[i].split(' ');
        let sex = dancer[0];
        let name = dancer[1];
        if (sex === 'F') {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log('The dance partners are: \n');
    while(!females.empty() && !males.empty()) {
        let person = females.dequeue();
        process.stdout.write('Female dancer is : ' + person.name);
        person = males.dequeue();
        process.stdout.write(' and the male dancer is: ' + person.name);
    }
}

/*
let femaleDancers = new Queue()
    , maleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
console.log('');
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + ' is waiting to dance.');
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + ' is waiting to dance.');
}
*/


/**
 * 使用队列排序
 */

function distribute(nums, queues, n, digit) {
    for (let i = 0; i < n; ++i) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for (let i = 0; i < arr.length; ++i) {
        process.stdout.write(arr[i] + ' ');
    }
}

let queues = [];
for (let i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
let nums = [];
for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}
console.log('Before radix sort: ');
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('\nAfter radix sort: ');
dispArray(nums);
