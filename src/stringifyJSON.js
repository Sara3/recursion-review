// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if obj 
  const arrEls = [];
  const mObject = [];
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj + '';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return '[]';
    } else {
      obj.forEach(item => {
        arrEls.push(stringifyJSON(item));
      });
      return '[' + arrEls + ']';
    }
  } else if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {  
      return '{}';
    } else {
      // put values into objArr
      for (let key in obj) {
          // if value is undefined do the following
        if(obj[key] !== undefined && typeof obj[key] !== 'function') {
          mObject.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
        }
      }
      return '{' + mObject + '}';
        // iterate thru obj
          // if (value is function)
            // do nothing
          // if (value is array)
          //if object => arr-> "key"+":"+"stringify(obj[key])"
      // {"a":"apple","b":"banana"}
    //return '{'+obj+'}'

    }
  }

  //objecst -> nested objecst
  // functions¡¡¡
};
