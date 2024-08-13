//Spread Oprator, Rest Oprator, Three Dot(...)
let a = [10,20,30]
let k = [5,4,...a,10]
let test = "Ashok Prajapati"
function display(a,b,c) {
    console.log(k);
    console.log([...test]);
    
    console.log("A =",a,"B =",b,"C =",c);
}
function named(firstname,lastname,...other) {
    console.log("Welcome",firstname,lastname);
    console.log("Your Other name are =",other);
}
display(...a)
named("Ashok","Prajapati","Ash","Ladu","Bhaibandh")

const Jadu = () => {
    console.log("hello",a);
}
Jadu();