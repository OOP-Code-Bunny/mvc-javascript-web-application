/*TMODJS:{"version":2,"md5":"44ed3a5ea7d4fb01d9ec9f9ef02c94cf"}*/
template('cat-banner-3',function($data,$id) {
var $helpers=this,$each=$helpers.$each,catBanner=$data.catBanner,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,$out='';$out+='<div class="grid-col-460 cat-banner"> ';
$each(catBanner,function($value,$index){
$out+=' <a class="banner-grid banner-grid-b';
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