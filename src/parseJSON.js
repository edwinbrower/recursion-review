// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //debugger;
  /*var stringed = '"' + json + '"';
  for (var i = 1; i < stringed.length - 1; i++) {
    if (json[i] === '\'') {
      json[i] = '';
    }
  }
  return json;*/
  /*if (typeof json !== 'string') {
    return 'SyntaxError';
  }*/
  var start, end;
  //var end;
  for (var i = 0; i < json.length; i++) {
    if (json[i] === '[') {
      start = i;
    }
    break;

    //[1,2,["hi"]];
      /*for (var j = i; json[i] !== ']'; j++) {
        parseJSON(j);
      }*/
    //return [];
  }
  for (var i = json.length - 1; i > 0; i--) {
    if (json[i] === ']') {
      end = i;
    }
    break;
  }
  var arr = [];
  if (json.slice(start + 1, end).length) {
    arr.push(json.slice(start + 1, end).split(', '));
  }
  return arr;
  //return json.slice(start + 1, end);







  //return json;
};
