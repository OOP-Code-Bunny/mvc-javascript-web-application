//hide模块,用于隐藏元素
//在定义模块的时候,同时加载该模块的依赖(比如这里的jquery)
//格式和require方法是一样的
define(['jquery'],function($){
  var Hide = {};
  Hide.hide = function(){
    $('.el').hide();
  };
  return Hide
});

