

if (5 > 3){
    alert('en..');
}else if(5<3){
    alert('a....');
}else{
    alert('aaaa');
}

var num = 10;

num > 5 ? '是的' : '不是';



// switch里的值 和case的值 全等
//没有break 会继续往下执行下一个case

switch(2) {

    case 1:
        console.log('this 1');
        break;
    case 2:
        console.log('this 2');
        break;
    default:
        console.log('none match');

}