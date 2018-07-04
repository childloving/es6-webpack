// ES5 中作用域
const callbacks = [];
for (var i = 0; i <= 2; i++) {
    callbacks[i] = function() {
        return i * 2
    }
}

console.table([
    callbacks[0](),//6
    callbacks[1](),//6
    callbacks[2]()//6
]);


// ES6 中作用域
const callbacks2 = [];
for (let j = 0; j <= 2; j++) {
    callbacks2[j] = function() {
        return j * 2
    }
}

console.table([
    callbacks2[0](),//0
    callbacks2[1](),//2
    callbacks2[2]()//4
])

// 在es3和5中要使用立即执行函数，才能对作用域进行隔离

;((function() {
    const foo = function() {
        return 1
    };
    console.log("foo()===1", foo() === 1);
    ((function() {
        const foo = function() {
            return 2
        };
        console.log("foo()===2", foo() === 2);
    })());
})());

// 在es6中，一对花括号就能对作用域进行隔离。
{
    function foo() {
        return 1
    }

    console.log("foo()===1", foo() === 1);
    {
        function foo() {
            return 2
        }

        console.log("foo()===2", foo() === 2);
    }
    console.log("foo()===1", foo() === 1);
}
