function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(selector){
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelectorAll('#grand-node').last
}
