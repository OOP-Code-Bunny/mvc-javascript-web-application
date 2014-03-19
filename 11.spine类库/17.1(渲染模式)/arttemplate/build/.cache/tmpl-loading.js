/*TMODJS:{"version":31,"md5":"42fe9f5289f32a2eaf8208c3e216f544"}*/
template('tmpl-loading',function($data,$id) {
var $helpers=this,$each=$helpers.$each,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,$out='';$out+='<div class="fp-content-loading"> ';
$each($data,function($value,$index){
$out+=' <p class="title">第';
$out+=$escape($index);
$out+='条数据</p> <p>id:<span>';
$out+=$escape($value['id']);
$out+='</span></p> <p>name:<span>';
$out+=$escape($value['name']);
$out+='</span></p> <p>thing:<span>';
$out+=$escape($value['thing']);
$out+='</span></p> ';
});
$out+=' </div> ';
return new String($out);
});