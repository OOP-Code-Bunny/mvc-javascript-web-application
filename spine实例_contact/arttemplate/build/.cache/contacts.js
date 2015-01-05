/*TMODJS:{"version":11,"md5":"092c25a12918cc146c5a3cf1333eadf4"}*/
template('contacts',function($data,$id) {
var $helpers=this,$each=$helpers.$each,$value=$data.$value,$index=$data.$index,$escape=$helpers.$escape,$out='';$each($data,function($value,$index){
$out+=' <li class="item" itemid=';
$out+=$escape($value["id"]);
$out+='> <img src="images/missing.png" /> ';
if($value["first_name"]){
$out+=' <span class="name">';
$out+=$escape($value["first_name"]);
$out+=$escape($value["last_name"]);
$out+='</span> ';
}else{
$out+=' <span class="name empty">No Name</span> ';
}
$out+=' <span class="cta">&gt;</span> </li> ';
});
$out+=' ';
return new String($out);
});