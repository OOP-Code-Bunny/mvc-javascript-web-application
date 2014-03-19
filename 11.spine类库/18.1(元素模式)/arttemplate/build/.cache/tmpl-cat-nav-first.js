/*TMODJS:{"version":14,"md5":"9efa982650bc963be06121eafdd13f81"}*/
template('tmpl-cat-nav-first',function($data,$id) {
var $helpers=this,$each=$helpers.$each,labelList=$data.labelList,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,theme=$data.theme,marketBanner=$data.marketBanner,catMarketBanner=$data.catMarketBanner,catSmallBanner=$data.catSmallBanner,$out='';$out+='<div class="module"> <div class="grid-container-800 cat-pannel market-rec-content"> <div class="grid-col-150 cat-detail"> <ul class="cat-label-list market-list"> ';
$each(labelList,function($value,$index){
$out+=' <li> ';
$each($value,function($value,$index){
$out+=' <a href=';
$out+=$escape($value["url"]);
$out+=' ';
if($index==1){
$out+=' second-col-label';
}
$out+='>';
$out+=$escape($value["title"]);
$out+='</a> ';
});
$out+=' </li> ';
});
$out+=' </ul> <h3 class="cat-label-title">主题购</h3> <ul class="cat-label-list"> ';
$each(theme,function($value,$index){
$out+=' <li> ';
$each($value,function($value,$index){
$out+=' <a href=';
$out+=$escape($value["url"]);
$out+=' ';
if($index==1){
$out+=' second-col-label';
}
$out+='>';
$out+=$escape($value["title"]);
$out+='</a> ';
});
$out+=' </li> ';
});
$out+=' </ul> <div> <a class="market-banner" href=';
$out+=$escape(marketBanner["href"]);
$out+=' title=';
$out+=$escape(marketBanner["title"]);
$out+=' style="background: url(';
$out+=$escape(marketBanner["bgUrl"]);
$out+=') no-repeat bottom right"></a> </div> </div> <div class="grid-col-460 cat-banner" id="J_MarketBannerSlide"> <ul class="market-slide-content clearfix"> <div> ';
$each(catMarketBanner,function($value,$index){
$out+=' <li class="market-slide-pannel J_DirectPromo"> <a href=';
$out+=$escape($value["href"]);
$out+='> <img class="j_CatMarketBanner" src=';
$out+=$escape($value["src"]);
$out+=' alt=';
$out+=$escape($value["alt"]);
$out+='> </a> </li> ';
});
$out+=' </div> </ul> </div> <ul class="grid-col-160 cat-small-banner" data-spm="2000a005"> ';
$each(catSmallBanner,function($value,$index){
$out+=' <li class="J_DirectPromo ';
if($index=="end"){
$out+=' small-banner-last';
}
$out+='"> <a target="_blank" href=';
$out+=$escape($value["href"]);
$out+='> <img src=';
$out+=$escape($value["src"]);
$out+=' alt=';
$out+=$escape($value["alt"]);
$out+='> </a> </li> ';
});
$out+=' </ul> </div> </div> ';
return new String($out);
});