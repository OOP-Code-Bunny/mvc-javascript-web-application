(function(Spine, $){
    Spine.List = Spine.Controller.create({
        events:{
            'click .item':'change'
        },
        children:function(sel){
            return this.el.children(sel);
        },
        change:function(e){
            var item = $(e.target).hasClass('item') ? $(e.target) : $(e.target).parent('.item');
            item.addClass('current').siblings().removeClass('current');
            Spine.App.current = this.itemFor(item);
            Spine.App.trigger('show_content',Spine.App.current)
        },
        //通过记录id寻找对应id的li元素
        forItem:function(item){
            var id = item.id;
            return this.el.children("[itemid='"+id+"']");
        },
        //通过元素寻找对应的id的记录
        itemFor:function(ele){
            var id = ele.attr('itemid');
            return Contact.find(id)
        }
    })
})(Spine, Spine.$);


/*List是一个处理列表的模型
 * 1.实例化它时的el就是包含所有列表项的标签
 * 2.给每条列表项数据绑定click事件
 * 3.children方法用于el所有的子元素,如果传入参数,则返回指定的子元素
 * 4.实例的current属性就是当前项对应的记录
 * 5.实例的items属性就是所有列表项对应的记录
 * 6.change方法用于当前列表项发生变化时触发,传入的参数就是当前项的记录
 * 7.render方法用于更新所有的列表项,重新渲染列表项,传入的参数就是新的所有的记录
 * */
