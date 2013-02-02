function readPageData(title, callback) {
  var url = "http://en.wikipedia.org/w/api.php?action=query&prop=links&" +
    "format=json&plnamespace=0&pllimit=" + 
    499 +
    "&iwurl=&indexpageids=&callback=?&titles=" + 
    title;
  var json = $.getJSON(url, function() {
    })
  .success(function(data) {
    callback(null, data);
  })
  .error(function(err) {
    console.log("Error");
    callback(null, data);  
  })
}