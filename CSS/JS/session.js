/**
 * Created by blue.EVE on 2016/11/22.
 */
//
//*********鐧诲綍楠岃瘉

$(document).ready(function(e) {
    $.ajax({
        url: '/api/investManage/user_status',
        type: 'GET',
        dataType: 'json',
        contentType:'application/json',
        success:function(data){
            if(data.success == true){
                $('.login-btn').hide()
            }else{
                $('.login-btn').show();
                $('.entrance a').attr('href','javascript:;')
                $('.entrance a').click(function(){
                    dialog.confirmTips('鎮ㄨ繕鏈櫥褰曪紝璇峰厛鐧诲綍鎮ㄧ殑璐﹀彿','html/login/login.html')
                })
            }
        }
    });
});