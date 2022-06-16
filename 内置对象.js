
Math.max(1,2,3);

// 利用对象封装自己的数学对象

var myMath = {
    PI: 3.14,
    max: function(){
        var max = arguments[0];
        for(var i = 1;i < arguments.length;i++){
            if(arguments[i] > max);
        }
        return max;
    }
}

console.log(myMath.max(1,5,3));


//日期对象
var date =  new Date();

date.getFullYear();
date.getMonth();   // +1 才是实际的月份 看MDN的文档


console.log(date.valueOf()); // 毫秒数


// 数组对象

var arr = [1,2,3];

var arr1 = new Array(2,3); //表示数组中有2个元素 2,3

//字符串对象

//检查是否是数组
var arr3 = [];
console.log(arr3 instanceof Array);

//另一种方式检查
Array.isArray(arr3);



//添加删除数组元素的方法
arr3.push(1);  //末尾插入
arr3.unshift(10); //开头插入
// push,unshift方法执行后返回值是新数组的长度

arr3.pop() //删除数组最后一个元素，返回值是删除的元素
arr3.shift() //删除第一个 


//数组排序


var arr4 = [12,4,77,1,7];
arr4.sort(function(a,b) {
    return a - b;
});
console.log(arr4);


//数组去重 封装一个去重的函数

function unique(arr){
    var newArr = [];
    for(var i = 0; i< arr.length ; i++){
        if(newArr.indexOf(arr[i] === -1)){
            newArr.push(arr[i]);
        };
    }
    return newArr;
}
var demo = unique(['a','b','a']);
console.log(demo);


