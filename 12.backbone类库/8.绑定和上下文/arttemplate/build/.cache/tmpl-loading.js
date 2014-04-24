/*TMODJS:{"version":33,"md5":"6266046189e1c01f92364c3902e93672"}*/
template('tmpl-loading',function($data,$id) {
var $helpers=this,$each=$helpers.$each,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,$out='';$out+='<div class="fp-content-loading"> ';
$each($data,function($value,$index){
$out+=' <div class="list" id=';
$out+=$escape($value['id']);
$out+='> <p class="title">第';
$out+=$escape($index);
$out+='条数据</p> <p>id:<span>';
$out+=$escape($value['id']);
$out+='</span></p> <p>name:<span>';
$out+=$escape($value['name']);
$out+='</span></p> <p>thing:<span>';
$out+=$escape($value['thing']);
$out+='</span></p> </div> ';
});
$out+=' </div> ';
return new String($out);
});