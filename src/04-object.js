//拓展的对象功能


//------------------------------对象的键值对重名，es6可以简写

//es5
function people(name, age) {
    return {
        name: name,
        age: age
    };
}

//es6
function people(name, age) {
    return {
        name,
        age
    };
}

//--------------------------------对象字面量方法赋值的语法

//es5
var people = {
    name: 'lux',
    getName: function () {
        console.log(this.name)
    }
};


//es6
const man = {
    name: 'lux',
    getName() {
        console.log(this.name);
    }
};


//------------------------------------es6对象提供了Object.assign()这个方法来实现浅复制
//Object.assign()可以把任意多个源对象自身可枚举的属性拷贝给目标对象。


const objA = {name:'cc',age:18};
const objB = {address:'beijing'};
const objC = {};//这个为目标对象
const obj = Object.assign(objC,objA,objB);

// 我们将 objA objB objC obj 分别输出看看
console.log(objA);   // { name: 'cc', age: 18 }
console.log(objB); // { address: 'beijing' }
console.log(objC); // { name: 'cc', age: 18, address: 'beijing' }
console.log(obj); // { name: 'cc', age: 18, address: 'beijing' }

// 是的，目标对象ObjC的值被改变了。
// so，如果objC也是你的一个源对象的话。请在objC前面填在一个目标对象{}
Object.assign({}, objC, objA, objB);

