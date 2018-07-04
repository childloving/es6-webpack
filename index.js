// import test from "./src/test"
// import "./src/const"
// import "./src/scope"
// import "./src/arrow-function"
// import "./src/parameter"
// import "./src/proxy"
// test()

// import "./src/01-const-let"
// import "./src/02-string"
// import "./src/03-function"
// import "./src/04-object"
// import "./src/05"
// import "./src/06-spread-operator"

//01 导出常量
// import {sqrt} from "./src/07-import-export"
// console.log(sqrt);


//02 导出函数
// import {square} from "./src/07-import-export";
// console.log(square(3));  //9


//03 导出接口
// import {bar,foo,fn0,fn1} from "./src/07-import-export"
// console.log(bar+"_"+foo);
// fn0();
// fn1();


//04 导出接口时修改名称
// import {foo,bar} from './src/07-import-export';
// foo();
// console.log(bar);


//05导出匿名接口。 如果一个js模块文件就只有一个功能，那么就可以使用export default导出。
// import defaultString from "./src/07-import-export";
// console.log(defaultString);

//06 export也能默认导出函数，在import的时候名字随便写。因为每一个模块的默认接口就一个
// import defaultFn from "./src/07-import-export";
// console.log(defaultFn());//string



// 07 使用通配符*，重新导出其他模块的接口（其实就是转载文章，然后不注明出处）
// import {foo,fnFoo} from "./src/07-import-export";
// console.log(foo);
// console.log(fnFoo());

//08 在import的时候可以使用通配符*导入外部的模块
// import * as obj from "./src/07-import-export";
// console.log(obj);
// console.log(obj.fn);
// console.log(obj.foo());