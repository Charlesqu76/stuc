function add(p1) {
   return function(p2) {
     return p1 + p2;
  }
}

console.log(add(1)(1),add(1)(1));
