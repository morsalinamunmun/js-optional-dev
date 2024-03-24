//1. what is syntax error?
//2. what type of error will you see? How will you fix it?
function errors(a){
    if(a>5){
        return true;
    }else{
        return false;
    }
}
console.log(errors(5))
//3. When do we get reference error?
//4. What type of an error will this code generate? how will you fix it?
/* function text(){
    var str = "hello world";
    return str;
}
console.log(str); */
//ans:
/* function text(){
    var str = "hello world";
    return str;
}
console.log(text()); */

function text(str){
    var str = "hello world";
    return str;
}
console.log(text());
//5. a) What is wrong with the code below:
/* var foo;
console.log(foo.bar); */
//ans
var foo = {bar: 'monu', tol: 23};
console.log(foo.bar);
//b) What type of error will the code generate?
//c) What is the correct way to write the code?