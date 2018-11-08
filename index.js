function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(selector){
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelectorAll('#grand-node')
}
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
