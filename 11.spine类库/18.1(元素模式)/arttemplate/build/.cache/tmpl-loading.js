/*TMODJS:{"version":44,"md5":"68ff46a3d4ac967a41328350c114e833"}*/
template('tmpl-loading',function($data,$id) {
var $helpers=this,$escape=$helpers.$escape,id=$data.id,name=$data.name,thing=$data.thing,$out='';$out+=' <p class="title">';
$out+=$escape(id);
$out+='</p> <p>name:<span>';
$out+=$escape(name);
$out+='</span></p> <p>thing:<span>';
$out+=$escape(thing);
$out+='</span></p> ';
return new String($out);
});