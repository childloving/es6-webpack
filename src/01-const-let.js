/*
// -------------------------------- let是块级作用域
function aa() {
    const bool = false;
    if (bool) {
        let test = 'hello man';
    } else {
        console.log(test);      //报错：test is not defined
    }
}
aa();
*/


//--------------------------------- const也是块级作用域


/*
//--------------------------------- const赋值会报错
const name = 'lux';
name = 'joe';
*/


/*
//--------------------------------- 如果const的是一个对象，对象所包含的值可以被修改；对象所指向的地址不可以修改
const student = {name: 'cc'};
student.name = 'yy';
console.log(student);
student = {name:'yy'};//报错
*/


/*
var funcs = [];
for(var i=0;i<10;i++){
    funcs.push(function(){console.log(i)});
}
funcs.forEach(function(func){
   func();
});*/

/*
var funcs = [];
for(var i=0;i<10;i++){
    funcs.push(
        (function(value){
            return function(){
                console.log(value);
                console.log(i)
            }
        })(i)
    )
}
console.log(funcs);
console.log(funcs[2])
console.log(funcs[3])
funcs.forEach(function(func){
    func();
});*/

/*
//---------------------------- 非闭包环境
function fn1(){
    var a = 0;
    a++;
    console.log(a);
}
fn1();
fn1();
fn1();
*/


/*
//------------------------------ 闭包
function fn1(){
    var a = 0;
    function fn2(){
        a++;
        console.log(a);
    }
    return fn2;
}
var a = fn1();
a();
a();
a();
//弹出1,2,3
*/

/*
//------------------------------- 闭包
function fn1(){
    var a = 0;
    function fn2(){
        a++;
        console.log(a);
    }
    return fn2;
}
fn1()();
fn1()();
fn1()();
//弹出1,1,1，执行3个闭包环境
*/

/*
//-------------------------------------------------- 示例1：非闭包环境。点击按钮，都弹出3
var aInp = document.getElementsByTagName("input");

for (var i = 0; i < aInp.length; i++) {
    aInp[i].onclick = function () {
        console.log(i);
    };
}
//
*/


/*
//--------------------------------------------------- 示例1：ES5闭包环境。改造上面，用闭包获取对应按钮的索引值
var aInp = document.getElementsByTagName("input");

for (var i = 0; i < aInp.length; i++) {
    aInp[i].onclick = (function (index) {

            function fn1() {
                alert(index);
            }

            return fn1;
    })(i);
}
*/

//---------------------------------------------------  示例1：ES5闭包环境。实现效果
/*var aInp = document.getElementsByTagName("input");
for(var i=0;i<aInp.length;i++){
    aInp[i].onclick = fn1(i);
    function fn1(index){
        //console.log(index);
        function fn2(){
            console.log(index);
        }
        return fn2;
    }
}
*/


/*
//---------------------------------------------------- 示例1：ES6。用let，实现效果。更简洁。
const aInp = document.getElementsByTagName("input");
for (let i = 0; i < aInp.length; i++) {
    aInp[i].onclick = function () {
        console.log(i);
    };
}
*/


/*
//----------------------------------------------------- 示例2: 全都获取10
var funcs = [];
for(var i=0;i<10;i++){
    funcs.push(function(){console.log(i)});
}
funcs.forEach(function(func){
    func();
});
*/


/*
//------------------------不用forEach测试下
const funcs = [];
for(let i=0;i<10;i++){
    funcs.push(function(){
        console.log(i);
    })
}
console.log(funcs[4]) // function(){console.log(i)}
funcs[4]() //10
*/


/*
//----------------------------------------------------- 示例2: ES5闭包环境，改造上面示例，使得依次打印0,1,2,3...10
var funcs = [];
for(var i=0;i<10;i++){
    funcs.push(
        (function(value){
            return function(){
                console.log(value)
            }
        })(i)
    )
}

funcs.forEach(function(func,v){
    func();
});
//依次打印0,1,2,3,4...10
*/

/*
//----------------------------------------------------- 示例2: ES6闭包环境，使用let和const，使得依次打印0,1,2,3...10
const funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(
        function () {
            console.log(i)

        }
    )
}
funcs.forEach(function (func) {
    func();
});
*/

