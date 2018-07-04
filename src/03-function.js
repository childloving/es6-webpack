//函数


//【01】函数默认参数


/*
//es5
//-----------------------------这里如果action有参数，即返回参数，没有返回200。但下面这么写，如果参数为0，返回不是0而是200。
function action (num){
    num = num || 200;
    //当传入num时，num为传入的值
    //当没传入参数时，num即有了默认值200
    console.log(num);
}
action(0); //200
action(1); //1
action(); //200
*/


/*
//----------------------------es6为参数提供了默认值。在定义函数时便初始化了这个参数，以便在参数没有被传递进去时使用。
function action(num=200){
    console.log(num);
}
action(0);//0
action(1);//1
action();//200
*/


//【02】箭头函数
//不需要function关键字来创建函数
//省略return关键字
//继承当前上下文的this关键字

//es5
[1, 2, 3].map((function (x) {
    console.log(this);  //undefined。strict模式下是undefined。正常是window
    return x + 1;
}).bind(this));

//es6
[1, 2, 3].map(x => x + 1)

//es6 当函数有且仅有一个参数的时候，是可以省略括号的。当函数返回有且仅有一个表达式的时候可以省略{}和return;

var people = name => 'hello' + name;

var people = (name, age) => {
    const fullName = 'hello' + name;
    return fullName;
};

//示例：请使用es6重构以下代码

//es5
var calculate = function (x, y, z) {
    if (typeof x != 'number') {
        x = 0
    }
    if (typeof y != 'number') {
        y = 0
    }
    var dwt = x % y;
    var result;

    if (dwt == z) {
        result = true
    }
    if (dwt != z) {
        result = false
    }
    return result

};

//es6
const calculate = (x, y, z) => {
    x = typeof x !== 'number' ? 0 : x;
    y = typeof y !== 'number' ? 0 : y;
    return x % y === z;
};