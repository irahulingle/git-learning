let obj1={name:"Person-1", age:5}
let obj2={age:5, name:"Person-1"};


let res1=JSON.stringify(obj1)
let res2=JSON.stringify(obj2)

// console.log(_.isEqual(res1,res2));

if(res1==res2){
    console.log("True")
}else{
    console.log("False")
}