function iterate(url, state, nextStep) {
  var page = buildPage(url);
  var nextState = getNextState(page, state);

  if(nextState.shouldRender)
  {
    renderPage(url);
  }
  if(nextState.shouldContinue)
  {
    var pageRead = readPage(nextState);
    for(int i = 0; i < pageRead.Length; i++) {
      iterate(pageRead[i], nextState);
    }
  }
}