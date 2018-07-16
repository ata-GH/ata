'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*JavaScript的对象（Object），本质上是键值对的集合（Hash结构），但是传统上只能用字符串当作键。*/
var o = {};
var element = document.getElementsByTagName('div');
console.log(element.toLocaleString()); //[object HTMLCollection]

o[element] = 'divElemnt'; /*中括号运算符可以用'字符串变量'的内容作为属性名。点运算符不能。*/
console.log(o, o['[object HTMLCollection]']); //Object {[object HTMLCollection]: "divElemnt"} "divElemnt"
/*Map 类似于对象的数据结构，也就是键值对的集合，但是'键'的范围不限于字符串，
 *各种类型的值（包括对象）都可以作为键*/

/*1、Map作为构造函数 可以接受一个数组作为参数，该数组的成员是一个个键值对的数组*/
var map = new Map([['name', '张三'], ['age', 18]]);
console.log(map);
/*相当于执行了下面这个算法*/
var items = [['name', '张三'], ['age', 18]];
var map0 = new Map();
items.forEach(function (_ref, item) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    map0.set(key, value);
});
console.log(map0.has('name'), map0.get('name'), map0.delete('name'), map0.size);

/*2、Map可以使用对象做为一个键，然后使用get方法读取这个键*/
var map1 = new Map();
map1.set(o, '对象o');
console.log(map1.has(o)); //true
console.log(map1.get(o)); //对象o
console.log(map1.delete(o)); //true


/*3、（键除非严格相等===，否则被认为是不同的键）多次对同一个键多次赋值，后面的值将会覆盖前面的值*/
var map2 = new Map();
map2.set(true, 'map2');
map2.set('true', 'map2');
map2.set(1, 'map2');
map2.set(1, 'other');
console.log(map2.size, map2.get(1), map.get('2')); //3 "other" undefined


/*======== map的遍历方法  =========*/
var map5 = new Map([['name', '张三'], ['age', 30], ['sex', 'male'], ['job', 'it']]);

//keys();返回键名的遍历器
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map5.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var k = _step.value;

        console.log(k);
    }

    //values();返回键名的遍历器
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map5.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var v = _step2.value;

        console.log(v);
    }

    //entries();返回键值对的遍历器
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
    for (var _iterator3 = map5.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            key = _step3$value[0],
            value = _step3$value[1];

        console.log(key, value);
    }
    /*等同于*/ /*Map结构的默认遍历器接口(Symbol.iterator属性)，就是entries方法*/
    /*for(var [key,value] of map5){
        console.log( key,value);
    }
    */

    //forEach();使用回调函数遍历每个成员
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

map5.forEach(function (val, item) {
    console.log(val, item);
    /*30 "age"
     *male sex
     *it job
     */
});

/*======   Map结构转为数组结构，比较快速的方法是结合使用扩展运算符(...)  ======*/
console.log([].concat(_toConsumableArray(map5.keys())), [].concat(_toConsumableArray(map5.values())), [].concat(_toConsumableArray(map5)), [].concat(_toConsumableArray(map5.entries())));

/*======     Map与其他数据结构的互相转换    ======*/

//1、Map转为数组 ，最方便的就是扩展运算符 （...）
console.log([].concat(_toConsumableArray(map5.keys())));

//2、数组转为Map 将数组传入Map构造函数，就可以转为Map。
var map6 = new Map([['name', '张三'], ['age', 30]]);

//3、Map转为对象 如果所有的Map的键都是字符串，她可以转为对象
function strMapToObj(strMap) {
    var obj = Object.create(null);
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = map6[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step4$value = _slicedToArray(_step4.value, 2);

            key = _step4$value[0];
            value = _step4$value[1];

            obj[key] = value;
        }
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

    console.log(strMap);
    return obj;
}
var objReturn = strMapToObj(map6);
console.log(map6, objReturn);