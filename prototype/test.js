var ob1 = {
  foo : 1,
   bar : {
       value : 2   
   }
};
Object.freeze( ob1 );
console.log(ob1)

ob1.foo = 10
ob1 = {}
console.log(ob1)