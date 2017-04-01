##Set数据结构
    
    
    
###1、set数据结构
    ES6提供了新的数据结构Set,类似于数组，但是成员的值都是唯一的，没有重复的值。
    Set本身是一个构造函数，用来生产Set数据结构
            
    
###3、Set实例的属性和方法
    1.Set.prototype.constructor:构造函数 默认就是Set函数
    2.Set.prototype.size:返回的是实例成员的长度
###4、Set实例的两大类方法：操作方法（用于操作数据），遍历方法（用于遍历数据）
    1.数据操作方法：
        1.size:获取实例的成员个数。
        2.add(val):向实例对象添加某个值，返回Set结果本身。
        3.delete(val):从实例对象的成员中删除某个值，删除成功返回true，反之返回false
        4.has(val):检查实例对象的成员中是否包含val值(底层用===判断)，包含返回true，反之返回false
        5.clear():清除实例对象的所有成员，没有返回值。
    2.将set数据结构转换数组的方式
        1.Array.form(set结构)
        2.[...set结构]
    3.遍历操作方法：
        1.keys():返回键名的遍历器
        2.values():返回键值的遍历器
        3.entries():返回键值对的遍历器
        4.forEach():使用回调函数遍历每个成员
    4.set可以用来求数组的（去重）差集，交集，并集    

##WeakSet数据结构
    WeakSet结构和Set类似，也是不重复的值的集合，与Set有两个区别。
    首先，WeakSet的成员只能是对象，而不是其他类型的值
    其次，WeakSet的对象都是弱引用，也就是说，如果其他对象都不在引用该对象，
         那么垃圾回收机制会自动回收改对象所占用的内存，不考虑该对象还存在与WeakSet之中。
         这个特点也就意味着，无法引用WeakSet成员，因此WeakSet不可遍历。
         

###WeakSet结构有以下三个方法。
    WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
    WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
    WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在





##Map数据结构
    javascript的对象(object),本质上是键值对的集合(Hash结构)，但是传统上只能用字符串当做键。
    这给它的使用带来很大的限制，为了解决这个问题，ES6提供了Map数据结构。它类似于对象，也是键值对的集合，
    但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，
    Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。

###Map实例的两大类方法：操作方法（用于操作数据），遍历方法（用于遍历数据）
    1.数据操作方法：
        1.size:获取实例的成员个数。
        2.set(key,val):向实例对象添加某个值，返回Set结果本身。
        3.get(key)
        4.delete(key):从实例对象的成员中删除某个值，删除成功返回true，反之返回false
        5.has(key):检查实例对象的成员中是否包含val值(底层用===判断)，包含返回true，反之返回false
        6.clear():清除实例对象的所有成员，没有返回值。
    2.将set数据结构转换数组的方式
        [...Map结构]
            [...Map.keys()]
            [...Map.values()]
            [...Map] == [...Map.entries()]
    3.遍历操作方法：
        1.keys():返回键名的遍历器
        2.values():返回键值的遍历器
        3.entries():返回键值对的遍历器
        4.forEach():使用回调函数遍历每个成员
















