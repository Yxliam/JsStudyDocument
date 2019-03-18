## JavaScirpt原型到原型链
>基础很重要，下面我们来学习下原型是啥？

在 JavaScript 中，可以通过关键字 new 调用构造函数来创建一个实例对象
```js
    function Person() {

    }
    var person = new Person();
    person.name = 'Xliam';
    console.log(person.name) // Xliam
```
这个例子里我们创建了一个Person 对象，然后new出来了一个实例对象，那么他们是怎么一个过程呢？
## Prototype
每个函数都有一个属性叫做原型(prototype)
```js
     function Person() {

    }
    // prototype是函数才会有的属性
    Person.prototype.name = 'Kevin';
    var person = new Person();
    var person1 = new Person();
    console.log(person.name) // Xliam
    console.log(person1.name) // Xliam
```
那这个函数的 prototype 属性到底指向的是什么呢？

其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person 和 person1 的原型。

那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

## __proto__
这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

```js
    function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

## constructor
constructor，每个原型都有一个 constructor 属性指向关联的构造函数
```js
    console.log(Person === Person.prototype.constructor);
```

### 总结一下
对象有__proto__属性，函数有__proto__属性，数组也有__proto__属性，只要是引用类型，就有__proto__属性，指向其原型。
只有函数有prototype属性，只有函数有prototype属性，只有函数有prototype属性，指向new操作符加调用该函数创建的对象实例的原型对象。

## 原型链
引用类型皆对象，函数也是对象，那么函数对象的原型链是怎么样的呢？

对象都是被构造函数创建的，函数对象的构造函数就是Function

```js
    let fn = function() {}
// 函数（包括原生构造函数）的原型对象为Function.prototype
fn.__proto__ === Function.prototype // true
Array.__proto__ === Function.prototype // true
Object.__proto__ === Function.prototype // true

```
Function.prototype也是一个普通对象，所以Function.prototype.__proto__ === Object.prototype

这里有一个特例，Function的__proto__属性指向Function.prototype。

总结一下：函数都是由Function原生构造函数创建的，所以函数的__proto__属性指向Function的prototype属性

### 知识点：
1. 引用类型都是对象，每个对象都有原型对象。

2. 对象都是由构造函数创建，对象的__proto__属性指向其原型对象，构造函数的prototype属性指向其创建的对象实例的原型对象，所以对象的__proto__属性等于创建它的构造函数的prototype属性。

3. 所有通过字面量表示法创建的普通对象的构造函数为Object

4. 所有原型对象都是普通对象，构造函数为Object

5. 所有函数的构造函数是Function

6. Object.prototype没有原型对象








