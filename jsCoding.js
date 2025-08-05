// pollyfill for Object methods
// 1. keys, values

const obj = {
    name: "Md Sameer",
    age: 31,
    education: {
       degree: "B.com",
       university: "University Of Calcutta"
    },
    address: [{village: "Musapur"}, {village: "Patna"}]
}

console.log(Object.keys(obj))
console.log(Object.values(obj))

function myKeys(obj){
    let keys = [], values = [];
   for(let key in obj){
    keys.push(key)
      values.push(obj[key])
   }
    return {keys, values}
}


console.log(myKeys(obj))