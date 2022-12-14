const cookie = {
   name: "Chockolotos chipos",
   isGlutenFree: false,
   isPackaged:true,
   "+Yummy" :true,
   eatCookie : function (){
console.log("I am eating " +this.name+  "  HMMM its yummy "+this["+Yummy"]);
   }
};
cookie.name = "Tarantula gingerbread";
cookie.isPackaged=false;
// console.log(cookie["+Yummy"]);
// console.log(cookie);
cookie.eatCookie();
class Cookie {
    constructor (name, isGlutenFree, isPackaged, ) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
        this.isPackaged = isPackaged;
    }
eatCookie( ){
console.log("I was eating " + this.name + " cookie in The CLASS." )
}
}
const myCookie = new Cookie("Oreo", false, false);
console.log(myCookie);
myCookie.eatCookie();