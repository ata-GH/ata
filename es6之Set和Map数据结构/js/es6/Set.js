
//栗子1  set函数可以接受一个数组（或类似数组的对象）作为参数，来初始化。
var s1=new Set([2,3,5,4,2,4,90]);
console.log(...s1); /*扩展运算符(...)内部使用for...of循环,也可以用于set解构*/

//栗子2  可以初始化一个Set对象 然后用add方法添加成员
const s=new Set();
[2,3,5,4,2,4,90].forEach(i=>s.add(i));
console.log(s);

for(let j of s){
    console.log(j);//2,3,5,4,90
}

/*想Set对象加入值得时候，不会发生类型转换，所以5与'5'是两个不同的值，set内部判断两个值是否不同，使用的
* 类似于精确相等运算符（===），主要区别是NaN等于自身，而精确运算符认为NaN不等于自身*/

/*=======  1、Set实例对象的操作数据方法）======*/
//add()方法 添加成员
var s2=new Set();
s2.add(1);
s2.add('1');
s2.add(1);
s2.add(3);
s2.add(5);
console.log(s2.size);//4 重复的1 没有在继续添加了

s2.add(NaN);
s2.add(NaN);
console.log(s2.size);//5 在Set对象中NaN与NaN对象是相等的

//delete()方法 删除某个成员

console.log(s2.delete(1));// true 删除成功返回true
console.log(s2.delete(3));// false 删除成功返回false




//has()方法 检查是否含有某个属性

console.log(s2.has(NaN));// 返回true
console.log(s2.has('abc'));// 返回false


//delete（）删除所有成员
s2.clear();
console.log(s2.size); //0

/*=======  2、将Set实例对象转换为数组的方法）======*/
// 将set解构转换为数组的方法  Array.form()  或者是 ...扩展运算符
var s3=new Set([2,3,4,3,6,8,'a','v',['a','b','c']]);
console.log([...s3]);
console.log(Array.from(s3));



/*=======  3、对Set实例对象遍历操作方法  ======*/

//keys(); 返回键名的遍历器
for(var i of s3.keys()){
    console.log(i);
}

//values(); 返回键值的遍历器
for(var v of s3.values()){
    console.log(v);
}

//entries();返回键值对的遍历器
for(var a of s3.entries()){
    console.log(a);
}


//forEach(); 使用回调函数遍历每个成员
s3.forEach(function(val,item,arr){
    console.log(val,item,arr);//分别是键值 键名 s3本身
});


/*=========  遍历的应用 =========*/

/*扩展符（...）内部使用 for of 循环，所以也可以用于Set结构*/
/*这样数组的map 与filter方法都可以用于Set了*/

var s4=new Set([...s3].map(function(val,item,arr){
    if(typeof val !== 'object'){
        val+=2;
    }
    return val;
}));
console.log([...s4]);//[4, 5, 6, 8, 10, "a2", "v2", Array[3]]

var s5=new Set([...s3].filter(function(val,item,arr){
    if(typeof val !== 'object'){
        return true;
    }

}));
console.log([...s5]);//[2,3,4,6,8,'a','v']

/* 可以使用Set可以很容易的实现病机，交集，差集*/

var s6=new Set([1,2,3,4]);
var s7=new Set([3,4,5,6]);
//并集
var s8=new Set([...s6,...s7]);
console.log([...s8]);
//交集
var s9=new Set([...s6].filter(function(val,item){
    if(s7.has(val)){
        return true;
    }
}));
console.log([...s9],s9.size);
//差集
var s10=new Set([...s6,...s7].filter(function(val,item){
    if(!s7.has(val) || !s6.has(val)){
        return true;
    }
}));
console.log([...s10]);


