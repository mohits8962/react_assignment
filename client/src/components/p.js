setTimeout(()=>{
console.log("timeout");
},0)

const object = { x: 10, y: (a) => { return a + object.x } }

console.log(object.y(5))
console.log(object.y(5))
setTimeout(()=>{
console.log("timeout 2");
},0)
console.log(object.y(5))
console.log(object.y(5))