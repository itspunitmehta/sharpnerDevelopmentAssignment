// var obj = {num:5};
// var student ={
//     fullName : "Punit Mehta",
//     age : 25
// }
// var addToNum = function(a,b,c){
//     return this.num+a+b+c;
// };

// console.log(addToNum.call(obj,1,3,4));//call 
// var arr = [4,5,7];
// console.log(addToNum.apply(obj,arr));// applying array to the function as an arguement

// var bound = addToNum.bind(obj);// binding obj with addToNum function

// console.log(bound(4,5,6));

// var getAge = function(){
//     return this.age;
// }

// console.log(getAge.call(student));//getting age by calling

// var studentAge = getAge.bind(student);//getting age by bind
// console.log(studentAge());


var multiply = function(x,y){
    console.log(x*y);
}

var multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

var multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

var numberMultiply = multiply.bind(this,);
numberMultiply(5,5);

let numMultiply = function(a){
    return function(b){
        console.log(a*b);
    }
}

var multiplyByTwo2 = numMultiply(2);
multiplyByTwo(6);

var multiplyByThree3 = numMultiply(3);
multiplyByThree(7);

var numbMultiply = numMultiply();
numberMultiply(5,9);