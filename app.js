 
 //funtion
//  function greet(a,b){
//     console.log("hello",a)
//  }
 
//  greet("umair");
 
//  greet("nadir");
  
//  greet("abdullagh");
  

// function employe(filno){
//     // console.log("working on file no", filno)
//     return "working on file no", filno

// }
//  let data= employe(57);
//  console.log(data)
//  console.log(data)

// function add(num1,num2){
//     return num1+num2

// }
//  let data =add(5,7)
//  console.log(data);

//recursion
// function writedata(data,times){
//     document.write(data)
//     if(times>1){
//         writedata(data,times-1)
//     }
// }
// writedata("umair ",3)

// function factorial (num){

//     if(num > 1){
//         return num * factorial(num-1)
//     }
//     return 1


// }
// console.log(factorial(89))

//clouser 

let abc ="hello";//global scope
function print(){
    let def="umair"  //local scope
    // console.log(def)
    return function (){ // anomynonus function
        console.log(def)
    }


}
    
// console.log(abc)
let innerfunction =print()
innerfunction();