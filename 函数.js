
function getSum(num1,num2){

    var sum = 0;
    for(var i = num1; i <= num2; i++){
        sum += i;
    
    }
    console.log(sum)
}

getSum(1,100);


//函数的返回值格式
function sum(num3,num4){
    return num3 +  num4;
}

var sum;
sum = sum(1,2);


//求任意连个数的 加减乘除 结果
function getResult(n1, n2){
    return [n1+n2, n1-n2, n1*n2,n1/n2];

}

var re = getResult(1,2);
console.log(re);


// arguments的使用
 function fn(){
     console.log(arguments);  //里面存储了所有传过来的实参
 
    //可以for 遍历arguments
    }

 fn(1,2,3);

 //伪数组 1. 具有length 2.按照索引的方式进行存储的 


 //函数的另一种 声明方式
 //2. 函数表达式
 var fun =  function(){
     console.log('我是函数表达式');
 }

 fun();

 