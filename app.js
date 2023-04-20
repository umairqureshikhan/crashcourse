 
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

// let abc ="hello";//global scope
// function print(){
//     let def="umair"  //local scope
//     // console.log(def)
//     return function (){ // anomynonus function
//         console.log(def)
//     }


// }
    
// console.log(abc)
// let innerfunction =print()
// innerfunction();


//filter
// let arr=["happy","birthday","ameen"]
// let arr=[1,2,4,5,7,8,90,]
// //reduce
// let finalstring = arr.reduce(function(preval,currentval){
//     return  preval + " " +currentval


// })




// //foreach
// // let finalstring= "  ";    
// // arr.forEach(function(val){
// //     finalstring = finalstring +" "+ val

// // })
// console.log(finalstring)
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   persons.map(getFullName);
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 1;
// }

//objects


// let person={
//     name:"umair",          // name:"uamir"= property
//     eyescolor:"blue",        eyescolor'= key,"blue"=value
//     cnic:231241,
//     spoke:function(sentence){
//         console.log(sentence+ this.cnic)
//     }
// }
// person.spoke("hello i am ")
// console.log(person.name)
// // console.log(person.eyescolor)




// let person2={
//     name:"ameen",
//     eyescolor:"blue",
//     cnic:231241,
//     spoke:function(sentence){
//         console.log(sentence+ this.name)
//     }
// }
// person2.spoke("hello i am ")
// console.log(person.name)
//-----------dom
// let mypara=document.querySelector("p");
// mypara.innerHTML ="pakistan zindabad";
// mypara.style.backgroundColor="#000";
// mypara.style.color="#fff"
// console.log(mypara)

// setInterval(function(){
//     if(mypara.style.display =="none"){
//         mypara.style.display ="block"

//     }else{
//         mypara.style.display ="none"
//     }
// ;
// },1000)



// let yourpara=document.querySelector("#yourpara");
// yourpara.innerHTML ="pakistan zindabad";
// yourpara.style.backgroundColor="#000";
// yourpara.style.color="#fff"

// setInterval(function(){
//     let width =  yourpara.style.width;

//     if( width === "100%"){
//         yourpara.style.width= "10%";

//     }
//     else{
//       width= +width.replace("%","")
//       yourpara.style.width=width +10+"%"
//     }

   
//     // yourpara.style.width="50%";
//     // console.log( yourpara.style.width);

// },500)

//---color chnage using dom
let mypara=document.getElementById("mypara");
mypara.innerHTML="hello umair";
setInterval(function(){
    let color1=Math.floor(Math.random() *16777215).toString(16);
    let color2=Math.floor(Math.random() *16777215).toString(16);
    console.log(color1,color2)

    mypara.style.backgroundColor="#" +color1;
    mypara.style.color="#" +color2;

},500)