//config模块,定义依赖的路径并加载依赖,
//require.config中传入一个json对象,
//所有需要请求的模块都放在config的参数的paths属性里.
//***特别注意,jquery在配置paths时和请求时,名字都只能是jquery,而不能是jQuery,jq,jQ等自定义的名字.必须配置路径.
require.config({
  paths:{
    jquery:'../../jquery-1.7.1.min',
    maths:'./maths',
    hide:'./hide'
  }
});
//require方法请求模块,传入两个参数,第一个是字符串数组,传入需要请求的模块的名字(在paths中配置的),
//第二个参数是回调函数,回调函数中的参数分别是对应请求的模块的返回值,(jquery中有以下一段相关的代码,用以在require.js中返回jQuery对象)
/*
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
  define( "jquery", [], function () { return jQuery; } );
}
*/
//jquery返回的是jquery,maths返回的是Maths对象...
require(['jquery','maths','hide'],function(jq,Maths,Hide){
//其实这里并不需要通过jquery参数来获取jquery对象,因为加载jquery的时候,已经声明了全局变量jQuery($),
//只不过它必须要有一个参数来一一对应加载的模块,
//因为已经加载了jquery,所以,在Hide.hide调用时,可以访问到$对象
  console.log(jq);
  //console.log($);            同上
  //console.log($===jq);       true
  //console.log($===jQuery);   true
  console.log(Maths);
  console.log(Hide);
  //可以调用返回的对象的方法
  Hide.hide();
  //Maths.maths(50,100)
});

//*注意,只有在require方法的回调里才能访问到$,因为是加载完了jquery以后.和书写顺序无关
console.log($);

