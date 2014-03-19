/*TMODJS:{"version":2,"md5":"c9664ab6e43f9bd0073b24564cee86a2"}*/
template('cat-banner-1',function($data,$id) {
var $helpers=this,$each=$helpers.$each,catBanner=$data.catBanner,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,$out='';$out+='<div class="grid-col-460 cat-banner"> ';
$each(catBanner,function($value,$index){
$out+=' <a class="banner-grid banner-grid-a';
$out+=$escape($index+1);
$out+='" href=';
$out+=$escape($value[0]);
$out+='><img src=';
$out+=$escape($value[1]);
$out+=' alt=';
$out+=$escape($value[2]);
$out+=' data-pinit="registered"></a> ';
});
$out+=' </div>';
return new String($out);
});