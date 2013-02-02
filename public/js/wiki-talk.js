// (function($){
//   $(document).ready( function() {
//     var jqxhr = $.getJSON("http://en.wikipedia.org/w/api.php?action=query&prop=links&format=json&plnamespace=0&pllimit=400&iwurl=&indexpageids=&titles=dog&callback=?", function(data) {
//       console.log("success");
//   })
//   .success(function(data) { console.log("second success"); console.log(data.query.pages[data.query.pageids[0]].links[0]);})
//   .error(function() { console.log("error"); })
//   .complete(function() { console.log("complete"); });
   
//   jqxhr.complete(function(){ console.log("second complete"); });
//   console.log(jqxhr);
//   });
// })(jQuery);

function readPageData(title, callback) {
  var url = "http://en.wikipedia.org/w/api.php?action=query&prop=links&" +
    "format=json&plnamespace=0&pllimit=400&iwurl=&indexpageids=&callback=?&titles=" + 
    title;
  var json = $.getJSON(url, function() {
      console.log("Success reading " + title);
    })
  .success(function(data) {
    console.log("Second success reading " + title);
    callback(null, data);
  })
  .error(function(err) {
    console.log("Error");
    callback(null, data);  
  })
}