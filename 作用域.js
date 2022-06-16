// 全局作用域： 整个script表桥，或者是一个单独的js文件

// 局部作用域 再函数内部就是局部作用域


//注意， 函数内部，没有声明直接复制的变量也属于 全局变量

function fun(){

    var num1 = 10; //num1局部变量
    num2 = 20; //num2 没有声明 全局变量
}

fun();
console.log(num2);




//js没有块级作用域 下面这么写是可以的 但是JAVA不行
 if (3 < 5){
     var num = 10;
 }
 console.log(num);


 //作用域链 内部函数访问外部函数的变量，采用的是链式查找

 var num = 10;

 function fn(){

    var num = 20;
    function fun1(){
        console.log(num);
    }
    fun1();
 }

 fn();

 