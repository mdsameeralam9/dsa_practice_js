//Object.keys()
if (!Object.keysPolyfill) {
    Object.keysPolyfill = function(obj) {
        const keys = [];
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                keys.push(key);
            }
        }
        return keys;
    };
}
//Object.values()
if (!Object.valuesPolyfill) {
    Object.valuesPolyfill = function(obj) {
        const values = [];
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                values.push(obj[key]);
            }
        }
        return values;
    };
}
