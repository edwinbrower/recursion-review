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
  for (var i = 0; i < json.length; i++) {
    if (json[i] === '[') {
      var start = i;
    }
    //[1,2,["hi"]];
      /*for (var j = i; json[i] !== ']'; j++) {
        parseJSON(j);
      }*/
    //return [];
  }
  







  //return json;
};
