jQuery(function($){
    window.Contacts = Spine.Controller.create({
        proxied: ['showContact','editContact'],
        elements:{
            '.show':'show',
            '.edit':'edit'
        },
        events:{
            'click .optSave':'saveContact',
            'click .optEdit':'editContact',
            'click .optDestroy':'delContact',
            'click .optEmail':'emailContact'
        },
        init:function(){
            this.render(Spine.App.current);
            this.edit.hide();
            Spine.App.bind('edit_content',this.editContact);
            Spine.App.bind('show_content',this.showContact);
        },
        render:function(item){
            var showTpl = template('contact',item);
            var editTpl = template('edit',item);
            this.show.find('.content').html(showTpl);
            this.edit.find('.content').html(editTpl);
        },
        showContact:function(item){
            this.render(item);
            this.show.show();
            this.edit.hide();
        },
        editContact:function(){
            this.render(Spine.App.current);
            this.show.hide();
            this.edit.show();
        },
        saveContact:function(){
            var datas = this.edit.find('input,textarea').serializeArray();
            var atts = {};
            $.each(datas,function(i,n){
                atts[n.name] = n.value;
            });
            Spine.App.current.updateAttributes(atts);
            Spine.App.trigger('show_content',Spine.App.current);
            Spine.App.trigger('update_item');
        },
        delContact:function(){
            Spine.App.current.destroy();
            Spine.App.current = null;
            Spine.App.trigger('del_content');
            Spine.App.trigger('show_content',Spine.App.current)
        },
        emailContact:function(){}
    });
});