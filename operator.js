


var num = 10;

console.log(++num + 10); 



// == 比较 会转型
 console.log(18 == 18);
 console.log(18 == '18');

 // ===  全等 一模一样

 console.log(18 === 18);


 //逻辑与短路运算 如果表达式1为真返回表达式2 ， 如果表达式1为假返回表达式1
 console.log(123 && 456); //456
 console.log(0 && 456); //0


 // 逻辑或  如果表达式1为真返回表达式1 ， 如果表达式1为假返回表达式2


 //逻辑中断很重要 它会影响程序的结果

 var num2 = 0;
 console.log(123 || num2);
 console.log(num2);