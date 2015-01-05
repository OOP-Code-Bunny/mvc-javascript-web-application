jQuery(function($){

    window.Sidebar = Spine.Controller.create({
        proxied: ['render'],

        elements:{
            '.item':'items',
            'input':'search',
            '.items':'item'
        },

        events:{
            'click input':'filter',
            'keyup input':'filter',
            'click button':'create'
        },

        init:function(){
            this.list = Spine.List.init({
                el:'.items',
                element:this.elements
            });
            Spine.App.bind('del_content',this.render);
            Spine.App.bind('update_item',this.render);
            this.render();
        },

        template:function(items){
            return template('contacts',items);
        },

        filter:function(){
            this.query = this.search.val();
            var items = Contact.filter(this.query);
            if(items.length)
            this.render(items);
        },

        render:function(items){
            items = !items ? Contact.all().sort(Contact.nameSort) : items.sort(Contact.nameSort);
            this.item.html(this.template(items));
            if(this.query && this.query.length || !Spine.App.current){
                this.list.children().first().trigger('click');
            }
            else {
                this.list.forItem(Spine.App.current).trigger('click');
            }
        },
        create:function(){
            Spine.App.current = Contact.create();
            this.render();
            Spine.App.trigger('edit_content',Spine.App.current)
        }

    });

});