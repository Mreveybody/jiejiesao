var imgurl = 'http://ぬ.ひ.みんな';
if ($) {
    $(function () {
        $('img[data-aes=true]').each(function (i) {
            var that = this;
            $.getJSON(imgurl + this.dataset.original + '.json', function (data) {
                that.src = data.imgtype + data.imgdata
            })
        })
    });
} else {
    console.error('需要依赖 jQuery 环境');
}


//引入方法 <img src="./lazyload/gif/4.gif" data-aes="true" data-original="/lb/1/1.json"/>
//引入<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
