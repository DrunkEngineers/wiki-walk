var pageTable = {};
var maxDepth,
  maxLinksPerPage;

function iterate(title, state, callback) {
  readPageData(title, function(error, response) {
    if(error)
    {
      alert("Error!");
    }
    else if(response.query.pages[response.query.pageids[0]].links === undefined)
    {
      console.log("Empty list!");
      var node = buildNode(response);
      callback(node);
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

  var count = 0;
  for (var i = 0; i < node.childLinks.length; i++) {
    var nextTitle = node.childLinks[i].title;
    iterate(nextTitle, nextState, function(childNode) {
      node.children.push(childNode);
      count += 1;
      if(count === node.childLinks.length) callback(node);
    })
  };
}

function buildNode(pageData) {
  var array = pageData.query.pages[pageData.query.pageids[0]].links;
  var randomArray = [];
  if(array !== undefined)
  {
    var randNum = [];
    var length = Math.min(array.length, maxLinksPerPage);

    for(var i = 0; i < length; i++) {
      var num = Math.floor(Math.random() * array.length);
      while(_.contains(randNum, num)) {
        num = Math.floor(Math.random() * array.length);
      }
      randNum.push(num);
      randomArray.push(array[num]);
    }
  }

  var node = {
    name: pageData.query.pages[pageData.query.pageids[0]].title,
    childLinks: randomArray,
    children: [],
    url: "http://en.wikipedia.org/wiki/" + name
  };

  return node;
}

function randomArrayOfLength(array, maxLength) {
  var randomArray = [];
  if(array === undefined) return randomArray;
  var randNum = [];
  var length = Math.min(array.length, maxLength);

  for(var i = 0; i < length; i++) {
    var num = Math.floor(Math.random() * array.length);
    while(_.contains(randNum, num)) {
      num = Math.floor(Math.random() * array.length);
    }
    randNum.push(num);
    randomArray.push(array[num]);
  }
  console.log(randNum);

  return randomArray;
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
    console.log("Done!");
    drawNode(node);
  });
}