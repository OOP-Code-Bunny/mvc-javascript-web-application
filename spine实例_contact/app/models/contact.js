window.Contact = Spine.Model.setup('contact',['first_name','last_name','email','mobile','work_number','address','notes']);
Contact.extend(Spine.Model.Local);
Contact.selectAttributes = ['first_name','last_name','email','mobile','work_number','address'];
Contact.extend({
    nameSort:function(a,b){
        if(a.first_name == b.first_name){
            return 0
        }
        else {
            return a.first_name>b.first_name ? -1 : 1
        }
    },
    filter:function(query){
        if(!query){
            return this.all();
        }
        else{
            return this.select(function(item){
                return item.select(query);
            })
        }
    }
});
Contact.include({
    selectAttributes:function(){
        var obj = {};
        for(var i = 0; i < this.parent.selectAttributes.length; i++) {
            var attr = this.parent.selectAttributes[i];
            obj[attr] = this[attr];
        }
        return obj;
    },
    select:function(query){
        var sQuery = query.toLowerCase();
        var obj = this.selectAttributes();
        for(var i in obj){
            if (obj[i] && obj[i].toLowerCase().indexOf(sQuery)!=-1){
                return true
            }
        }
        return false
    }
});
/*创建一个Contact模型,用于实例化数据
* 模型的selectAttributes属性是一个数组,里面包含了一些需要被提取出来的属性名
* nameSort方法用来判断两条记录的first_name是否相等,如果相等,返回0,否则比较字符在unicode中的码位的大小,返回-1或1
* 实例添加了selectAttributes方法,用于提取出记录中的selectAttributes数组中的属性和值对
* 实例添加了fullName方法,用于返回完整的姓名
* 另外,模型扩展了Spine.Model.Local和Spine.Model.Filter,用于本地存储和查找记录
* */