const arr = [[1,2,4],[1,2,3],[1,3,4],[1,3,2]] 
const newArr = [];
for (let i of arr){
    newArr.push(i.join(''))
}
newArr.sort((a,b)=>a-b);

let result = [];
for (let i of newArr){
    result = result.concat(Array.from(i))
}
console.log(result);