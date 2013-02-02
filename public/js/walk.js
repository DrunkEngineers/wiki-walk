function iterate(title, state, callback) {
  readPageData(title, function(error, response) {
    if(error)
    {
      alert("Error!");
    }
    else
    {
      var node = buildNode(response);
      var nextState = getNextState(node, state);

      if(nextState.shouldContinue)
      {
        console.log(node.name);
        for (var i = 0; i < node.childLinks.length - 1; i++) {
          iterate(node.childLinks[i].title, nextState, function(childNode) {
            node.children.push(childNode);
          })
        };
      }

      callback(node);
    }      
  });
}

function buildNode(pageData) {
  var node = {
    name: pageData.query.pages[pageData.query.pageids[0]].title,
    childLinks: pageData.query.pages[pageData.query.pageids[0]].links,
    children: [],
    url: "http://en.wikipedia.org/wiki/" + name
  };

  return node;
}

function getNextState(node, state) {
  var nextDepth = state.depth + 1;
  var nextAlreadyVisited = pageTable[node.title] != null;

  var nextState = {
    depth: nextDepth,
    alreadyVisited: nextAlreadyVisited,
    shouldContinue: nextDepth < maxDepth && !nextAlreadyVisited
  };

  if(!nextState.alreadyVisited) pageTable[node.title] = node;

  return nextState;
}

var pageTable = {};
var maxDepth = 10;
var initialState = {
  depth: 0,
  alreadyVisited: false,
  shouldContinue: true
};

iterate("dog", initialState, function(node){
  drawNode(node);
});