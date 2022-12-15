function sum(a,b,c,){
    return a+b+c;
}
console.log(sum(10,20,30,2));

function product (a,b){
    return a*b;
}
console.log(product(13,23));
const bigProduct =product(1234,4321);
console.log(bigProduct);

function modulus(a,b){
    return a%b;
}
console.log(modulus(42,17));
//Anonymus Funcion
setTimeout(function () {
    console.log("Hey! We Will Rock You !!!");
},  5000);
//Arrow ==> function
setTimeout(()=> console.log("Fansy looking arrow ==> function"), 1000);