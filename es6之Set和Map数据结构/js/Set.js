'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//栗子1  set函数可以接受一个数组（或类似数组的对象）作为参数，来初始化。
var s1 = new Set([2, 3, 5, 4, 2, 4, 90]);
(_console = console).log.apply(_console, _toConsumableArray(s1)); /*扩展运算符(...)内部使用for...of循环,也可以用于set解构*/

//栗子2  可以初始化一个Set对象 然后用add方法添加成员
var s = new Set();
[2, 3, 5, 4, 2, 4, 90].forEach(function (i) {
    return s.add(i);
});
console.log(s);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var j = _step.value;

        console.log(j); //2,3,5,4,90
    }

    /*想Set对象加入值得时候，不会发生类型转换，所以5与'5'是两个不同的值，set内部判断两个值是否不同，使用的
    * 类似于精确相等运算符（===），主要区别是NaN等于自身，而精确运算符认为NaN不等于自身*/

    /*=======  1、Set实例对象的操作数据方法）======*/
    //add()方法 添加成员
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var s2 = new Set();
s2.add(1);
s2.add('1');
s2.add(1);
s2.add(3);
s2.add(5);
console.log(s2.size); //4 重复的1 没有在继续添加了

s2.add(NaN);
s2.add(NaN);
console.log(s2.size); //5 在Set对象中NaN与NaN对象是相等的

//delete()方法 删除某个成员

console.log(s2.delete(1)); // true 删除成功返回true
console.log(s2.delete(3)); // false 删除成功返回false


//has()方法 检查是否含有某个属性

console.log(s2.has(NaN)); // 返回true
console.log(s2.has('abc')); // 返回false


//delete（）删除所有成员
s2.clear();
console.log(s2.size); //0

/*=======  2、将Set实例对象转换为数组的方法）======*/
// 将set解构转换为数组的方法  Array.form()  或者是 ...扩展运算符
var s3 = new Set([2, 3, 4, 3, 6, 8, 'a', 'v', ['a', 'b', 'c']]);
console.log([].concat(_toConsumableArray(s3)));
console.log(Array.from(s3));

/*=======  3、对Set实例对象遍历操作方法  ======*/

//keys(); 返回键名的遍历器
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = s3.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var i = _step2.value;

        console.log(i);
    }

    //values(); 返回键值的遍历器
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = s3.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var v = _step3.value;

        console.log(v);
    }

    //entries();返回键值对的遍历器
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = s3.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var a = _step4.value;

        console.log(a);
    }

    //forEach(); 使用回调函数遍历每个成员
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

s3.forEach(function (val, item, arr) {
    console.log(val, item, arr); //分别是键值 键名 s3本身
});

/*=========  遍历的应用 =========*/

/*扩展符（...）内部使用 for of 循环，所以也可以用于Set结构*/
/*这样数组的map 与filter方法都可以用于Set了*/

var s4 = new Set([].concat(_toConsumableArray(s3)).map(function (val, item, arr) {
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
        val += 2;
    }
    return val;
}));
console.log([].concat(_toConsumableArray(s4))); //[4, 5, 6, 8, 10, "a2", "v2", Array[3]]

var s5 = new Set([].concat(_toConsumableArray(s3)).filter(function (val, item, arr) {
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
        return true;
    }
}));
console.log([].concat(_toConsumableArray(s5))); //[2,3,4,6,8,'a','v']

/* 可以使用Set可以很容易的实现病机，交集，差集*/

var s6 = new Set([1, 2, 3, 4]);
var s7 = new Set([3, 4, 5, 6]);
//并集
var s8 = new Set([].concat(_toConsumableArray(s6), _toConsumableArray(s7)));
console.log([].concat(_toConsumableArray(s8)));
//交集
var s9 = new Set([].concat(_toConsumableArray(s6)).filter(function (val, item) {
    if (s7.has(val)) {
        return true;
    }
}));
console.log([].concat(_toConsumableArray(s9)), s9.size);
//差集
var s10 = new Set([].concat(_toConsumableArray(s6), _toConsumableArray(s7)).filter(function (val, item) {
    if (!s7.has(val) || !s6.has(val)) {
        return true;
    }
}));
console.log([].concat(_toConsumableArray(s10)));