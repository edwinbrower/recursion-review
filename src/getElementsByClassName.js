// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//You should use document.body, element.childNodes, and element.classList
// But instead we're going to implement it from scratch:
// [body.targetClassName, div.targetClassName]

var getElementsByClassName = function(className) {
  var results = [];
  var findClass = function(node) {
    if (node.classList !== undefined && node.classList.contains(className)) {
      results.push(node);
    }
    if (node.childNodes.length) {
      node.childNodes.forEach(findClass);
    }
  };
  findClass(document.body);
  return results;
};
