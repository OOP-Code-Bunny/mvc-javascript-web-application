/*TMODJS:{"version":1,"md5":"34f45ef845b13a52ee34bc9d21ab0744"}*/
template('tmpl-cat-nav-pannel',function($data,$id) {
var $helpers=this,include=function(id,data){data=data||$data;var $text=$helpers.$include(id,data,$id);$out+=$text;return $text;},catBanner=$data.catBanner,$out='';$out+='<div class="module"> <div class="grid-container-800 cat-pannel"> ';
include("./cat-detail");
$out+=' ';
if(catBanner.length==3){
$out+=' ';
include("./cat-banner-3");
$out+=' ';
}else if(catBanner.length==1){
$out+=' ';
include("./cat-banner-1");
$out+=' ';
}else if(catBanner.length==4){
$out+=' ';
include("./cat-banner-4");
$out+=' ';
}
$out+=' ';
include("./cat-small-banner");
$out+=' </div> </div> ';
return new String($out);
});