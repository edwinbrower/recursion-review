// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //debugger;
  if (obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    return '[' + obj.map(stringifyJSON) + ']';
  }
  if (typeof obj === 'object') {

    var objArray = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      } else { 
        objArray.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + objArray + '}';
  }
  return '' + obj;
};
