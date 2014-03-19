/*TMODJS:{"version":1,"md5":"2d9f24f55120d9869f8a52d8322e6b4e"}*/
template('cat-small-banner',function($data,$id) {
var $helpers=this,$each=$helpers.$each,smallBanner=$data.smallBanner,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,$out='';$out+='<ul class="grid-col-160 cat-small-banner"> ';
$each(smallBanner,function($value,$index){
$out+=' <li> <a href=';
$out+=$escape($value["url"]);
$out+='><img src=';
$out+=$escape($value["src"]);
$out+=' alt=';
$out+=$escape($value["alt"]);
$out+=' data-pinit="registered"></a> </li> ';
});
$out+=' </ul>';
return new String($out);
});