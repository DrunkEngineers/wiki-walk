var pageTable = {};
var maxDepth,
  maxLinksPerPage;

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
      if(!nextState.alreadyVisited) pageTable[node.title] = node;

      if(nextState.shouldContinue)
      {
        walkChildren(node, nextState, function(node) {
          callback(node);
        })
      }      
      else
      {
        callback(node);
      }
    }      
  });
}

function walkChildren(node, nextState, callback) {
  console.log(node.name);
  console.log(node.childLinks);
  for (var i = 0; i < node.childLinks.length - 1; i++) {
    var nextTitle = node.childLinks[i].title;
    iterate(nextTitle, nextState, function(childNode) {
      node.children.push(childNode);
    })
  };

  callback(node);
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
  var nextAlreadyVisited = _.contains(pageTable, node.title);

  var nextState = {
    depth: nextDepth,
    alreadyVisited: nextAlreadyVisited,
    shouldContinue: nextDepth < maxDepth && !nextAlreadyVisited
  };

  return nextState;
}

function startWalk(title, $maxDepth, $maxLinksPerPage) {
  var initialState = {
    depth: 0,
    alreadyVisited: false,
    shouldContinue: true
  };

  maxDepth = $maxDepth;
  maxLinksPerPage = $maxLinksPerPage;

  iterate(title, initialState, function(node){
    drawNode(node);
  });
}