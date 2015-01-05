/*TMODJS:{"version":11,"md5":"e8654fb2f4143e59bd8b2ad4d1a06b2b"}*/
template('edit',function($data,$id) {
var $helpers=this,$escape=$helpers.$escape,first_name=$data.first_name,last_name=$data.last_name,email=$data.email,mobile=$data.mobile,work_number=$data.work_number,address=$data.address,notes=$data.notes,$out='';$out+=' <label> <span>First name</span> <input type="text" name="first_name" autofocus value=';
$out+=$escape(first_name);
$out+='> </label> <label> <span>Last name</span> <input type="text" name="last_name" value=';
$out+=$escape(last_name);
$out+='> </label> <label> <span>Email</span> <input type="text" name="email" value=';
$out+=$escape(email);
$out+='> </label> <label> <span>Mobile number</span> <input type="text" name="mobile" value=';
$out+=$escape(mobile);
$out+='> </label> <label> <span>Work number</span> <input type="text" name="work_number" value=';
$out+=$escape(work_number);
$out+='> </label> <label> <span>Address</span> <textarea name="address">';
$out+=$escape(address);
$out+='</textarea> </label> <label> <span>Notes</span> <textarea name="notes">';
$out+=$escape(notes);
$out+='</textarea> </label> ';
return new String($out);
});