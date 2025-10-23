// let a = 10;
// let b = 20;
// console.log(a+b);

// const c = 13;
// console.log(c);

// primitive data types
// let a = 20;
// let b = null;
// let c = "yognedra";
// let d = Symbol("prerogative");
// let e = true;
// let f = BigInt("89134189246924189");
// let g = undefined;
// console.log(typeof(a));

// non primitive
// const student = {
//     Name:"Yogendra",
//     Age:"23"
// }
// student["marks"]=60
// console.log(student);

// let a = "hello world";
// let  b = "42";
// let result = a + b;
// console.log(result)

// console.log(typeof result)
// let a = 80;
// let b = 70;
// console.log("addition is",a+b)
// console.log("subtraction is",a-b)
// console.log("multiplication is",a*b)
// console.log("division is",a/b)
// console.log("modulus is",a%b)
// console.log("exponential is",a**b)
// console.log("increment is",a++)
// console.log("decrement is",b--)

// let a = 80;
// let b = 70;
// console.log(a+=80)//a=a+80
// console.log(b-=80)//b=b-80
// console.log(b*=80)//b=b*80
// console.log(b/=80)//b=b/80

// let a = 80;
// let b = 70;
// let c = 90;

// console.log(a<b && a>c)

// console.log(typeof(b))
// console.log(a==b)
// console.log(a===b)

// console.log(!false)

// let marks=40;
// marks>33?console.log("pass"):console.log("fail")

// let age = 15;
// if (age>=10 && age<= 20){
//     console.log("the age is between 10 and 20");
// }else{
//     console.log("the age is not between 10 and 20");
// }

// let number = 12;
// if (number%2===0 && number%3===0){
//     console.log("the number is divisible 2 and 3");
// }else{
//     console.log("the number is not divisible");

// }

// let age = 25;
// age>10 && age<20?console.log("the age is between 10 and 20"):
// console.log("the age is not between 10 and 20")


// let a=200;
// a/2 && a/3? console.log("the number is divisible 2 and 3"):
// console.log("the number is not divisible")

// let a ="yogendra"\
// console.log(a.charAt(5))
// console.log(a.toLocaleUpperCase())
// console.log(a.slice(1,4))
// console.log(a.replace('o','u'))
// console.log(a.replaceAll('e','o'))
// console.log("javascript".includes("java"))
// console.log(a.startsWith("yog"))
// console.log(a.endsWith("dra"))
// console.log("  prayagraj   ".trim())
// console.log("s,h,i,v,a,m".split(","))


// CONCATENATION
// let first =' yogendra'
// let last = 'chaurasiya'
// let full = first+ " "+ last;
// console.log(full);

// CONVERTING BETWEEN STRING AND NUMBER
// let num = 100;
// let str = String(num);
// console.log(str)
// console.log(typeof(str))

// let str = "hello world!"
// let num = Number(str);
// console.log(num)
// console.log(typeof(num))

// let a = 10;
// let b ="20"
// let c = a + b;
// console.log(c);
// console.log(typeof c)
// let x = "5" + 10 + 5;
// console.log(x)

// let a = 3;
// let b =  ++a + a++;
// console.log(a, b)

// let fruits = ["mango","banana","apple"]
//  console.log(fruits[0]);

// console.log(fruits.includes("mango"))
// console.log(fruits.indexOf("mango"))
// console.log(fruits.push("grapes"))
// console.log(fruits.pop("mango"))
// console.log(fruits.slice(1,3))

// math object

// console.log(Math.PI)
// console.log(Math.round(4.7))
// console.log(Math.floor(4.7))
// console.log(Math.ceil(4.7))
// console.log(Math.max(3,5,1))
// console.log(Math.min(4,7,2))
// console.log(Math.pow(4,7))
// console.log(Math.sqrt(9))
// console.log(Math.random())
// console.log(Math.random())

//  console.log(Math.floor(Math.random()*100+1))
// for loop
// for(let i=1; i<=5; i++){
//     console.log("count:",i);
// }
// while loop check the condiction  

// let i = 1;
// while (i <= 5){
//     console.log("while count:" , i);
//     i++;
// }
//  do while loop kam se kam ek baar chalega

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while (i<5){
    
// }

// for of loop used for arrays

// let colors=["red","blue","black"];
// for(let color of colors);{
//     console.log(colors);
// }

// for in loop

// for (let i = 0; i<5; i++){
//     if(i===3)break;
//     console.log(i)
// }

// const IntervalId = setInterval(() =>{
//      console.log("yogendra")
// },2000);
// setTimeout(() => {
//     clearInterval(IntervalId)
//     console.log("stopped!!")
// },10000);
// console.log("1");
// setTimeout(() => {
//     console.log("2")
// }, 0);
// console.log("3");

// function OTPfind() {
//     return (Math.floor(Math.random()*1000000))
// }
// console.log(OTPfind());

// console.log(Math.floor(Math.random()*100000))

// const num1 = 100 ;
// const num2 = 20;
// return{num1 , num2}



const header = document.getElementById("header");
console.log(header);