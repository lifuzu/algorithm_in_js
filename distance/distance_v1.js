

function distance(p1, p2) {
  return Math.sqrt(Math.pow((p1.x-p2.x), 2) + Math.pow((p1.y - p2.y),2))
}

var a = {x: 1, y: 6}, b = {x: 1, y: 5}, c = {x: 2, y: 6}, d = {x: 2, y: 5}, e = {x: 4, y: 5}, f = {x: 4, y: 4}, g = {x: 5, y: 5}, h = {x: 5, y: 4}, i = {x: 8, y: 4}, j = {x: 7, y: 3}, k = {x: 8, y: 3}, l = {x: 7, y:2};
var p1 = {x: 1, y: 2}, p2 = {x: 4, y: 1}, p3 = {x: 7, y: 6};
console.log(distance(p1,a));
console.log(distance(p1,b));
console.log(distance(p1,c));
console.log(distance(p1,d));
console.log(distance(p1,e));
console.log(distance(p1,f));
console.log(distance(p1,g));
console.log(distance(p1,h));
console.log(distance(p1,i));
console.log(distance(p1,j));
console.log(distance(p1,k));
console.log(distance(p1,l));
console.log("----")
console.log(distance(p2,a));
console.log(distance(p2,b));
console.log(distance(p2,c));
console.log(distance(p2,d));
console.log(distance(p2,e));
console.log(distance(p2,f));
console.log(distance(p2,g));
console.log(distance(p2,h));
console.log(distance(p2,i));
console.log(distance(p2,j));
console.log(distance(p2,k));
console.log(distance(p2,l));
console.log("----")
console.log(distance(p3,a));
console.log(distance(p3,b));
console.log(distance(p3,c));
console.log(distance(p3,d));
console.log(distance(p3,e));
console.log(distance(p3,f));
console.log(distance(p3,g));
console.log(distance(p3,h));
console.log(distance(p3,i));
console.log(distance(p3,j));
console.log(distance(p3,k));
console.log(distance(p3,l));
