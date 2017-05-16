// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // You should use document.body, element.childNodes, and element.classList
  const nodeList = [];
  const loopThruChildren = function(curr) {
    if (curr.classList !== undefined && curr.classList.contains(className)) {
      nodeList.push(curr);
    } 
    if (curr.hasChildNodes()) {
      curr.childNodes.forEach(child => {
        loopThruChildren(child);
      });
    }
  }; 
  loopThruChildren(document.body);
  return nodeList;
};
