//更方便的数据访问--解构

/*
//es5
const people = {
    name: 'lux',
    age: 20
};
const name = people.name;
const age = people.age;
console.log(name + '---' + age); //'lux---20'
*/

//es6

//对象
const people = {
    name: 'lux',
    age: 20
};
const {name, age} = people;
console.log(`${name}---${age}`);

//数组
const color = ['red', 'blue'];
const [first, second] = color;
console.log(first);//'red'
console.log(second);//'blue'


//面试题-请使用es6重构一下代码


//第一题
//es5
var jsonParse = require('body-parser').jsonParse;

//es6
import {jsonParse} from 'body-parser';


//第二题
//es5
var body = request.body;
var username = body.username;
var password = body.password;

//es6
const {body, body: {username, password}} = request;