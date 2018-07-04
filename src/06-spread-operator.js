//展开运算符

//组装对象或者数组

//数组
const color = ['red', 'yellow'];
const colorful = [...color, 'green', 'pink'];
console.log(colorful);//['red,'yellow','green','pink'];

/*
//对象
const alp = {first: 'a', second: 'b'};

const alphabets = {...alp, third: 'c'};    //...alp报错。 对象三个点就报错。应该是该项目webpack配置有问题

console.log(alphabets);
//{ "first": "a", "second": "b", "third": "c"}
*/


//-------------------------------------------有时候我们想获取数组或者对象除了前几项或者除了某几项的其他项

//数组
const number = [1, 2, 3, 4, 5];
const [first, ...rest] = number;
console.log(rest); //2,3,4,5


/*
//对象
const user = {
    username: 'lux',
    gender: 'female',
    age: 19,
    address: 'peking'
};
const {username, ...rest} = user;//同样报错
console.log(rest);//{"address": "peking", "age": 19, "gender": "female"
}
*/



// -----------------------------------------对于 Object 而言，还可以用于组合成新的 Object 。(ES2017 stage-2 proposal) 当然如果有重复的属性名，右边覆盖左边
/*
const first = {
    a: 1,
    b: 2,
    c: 6,
};
const second = {
    c: 3,
    d: 4
};
const total = { ...first, ...second };          //还是报错
console.log(total); // { a: 1, b: 2, c: 3, d: 4 }
*/
