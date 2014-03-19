(function($){
  //加载插件的时候即执行:
  $(function(){
    $(document).bind("dragover", function(e){
      e.stopPropagation();
      e.preventDefault();
      return false
    });
  });
  //定义dragenter方法,移入的时候添加类名
  function dragenter(e){
    $(e.target).addClass('dropover');
    e.stopPropagation();
    e.preventDefault()
  }
  //定义dragover方法
  function dragover(e){
    e.originalEvent.dataTransfer.dropEffect = "copy";
    e.stopPropagation();
    e.preventDefault()
  }
  //定义dragleave方法,移除的时候去除类名drop
  function dragleave(e){
    $(e.target).removeClass("dropover");
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  //为jQuery对象扩展dropArea方法,参数可以添加drop方法
  $.fn.dropArea = function(options){
    if(options.drop){
      var drop = options.drop;
    }
    this.bind('dragenter',dragenter)
        .bind('dragover',dragover)
        .bind('dragleave',dragleave)
        .bind('drop',drop)
    ;
    return this
  }
})(jQuery);


