/**
 * Created by blue.EVE on 2016/11/22.
 */
//
// dialog妯″潡

var dialog = {

    //閿欒鎻愮ず
    errorTips:function(message){
        layer.open({
            content:message,
            icon:2,
            title:'绯荤粺鎻愮ず'
        })
    },

    //鎴愬姛鎻愮ず
    successTips:function(message){
        layer.msg(message,{icon: 1,time:2000});
    },

    //纭鎻愮ず
    confirmTips:function(message,url){
        layer.open({
            content:message,
            title:'绯荤粺鎻愮ず',
            btn : ['鏄�','鍚�'],
            yes : function(){
                location.href=url;
            },
        })
    },

    //纭鎻愮ず甯﹁烦杞�
    confirmUrlTips:function(message,url){
        layer.open({
            content:message,
            icon:1,
            title:'绯荤粺鎻愮ず',
        })
    },
}