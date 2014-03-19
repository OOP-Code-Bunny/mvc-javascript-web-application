var helper = {};
helper.autoFormat= function(data){
    var reg = /(^\s*)|(\s*$)/g;
    return(data.replace(reg,'<input type="text",value=$1/>'));
};