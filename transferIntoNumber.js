//转换为数字型
// 浏览器看到的是黑色的值是字符串.蓝色的数字型

var age = prompt('请输入你的年龄');
// 1.parseInt(变量) 
console.log(parseInt(age));

var floatAge =  parseFloat(3.14);


//Number()函数强制转换

var str = '123';
console.log(Number(str));


//利用算数运算 隐式转换
console.log('12' - 0);