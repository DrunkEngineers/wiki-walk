(function($){
function iterate(title, state) {
  var page = buildPage(title);
  var nextState = getNextState(page, state);

  if(nextState.shouldRender)
  {
    renderPage(page);
  }
  if(nextState.shouldContinue)
  {
    var pageRead = readPage(nextState);
    //for(int i = 0; i < pageRead.Length; i++) {
      //iterate(pageRead[i], nextState);
    //}
  }
}

function buildPage(title) {

}

function getNextState(page, state) {

}

$(document).ready( function() {
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON("http://en.wikipedia.org/w/api.php?action=query&prop=links&format=json&plnamespace=0&pllimit=400&iwurl=&titles=dog&callback=?", function() {
  console.log("success");
})
.success(function() { console.log("second success"); })
.error(function() { console.log("error"); })
.complete(function() { console.log("complete"); });
 
// perform other work here ...
 
// Set another completion function for the request above
jqxhr.complete(function(){ console.log("second complete"); });
});
})(jQuery);