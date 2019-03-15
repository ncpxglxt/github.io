/**
 * Created by admin on 2017/7/31.
 */

$(function(){
    //关注收藏
    $(document).on('click', '.follow', function() {
        var a = $(this);
        var url = a.attr('href');
        $.ajax({
            url:url,
            type: 'get',
            dataType: 'json',
            //data: data,
            success:function(data) {
                if (a.hasClass('btn')) {
                    a.html('<i class="iconfont icon-yiwancheng"></i> ' + data.message).addClass('disabled');
                } else {
                    a.replaceWith('<i class="iconfont icon-yiwancheng"></i> ' + data.message);
                }
            }
        });
        return false;
    });
});


