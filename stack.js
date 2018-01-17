function Stack() {
    this.dataStore = [];
    this.top = 0;
}
Stack.prototype = {
    push: function (element) {
        this.dataStore[this.top++] = element;
    },
    pop: function () {
        return this.dataStore[--this.top];
    },
    peek: function () {
        return this.dataStore[this.top - 1];
    },
    length: function () {
        return this.top;
    },
    clear: function () {
        this.top = 0;
        // delete this.dataStore;
        // this.dataStore = [];
    }
}
Stack.prototype.constructor = Stack;

/*
var s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Bryan');
console.log('length: ' + s.length());
console.log(s.peek());

var popped = s.pop();
console.log('The poped element is: ' + popped);
console.log(s.peek());
s.push('Cynthia');
console.log(s.peek());
s.clear();
console.log('length: ' + s.length());
console.log(s.peek());
s.push('Clyton');
console.log(s.peek());
*/



// 数制间的相互转换
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = '';
    while(s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

/*
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + ' converted to base ' + base + ' is ' + newNum);
num = 125;
base = 8;
var newNum2= mulBase(num, base);
console.log(num + ' converted to base ' + base + ' is ' + newNum2);
*/



// 判断给定字符串是否是回文
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = '';
    while(s.length() > 0) {
        rword += s.pop();
    }
    if (word === rword) {
        return true;
    } else {
        return false;
    }
}

/*
var word = 'hello';
console.log(isPalindrome(word));
word = 'racecar'
console.log(isPalindrome(word))
*/



// 使用栈模拟递归过程
function fact(n) {
    var s = new Stack();
    while (n >= 1) {
        s.push(n--)
    }
    var product = 1;
    console.log(s.dataStore);
    while(s.length() > 0) {
        product *= s.pop();
    }
    return product;
}
console.log(fact(5));