$(function () {
    //alert('加载完毕');
    var titles = $('.nav a');
    var contents = $('.my_content_box .row');

    titles.bind('click', function (e) {
        if ($(this).parent().hasClass('active')) {
            return false
        }
        contents.html('');
        var loadTmpl = $('#load_tmpl').tmpl();
        contents.append(loadTmpl);
        $(this).parent().addClass('active').siblings().removeClass('active');
        //ajax加载数据
        var query = this.rel.split("?")[1];

        $.ajax({
            type: "POST",
            url: "ajax.php",
            data: query,
            dataType: 'json',
            success: function (msg) {
                if (msg) {
                    contents.html('');
                    for (var i in msg) {
                        var contentTmpl = $('#load_content').tmpl(msg[i]);
                        contents.append(contentTmpl)
                    }
                } else {
                    console.log('error')
                }
            }
        });

        title = 'ajax,history_api实例' + '-' + $(this).text();
        document.title = title;
        history.pushState({}, '', location.href.split("?")[0] + '?' + query);
        return false;
    });
    function loadData() {
        //先获取当前url的query值
        var query = location.href.split("?")[1], element;
        //如果没有query值,说明是第一次进入
        if (query === undefined) {
            //第一次进入使用第一个标签
            element = titles.get(0);
            //将url改为第一个标签的查询地址
            history.replaceState({}, '', location.href + '?' + element.rel.split("?")[1]);
            //再次执行loadData(这时已经有了query值,就是第一个标签的query值)
            loadData()
        }
        //有query值,找到和query值对应的标签
        else {
            titles.each(function () {
                if (this.rel.split("?")[1] === query) {
                    $(this).trigger('click')
                }
            });
        }
    }

    loadData();
    window.addEventListener('popstate', function () {
        loadData();
    })
});

