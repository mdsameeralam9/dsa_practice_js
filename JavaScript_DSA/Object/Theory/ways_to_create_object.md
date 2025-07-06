### 1. Object.create()

#### A. What:
 - The `Object.create()` creates an object from an existing object.and Returned created Object
 ```js
 // Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";
 ```

 - `Object.create(object, properties)`
 - `object`: `Required`: An existing object.
 - `properties`: `optional`: A descriptor of properties to be added or changed:
```js
    value: value
    writable : true|false
    enumerable : true|false
    configurable : true|false
    get : function
    set : function


    const obj = Object.create({}, {
        name: {
        value: "Sameer",
        writable: false,
        enumerable: true,
        configurable: true,

        }
    });
    console.log(obj.name); // "Sameer"
    obj.name = "Ali"; // Won't change because writable is false



    const obj = Object.create({}, {
  _name: {
    value: 'Sameer',
    writable: true,
    enumerable: false,
    configurable: true
  },
  name: {
    enumerable: true,
    configurable: true,
    get: function () {
      return this._name;
    },
    set: function (val) {
      this._name = val;
    }
  }
});

console.log(obj.name); // "Sameer"
obj.name = "Ali";
console.log(obj.name); // "Ali"


```
##### property descriptors
 - `property descriptors`: are objects that describe the attributes of a property on an object. They allow you to control how a property behaves—whether it can be changed, enumerated, or configured.

 - There are `two main types` of property descriptors:
 - ###### 1. `Data Descriptors`: These describe a property that has a value.
```js
   ` Attributes:`
    - `value`: The actual value of the property.
    - `writable`: true if the value can be changed.
    - `enumerable`: true if the property shows up during enumeration (like in for...in or Object.keys()).
    - `configurable`: true if the property can be deleted or changed (descriptor can be modified).



// with single key name
-  `Object.defineProperty()` is a method used to add or modify a property directly on an object, with precise control over its behavior.
const obj = {};
Object.defineProperty(obj, 'name', {
  value: 'Sameer',
  writable: true,
  enumerable: true,
  configurable: true
});

// with multiple keys
const obj = {};
Object.defineProperties(obj, {
  name: {
    value: 'Sameer',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  },
  city: {
    value: 'Bangalore',
    writable: true,
    enumerable: true,
    configurable: true
  }
});
```

 - ###### 2. Accessor Descriptors
  - These describe a property defined by a getter and/or setter function.

```js
  - `get`: A function that returns the property value.
  - `set`: A function to set the property value.

const obj = {
  internalValue: 0
};

Object.defineProperty(obj, 'value', {
  get() {
    return this.internalValue;
  },
  set(val) {
    this.internalValue = val;
  },
  enumerable: true,
  configurable: true
});
```


#### definations
- A `property` is a key-value pair in an object.
- `Properties` are all the key-value pairs that make up the object.

- prototype

- 🔹  What is __proto__?
- [Every JavaScript object has an internal property called [[Prototype]], which can be accessed using __proto__ (though it's not recommended for production use).

It points to the object's prototype, i.e., the object it inherits from.]

- 🔹 What is the Prototype Chain?
The prototype chain is how JavaScript resolves property lookups. If a property is not found on the object itself, JavaScript looks up the chain via __proto__.