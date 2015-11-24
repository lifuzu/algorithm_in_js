

function distance(p1, p2) {
  return Math.sqrt(Math.pow((p1.x-p2.x), 2) + Math.pow((p1.y - p2.y),2))
}

var a = {x: 1, y: 6}, b = {x: 1, y: 5}, c = {x: 2, y: 6}, d = {x: 2, y: 5}, e = {x: 4, y: 5}, f = {x: 4, y: 4}, g = {x: 5, y: 5}, h = {x: 5, y: 4}, i = {x: 8, y: 4}, j = {x: 7, y: 4}, k = {x: 8, y: 3}, l = {x: 7, y:3};
//var p1 = {x: 1, y: 1}, p2 = {x: 2, y: 2}, p3 = {x: 3, y: 3};
//var p1 = {x: 1, y: 1}, p2 = {x: 2, y: 2}, p3 = {x: 4.5, y: 4.5};
//var p1 = {x: 1, y: 1}, p2 = {x: 1, y: 5}, p3 = {x: 4.8, y: 4.5};
var p1 = {x: 1, y: 1}, p2 = {x: 1.5, y: 5.5}, p3 = {x: 6, y: 4};
console.log('a: '+distance(p1,a));
console.log('b: '+distance(p1,b));
console.log('c: '+distance(p1,c));
console.log('d: '+distance(p1,d));
console.log('e: '+distance(p1,e));
console.log('f: '+distance(p1,f));
console.log('g: '+distance(p1,g));
console.log('h: '+distance(p1,h));
console.log('i: '+distance(p1,i));
console.log('j: '+distance(p1,j));
console.log('k: '+distance(p1,k));
console.log('l: '+distance(p1,l));
console.log("----")
console.log('a: '+distance(p2,a));
console.log('b: '+distance(p2,b));
console.log('c: '+distance(p2,c));
console.log('d: '+distance(p2,d));
console.log('e: '+distance(p2,e));
console.log('f: '+distance(p2,f));
console.log('g: '+distance(p2,g));
console.log('h: '+distance(p2,h));
console.log('i: '+distance(p2,i));
console.log('j: '+distance(p2,j));
console.log('k: '+distance(p2,k));
console.log('l: '+distance(p2,l));
console.log("----")
console.log('a: '+distance(p3,a));
console.log('b: '+distance(p3,b));
console.log('c: '+distance(p3,c));
console.log('d: '+distance(p3,d));
console.log('e: '+distance(p3,e));
console.log('f: '+distance(p3,f));
console.log('g: '+distance(p3,g));
console.log('h: '+distance(p3,h));
console.log('i: '+distance(p3,i));
console.log('j: '+distance(p3,j));
console.log('k: '+distance(p3,k));
console.log('l: '+distance(p3,l));

//p1 = {x: (a.x+b.x+c.x+d.x)/4, y: (a.y+b.y+c.y+d.y)/4}
//p2 = {x: (f.x+l.x)/2, y: (f.y + l.y)/2}
p3 = {x: (a.x+b.x+c.x+d.x+e.x+f.x+g.x+h.x+i.x+j.x+k.x+l.x)/12, y:(a.y+b.y+c.y+d.y+e.y+f.y+g.y+h.y+i.y+j.y+k.y+l.y)/12}
console.log(p1)
console.log(p2)
console.log(p3)

//p1 = {x: (a.x+b.x+c.x+d.x)/4, y: (a.y+b.y+c.y+d.y)/4}
p2 = {x: (b.x)/1, y: (b.y)/1}
p3 = {x: (a.x+c.x+d.x+e.x+f.x+g.x+h.x+i.x+j.x+k.x+l.x)/11, y:(a.y+c.y+d.y+e.y+f.y+g.y+h.y+i.y+j.y+k.y+l.y)/11}
console.log(p1)
console.log(p2)
console.log(p3)

p2 = {x: (a.x+b.x+c.x+d.x)/4, y: (a.y+b.y+c.y+d.y)/4}
p3 = {x: (e.x+f.x+g.x+h.x+i.x+j.x+k.x+l.x)/8, y:(e.y+f.y+g.y+h.y+i.y+j.y+k.y+l.y)/8}
console.log(p1)
console.log(p2)
console.log(p3)
