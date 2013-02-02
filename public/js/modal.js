(function($) {

  $('.continue').on('click', function(e) {

    console.log('hi');
    var $url = $('#url').val();
    var $depth = $('#depth :selected').val();
    var $link = $('#link :selected').val();

    console.log($url, $depth, $link);
    //$('.modal').modal('toggle');

  });

})(jQuery);
