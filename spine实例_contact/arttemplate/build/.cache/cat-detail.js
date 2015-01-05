/*TMODJS:{"version":1,"md5":"324b2225436ea6d86cabfda3e1f02129"}*/
template('cat-detail',function($data,$id) {
var $helpers=this,$each=$helpers.$each,mainTitle=$data.mainTitle,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,titles=$data.titles,brands=$data.brands,$out='';$out+='<div class="grid-col-150 cat-detail"> <h3 class="cat-title"> ';
$each(mainTitle,function($value,$index){
$out+=' ';
$each($value,function($value,$index){
$out+=' <a href=';
$out+=$escape($value);
$out+=' target="blank">';
$out+=$escape($index);
$out+='</a> ';
});
$out+=' ';
if($index!="end"){
$out+=' / ';
}
$out+=' ';
});
$out+=' </h3> <ul class="cat-label-list cat-title-list clearfix"> ';
$each(titles,function($value,$index){
$out+=' <li><a href=';
$out+=$escape($value);
$out+=' target="blank">';
$out+=$escape($index);
$out+='</a></li> ';
});
$out+=' </ul> <i class="cat-pannel-line"></i> <div class="cat-brand-slide j_CatBrandSlide"> <ul class="cat-brand-content clearfix"> <div> ';
$each(brands,function($value,$index){
$out+=' <li> ';
$each($value,function($value,$index){
$out+=' <a href=';
$out+=$escape($value["url"]);
$out+='><img src=';
$out+=$escape($value["src"]);
$out+=' width="90" height="45" alt=';
$out+=$escape($value["alt"]);
$out+=' ></a> ';
});
$out+=' </li> ';
});
$out+=' </div> </ul> </div> </div>';
return new String($out);
});