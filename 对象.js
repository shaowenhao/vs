// 利用字面量 创建对象

// 利用 new Object 创建对象

// 利用构造函数创建对象


var obj = {}; //创建一个空的对象

var obj2 = {
    uname:'shaowenhao',
    sex: 'man',
    age: 18,
    sayHi: function(){
        console.log('hi');
    }
}


// 1. 里面的属性或者方法 我们采取键值对
// 2. 多个属性或者方法中间使用逗号隔开
// 3.  方法冒号后面跟的是一个匿名函数

// 2.使用对象
// 1. 调用对象的属性
console.log(obj2.uname);

// 调用属性另一种方法 对象名['属性名']
console.log(obj2['age']);

// 调用对象的方法
obj2.sayHi();


//创建对象的三种方式 new Object创建对象
 var obj3 =  new Object();
 obj3.uname = 'duxiaodan';
 obj3.age = 18;
 obj3.sex = "woman";
 obj3.sayHi2 = function(){
     console.log('Hi');
 }



 // 构造函数 创建对象

 // 构造函数的语法格式：
 function 构造函数名(){
     this.属性 = 值;
     this.方法 = function(){

     }
 }

 new 构造函数名();
 // 构造函数名字首字母大写



 function Star(uname,age,sex){
     this.name = uname;
     this.age = age;
     this.sex = sex;
     this.sing = function(song){
         console.log(song);
     }
 }

 var ldh = new Star('liudehua',18,'man');
console.log(typeof ldh); //object
console.log(ldh.name);
console.log(ldh['sex']);

ldh.sing('bingyu');



//new关键字执行过程
// 1. new 构造函数可以再内存中创建一个空对象
// 2. this 就会只想刚才创建的空间
// 3. 执行构造函数里的代码 给空对象添加 属性和方法
// 4. 返回这个对象




// 遍历对象属性
// for...in 用于数组或者对象的属性进行循环操作

for(var key in ldh){
    console.log(key); //key遍历 输出得到的是 属性名
    console.log(ldh[k]); // ldh[key] 得到的是属性值
}



