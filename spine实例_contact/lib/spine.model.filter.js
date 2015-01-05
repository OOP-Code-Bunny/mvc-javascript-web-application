(function(){

  var extend = {
    filter: function(query){
      if ( !query )
        return this.all();
      else
        return(this.select(function(item){
          //item是通过Contact的实例,它的select方法就是下面16行定义的select方法
          return item.select(query);
        }));
    }
  };

  var include = {
    select: function(query){
      query = query.toLowerCase();
      /*
      * 搜索的query,就是input的val(),
      * atts确认搜索的属性范围,在这里也就是contact.js第8行定义的这些属性,调用在第29行定义的把相关属性提取出来的方法
      * */
      var atts = (this.selectAttributes || this.attributes).apply(this);
      /*
      * 在提取出来的属性中寻找匹配的query值
      * 如果找到匹配的值,那么就返回true,那么这条记录就会被找出来
      * 原代码没有if(atts[key]),是我自己加的,因为如果创建纪录却不做任何改动,
      * 那么,atts[key]的值是undefined,就会报错
      * */
      for(var key in atts) {
        if(atts[key]) var value = atts[key].toLowerCase();
        if (value && value.indexOf(query) != -1)
          return true;
      }
      return false;
    }
  };

  Spine.Model.Filter = {
    extended: function(){
      this.extend(extend);
      this.include(include);
    }
  };

})();