function iterate(title, state) {
  var pageData = readPageData(title); 
  var node = buildNode(title);
  var nextState = getNextState(page, state);

  if(nextState.shouldRender)
  {
    saveNode(node);
  }
  if(nextState.shouldContinue)
  {
    var pageRead = readPage(nextState);
    // Add nodes
    //for(int i = 0; i < pageRead.Length; i++) {
      //iterate(pageRead[i], nextState);
    //}
  }
}

function buildPage(title) {

}

function getNextState(page, state) {

}