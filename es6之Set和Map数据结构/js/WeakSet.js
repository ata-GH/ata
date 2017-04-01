'use strict';

/*1、WeakSet的成员必须是对象 若是add其他会报错,
 *实际上，任何具有iterable接口的对象，都可以作为WeakSet的参数。
 */
var ws = new WeakSet();
//ws.add(1);//报错  Invalid value
ws.add([2, 3, 4]);
ws.add([4, 3, 2]);
console.log(ws);

/*2、WeakSet 是一个构造函数 可以接受一个数组或者类似数组的对象作为参数
 *该数组的所有成员都会自动成WeakSet实例对象的成员 但是参数成员必须是对象，
 */
var ws1 = new WeakSet([{ a: 1 }, [1, 2], [3, 4], { f1: function f1() {
    console.log('f1');
  } }]);