// destructuring in js
//[a,b] = [34,564];
//console.log(a,b)

//[a,b,c,...d] = [66,101,19d,22,2219,1922,1,5,4,]
//console .log (a,b,c,d)

//array destructuring
//({a,b,c,...d} = {a:34, b:356, c:52, d:45, e:34})
//console.log(a,b,c,d)

//const fruits = ['apple','Mangos','grapes'];
//[a,b,c] = fruits;
//console.log(a,b,c)

//object destructuring
laptop = {
    model: "acer 765",
    warranty : "01 year",
    color : "black",
}
const {model,warranty,color,start,net} = laptop
console.log(model,warranty,color,net)


//advantages of object destructuring
//makes programing easy,
//improves readability,
//reduces lines of code