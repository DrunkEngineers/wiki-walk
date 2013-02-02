(function($){
  $(document).ready( function() {
    var jqxhr = $.getJSON("http://en.wikipedia.org/w/api.php?action=query&prop=links&format=json&plnamespace=0&pllimit=400&iwurl=&titles=dog&callback=?", function() {
      console.log("success");
  })
  .success(function() { console.log("second success"); })
  .error(function() { console.log("error"); })
  .complete(function() { console.log("complete"); });
   
  jqxhr.complete(function(){ console.log("second complete"); });
  });
})(jQuery);