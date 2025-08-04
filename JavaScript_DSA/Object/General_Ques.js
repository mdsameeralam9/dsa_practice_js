{/**
1. get value from nested Object
2. flat Object 
3. unflattenObject2
4. Two Object compare 
5. get Object from string - getObjectFromString
6. getStringFromObject
7. groupBy
*/}

// 1. get value from nested Object
const obj1 = {
  name: "Md same",
  age: 29,
  add: {
    pincod: "12345",
    home: [{ locat: "Musapur" }, { locat: "Patna", current: "Phulwari" }],
  },
};
function getValueFromKey(obj, keys){
    const splittedKey = keys.split(".");
    let copyObj = {...obj};
    for(const key of splittedKey){
        if(!copyObj.hasOwnProperty(key)){
            return undefined
        }
        copyObj = copyObj[key]
    }
    return copyObj
}
console.log(getValueFromKey(obj1, "add.home.1"));

function getKeyValue(obj, key) {
  const keys = key.split(".");
  let currentValue = obj;

  for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    if (!currentValue.hasOwnProperty(currentKey)) {
      return undefined;
    }
    currentValue = currentValue[currentKey];
  }
  return currentValue;
}
console.log(getKeyValue(obj1, "add.home.1"));

//----------------------------------------------------

// 2. Flat Object
function flatObject(obj, parentKey, seprateKey){
    let res = {};
    for(const key in obj){
        const temKey = parentKey+seprateKey+key;
        if(typeof obj[key] === "object"){
          res = {...res, ...flatObject(obj[key], temKey, seprateKey)}
        } else{
          res[temKey] = obj[key]
        }
    }
    return res
}

// input
const reqObj = {
  name: "Md Sameer",
  age: 30,
  address: {
    city: "Samastipur",
    state: "Bihar",
    education: {
      board: "CBSE",
    },
  },
};
console.log(flatObject(reqObj, "user", "_"))
// output
const reqObjFlat = {
    user_name: "Md Sameer",
    user_age: 30,
    user_address_city: "Samastipur",
    user_address_state: "Bihar",
    user_address_state_education_board: "CBSE"
}

//----------------------------------------------------

// 3. unflattenObject2
const reqObjFlat2 = {
    user_name: "Md Sameer",
    user_age: 30,
    user_address_city: "Samastipur",
    user_address_state: "Bihar",
    user_address_state_education_board: "CBSE"
};
function unflattenObject2(flatObj) {
    const result = {};

    for (const key in flatObj) {
        const keys = key.split('_');
        console.log(keys)
        let current = result;

        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];

            // If it's the last key, assign the value
            if (i === keys.length - 1) {
                current[k] = flatObj[key];
            } else {
                // If the next key doesn't exist, create an empty object
                if (!current[k] || typeof current[k] !== 'object') {
                    current[k] = {};
                }
                current = current[k];
            }

            
        }
    }

    return result;
}
console.log(unflattenObject2(reqObjFlat2));


// 4. Object compare 
function arePropsEqual(obj, obj2) {
 // check for null or undefined
 if(obj === null || obj2 === null || obj === undefined || obj2 === undefined){
    return obj === obj2;
 }

 // check for object type
 if(typeof obj !== typeof obj2){
    return false
 }

 // primative value
 if(typeof obj !== "object"){
    return obj === obj2; 
 }

 // arrya
 if(Array.isArray(obj) && Array.isArray(obj2)){
   if(obj.length !== obj2.length) return false;

   for(let i=0; i<obj.length; i++){
    if(!arePropsEqual(obj[i], obj2(i))){
        return false;
    }
   }

   return true
 }

 //object
 if(Object.keys(obj).length !== Object.keys(obj).length){
   return false;
  }

  for(let key in obj){
    if(!arePropsEqual(obj[key], obj2[key])){
        return false
    }
  }

  return true;
}
//------------------------------------------

// 5. getObjectFromString
function getObjectFromString(str){
    const splittedValue = str.split(".");
    return splittedValue.reduceRight((a,b) => {
        return {[b]: a}
    })
}

function getObjectFromString(str){
    const splittedValue = str.split(".");
    const value = splittedValue.pop();
    let result = {}
    const keysLength = splittedValue.length-1
    for(let i=keysLength; i>=0; i--){
        let current = {}
        const key = splittedValue[i]
 
        if(i === keysLength){
          current[key] = value
        } else{
          current[key] = {...result}  
        }
        result = current

    }
    return result
}
console.log(getObjectFromString("a.b.c.d.e"));

// 6. getStringFromObject
function getStringFromObject(obj) {
  let str = "";
  const getKey = (ob) => {
    for (const key in ob) {
      str += `${key}.`;
      if (typeof ob[key] === "object") {
        getKey(ob[key]);
      } else {
        str += `${ob[key]}`;
      }
    }
  };

  getKey(obj);
  return str;
}

function getObjFromString(str){
  const splittedValue = str.split(".");
  let result = {}
 
  for(let i=splittedValue.length-2; i >=0; i--){
    const key = splittedValue[i];
    const tempObj = {}
    if(i === splittedValue.length-2){
      const value = splittedValue.at(-1);
      tempObj[key] = value;
      result = {...tempObj}
    } else {
      tempObj[key] = {...result}
      result = {...tempObj}
    }
  }
  return result
}

console.log(
  getStringFromObject({
    a: {
      b: {
        c: {
          d: "e",
        },
      },
    },
  })
);

// ---------------------------------------------------

// 7. groupBy
function groupBy(arr, key) {
    const result = {};
    for (const item of arr) {
        const keyValue = item[key];
        if (!result.hasOwnProperty(keyValue)) {
            result[keyValue] = [];
        }
        result[keyValue].push(item);
    }
    return result;
}

// Example 1:
const users = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 25 }
];
groupBy(users, 'age');
// Output: {
//'25': [{ name: 'Alice', age: 25 }, {
//'30': [{ name: Bob', age: 30]}]
// }