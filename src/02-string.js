//模板字符串


//----------【01】 基本的字符串格式化。将表达式直接嵌入字符串中进行拼接。用${}来界定。


//es5
// var name = 'lux';
// console.log('hello'+name);


//es6
// const name = 'lux';
// console.log(`hello ${name}`);    //'hellolux'


//-----------【02】在es5中通过反斜杠(\)来做多行字符串或者字符串一行行拼接。ES6反引号（``）直接搞定

/*
//es5
var msg = "Hi \
man!\
";
console.log(msg);//'Hi man!';
*/


/*
//es6
const template = `<div>
    <span>hello</span>
</div>`;
console.log(template);
*/



//--------------【03】 一些方法：includes，repeat，startsWidth，endsWidth
//1) str.includes('a');
//2) str.repeat(3);
//3) str.startsWidth('a');   str.endsWidth("b");


/*
const str = 'hahay';
console.log(str.includes('y')); //true


const str2 = 'he';
console.log(str2.repeat(3)); //'hehehe'

const str3 = 'hello world!';
console.log(str3.startsWith('hello'));//true
console.log(str3.endsWith('!'));//true
*/

