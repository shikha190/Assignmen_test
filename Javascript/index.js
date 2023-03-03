//variable(let,var,const)
// value(boolean,string,number)

// condition

// let age =19
// if(age>=19){
//     console.log("you are allowed")
// }
// else{
//     console.log("you are not allowed")
// }


let signal ="red"

if(signal=="red"){
    console.log("red=>stop")
}

else if(signal=="yellow"){
    console.log("yellow=>go slow")
}
else if (signal=="green"){
    console.log("green=>go fast ")
}

else {
    console.log("invalid")
}



// switch case

let user = "admin"
switch(user){

   case "admin":
        console.log("i am admin");
        break;
   case "student":
        console.log("i am student");
        break;
   case "mentor":
    console.log("he is mentor");
    break;
    
    default:
    console.log("i am a default");
    
}

// loop
// do while,while,for

for(let i =0; i<5;i++){
    console.log(i)
}

// while(inilization,condition,increment/decrement)
// let i =0;
// while(i<5){
// console.log(i)
// i++
// }

let i =0;
do{
    console.log("hello word")
    i++;
}while(i<5);

// ternary operator
isloggedin=false;
isloggedin ?console.log("home page"):console.log("loginpage")
