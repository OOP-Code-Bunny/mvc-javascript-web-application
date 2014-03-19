//config模块,定义依赖的路径并加载依赖
//baseUrl定义基本的根目录,下面的paths都是相对于baseUrl的
require.config({
  baseUrl: './lib',
  paths:{
    jquery:'../../../jquery-1.7.1.min',
    maths:'maths',
    hide:'hide'
  }
});
//maths模块并不依赖jquery,所以不需要在这里加载jquery,
//我们把jquery的加载放到定义hide模块时加载
require(['maths','hide'],function(Maths,Hide){
  console.log(Maths);
  console.log(Hide);
  Hide.hide();
  //Maths.maths(50,100)
});

