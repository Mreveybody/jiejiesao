var baseurl = 'https://ぬ.ひ.みんな/txt';
if ($) {
    $(function () {
        $('div[data-txt]').each(function (i) {
            var that = this;
            $.get(baseurl + this.dataset.txt + '.txt',{}, function (res) {
                that.innerHTML = window.Base64.decode(res)
            })
        })
    });
} else {
    console.error('需要依赖 jQuery 环境');
}


//引入方法<div id="news" data-txt="/lb/1/1.txt"></div>

//<div id="news" data-txt="/lb/SM/42/04/21/y0WF5w4ap0ad1lj2"></div>
