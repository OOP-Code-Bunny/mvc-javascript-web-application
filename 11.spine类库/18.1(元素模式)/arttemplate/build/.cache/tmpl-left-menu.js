/*TMODJS:{"version":16,"md5":"5a5c2b4d0f95bc7096d355fcf10a36d9"}*/
template('tmpl-left-menu',function($data,$id) {
var $helpers=this,$each=$helpers.$each,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,$out='';$out+='<div class="module left-menu"> <ul class="cat-slide-nav clearfix"> ';
$each($data,function($value,$index){
$out+=' <li class="j_CatNavItem ';
if($index!=1){
$out+=' to-be-load';
}
$out+=' cat-nav';
if($index==1){
$out+=' cat-nav-selected';
}
$out+='" data-menu="cat-nav-';
$out+=$escape($index);
$out+='"> <div class="cat-market-nav"> <s class="cat-nav-icon fp-iconfont">';
$out+=$escape($value["title"]);
$out+='</s> ';
$each($value["content"],function($value,$index){
$out+=' <a href=';
$out+=$escape($value["url"]);
$out+='>';
$out+=$escape($value["name"]);
$out+='</a> ';
if($index!="end"){
$out+=' / ';
}
$out+=' ';
});
$out+=' <b class="cat-nav-arrow"></b> </div> </li> ';
});
$out+=' </ul> </div> ';
return new String($out);
});