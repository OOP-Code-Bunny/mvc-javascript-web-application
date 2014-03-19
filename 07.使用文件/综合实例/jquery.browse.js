(function($){
  $.fn.browseElement = function(){
    var input = $("<input type='file' multiple>");
    
    input.css({
      "position":     "absolute",
			"z-index":      2,
			"cursor":       "pointer",
      "-moz-opacity": "0",
      "filter":       "alpha(opacity: 0)",
      "opacity":      "0"
    });
    
    input.mouseout(function(){
      input.detach();
    });

    $(this).mouseover(function(){
      input.css($(this).offset());
      input.width($(this).outerWidth());
      input.height($(this).outerHeight());
      $("body").append(input);
    });
    
    return input;
  };
})(jQuery);