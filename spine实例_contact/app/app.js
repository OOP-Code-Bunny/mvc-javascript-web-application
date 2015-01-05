jQuery(function($){
  window.App = Spine.Controller.create({
    el: $("body"),
    
    elements: {
      "#sidebar": "sidebarEl",
      "#contacts": "contactsEl"
    },
    
    init: function(){
      Contact.fetch();
      this.sidebar = Sidebar.init({el: this.sidebarEl});
      this.contact = Contacts.init({el: this.contactsEl});
    }
  }).init();
});