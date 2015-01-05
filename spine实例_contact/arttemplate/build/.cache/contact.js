/*TMODJS:{"version":5,"md5":"d3c586755b46513a78e10404cd72bfd0"}*/
template('contact',function($data,$id) {
var $helpers=this,$escape=$helpers.$escape,first_name=$data.first_name,last_name=$data.last_name,email=$data.email,mobile=$data.mobile,work_number=$data.work_number,address=$data.address,notes=$data.notes,$out='';$out+=' <label> <span>Name</span> ';
$out+=$escape(first_name);
$out+=' ';
$out+=$escape(last_name);
$out+=' </label> <label> <span>Email</span> ';
if(email){
$out+=' ';
$out+=$escape(email);
$out+=' ';
}else{
$out+=' <div class="empty">Blank</div> ';
}
$out+=' </label> ';
if(mobile){
$out+=' <label> <span>Mobile number</span> ';
$out+=$escape(mobile);
$out+=' </label> ';
}
$out+=' ';
if(work_number){
$out+=' <label> <span>Work number</span> ';
$out+=$escape(work_number);
$out+=' </label> ';
}
$out+=' ';
if(address){
$out+=' <label> <span>Address</span> <pre>';
$out+=$escape(address);
$out+='</pre> </label> ';
}
$out+=' <label> <span>Notes</span> ';
if(notes){
$out+=' ';
$out+=$escape(notes);
$out+=' ';
}else{
$out+=' <div class="empty">Blank</div> ';
}
$out+=' </label> ';
return new String($out);
});