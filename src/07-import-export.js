//import 和 export

//------------------全部导入
//import people from './example';


//有-----------------一种特殊情况，即允许你将整个模块当作当以对象进行导入
//该模块的所有导出都会作为对象的属性存在

/*
import * as example from "./example.js";
console.log(example.name);
console.log(example.age);
console.log(example.getName());
*/


//-------------------导入部分
//import {name, age} from './example';

//-------------------导出默认，有且只有一个默认
//export default App


//部分导出
//export class App extend Component {};


//一些总结

//1.当用export default people导出时，就用 import people 导入（不带大括号）

//2.一个文件里，有且只能有一个export default。但可以有多个export。

//3.当用export name 时，就用import { name }导入（记得带上大括号）

//4.当一个文件里，既有一个export default people, 又有多个export name 或者 export age时，导入就用 import people, { name, age }

//5.当一个文件里出现n多个 export 导出很多模块，导入时除了一个一个导入，也可以用import * as example

//01导出常量
//export const sqrt = Math.sqrt;


//02导出函数
// export function square(x) {
//     return x * x
// }


//03 导出接口
// let bar = "stringBar";
// let foo = "stringFoo";
// let fn0 = function(){
//     console.log("fn0")
// };
// let fn1 = function(){
//     console.log("fn1");
// };
// export{bar,foo,fn0,fn1}


//04 导出接口时修改名称
// let fn0 = function(){
//     console.log("fn0");
// };
// let obj0 = {};
//
// export {fn0 as foo, obj0 as bar};



//05导出匿名接口。 如果一个js模块文件就只有一个功能，那么就可以使用export default导出。
// export default "string";


//06 export也能默认导出函数，在import的时候名字随便写。因为每一个模块的默认接口就一个
// let fn  = () => "string";
// export { fn as default };

//07 使用通配符*，重新导出其他模块的接口（其实就是转载文章，然后不注明出处）
// export * from "./other";


//08 在import的时候可以使用通配符*导入外部的模块
// let fn = "fn_string";
// let foo = () => "foo_string";
// export {fn,foo};


