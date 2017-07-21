/**
 * Created by blueEvE on 2016-8-4.
 */
var card_items=[
    {
        'author':'Alice','title':'前端WEB—10倍提升应用性能的10个建议',
        'classic':'性能优化','editor_time':'2012-02-22','icon':'Imgs/1.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
        '就连发展中国家和地区的经济活动都已经有5%以上在线进行了。在这个超级链接、随时在线的现代世界， ...',
    },
    {
        'author':'大脸鸡排','title':'前端WEB—10倍提升应用性能的10个建议',
        'classic':'性能优化','editor_time':'2012-07-28','icon':'Imgs/2.jpg',
        'intros':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果的时候我的心哐当一下；长这么大没做过那么逼 ...'
    },
    {
        'author':'豪大大','title':'模仿奔驰官网一个banner特效',
        'classic':'HTML/CSS',
        'editor_time':'2013-10-22','icon':'Imgs/7.jpg',
        'intros':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果的时候我的心哐当一下；长这么大没做过那么逼 ...'
    },
    {
        'author':'拎壶充','title':'手把手教你玩转 CSS3 3D 技术',
        'classic':'性能优化','editor_time':'2013-12-22',
        'icon':'Imgs/cg-1.jpg',
        'intros':'要玩转css3的3d，就必须了解几个词汇，便是透视(perspective)、旋转(rotate)和移动(translate)。' +
        '透视即是以现实的视角来看屏幕上的2D事物，从而展现3D的效果。旋转则不再是2D平面上的旋转，而是三维坐标系的旋 ...'
    },
    {
        'author':'terrytang','title':'总有一种感想','classic':'面试经验',
        'editor_time':'2014-01-17','icon':'Imgs/1.jpg',
        'intros':'前段时间刚刚换了工作，半个中国，一下子就跨越了。人生总是充满着选择，每一次不同的选择总是有不一样的效果。' +
        '刚来新公司一段时间，没什么实质性需要忙碌的，处于熟悉阶段吧。公司目前用的是ES6+react+redux ...'
    },
    {
        'author':'HHHxy',
        'title':'开发中会遇到的Ajax问题',
        'classic':'开发调试','editor_time':'2012-02-22',
        'icon':'Imgs/cg-4.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，就连发展中国家和地区的经济活动' +
        '都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。在这个超级链接、随时在线的现代世界， ...'
    },
    {
        'author':'HHHxy','title':'Web移动端开发技巧',
        'classic':'手机移动','editor_time':'2012-02-22',
        'icon':'Imgs/5.jpg','intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
    '就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。在这个超级链接、随时在线的现代世界， ...'
    },
    {
        'author':'许嵩',
        'title':'HTTP协议详解（真的很经典）',
        'classic':'网络知识',
        'editor_time':'2015-05-22','icon':'Imgs/cg-2.jpg',
        'intros':` HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。<br />
        HTTP协议的主要特点可概括如下：...`
    },
    {
        'author':'August','title':'Web开发者不容错过的20段CSS代码',
        'editor_time':'2015-10-22','classic':'HTML/CSS',
        'icon':'Imgs/1.jpg','intros':'1.CSSResets　　网络上关于CSS重置的代码非常多。本段代码是根据EricMeyer’sresetcodes进行改编的' +
    '，里面包含一点响应式图片和所有核心元素的边界框设置，这样就可以保持页边距和填充可以很好地对齐。 ...'
    },
    {
        'author':'Alice',
        'title':'前端开发必须知道的ES6的十大特征',
        'editor_time':'2016-03-14',
        'classic':'JavaSc','icon':'Imgs/1.jpg','intros':'本文主要针对ES6做一个简要介绍。它是一种新的javascript规范。' +
    '如果你想对ES6有一个快速的了解，那么请继续往下读，去了解当今最流行的编程语言JavaScript最新一代的十大特性。以下是ES6排名前十的最佳特性列 ...'
    },
    {
        'author':'艾瑞卡',
        'title':'JavaScript数组去重的6个方法',
        'editor_time':'2016-07-22','classic':'JavaS',
        'icon':'Imgs/cg-3.png','intros':'方法一无需思考，我们可以得到O(n^2)复杂度的解法。定义一个变量数组res保存结果，' +
    '遍历需要去重的数组，如果该元素已经存在在res中了，则说明是重复的元素，如果没有，则放入res中。javascript代码 ...'
    },
    {
        'author':'豪大大','title':'jQuery.prop() 使用详解',
        'classic':'HTML/CSS',
        'editor_time':'2013-10-22','icon':'Imgs/7.jpg',
        'intros':`<p>prop()函数用于设置或返回当前jQuery对象所匹配的元素的属性值。</p>
该函数属于jQuery对象(实例)。如果需要删除DOM元素的属性，请使用removeProp()函数...`,
    },
    {
        'author':'拎壶充',
        'title':'手把手教你玩转 CSS3 3D 技术',
        'classic':'性能优化',
        'editor_time':'2013-12-22',
        'icon':'Imgs/cg-1.jpg',
        'intros':'要玩转css3的3d，就必须了解几个词汇，便是透视(perspective)、旋转(rotate)和移动(translate)。' +
        '透视即是以现实的视角来看屏幕上的2D事物，从而展现3D的效果。旋转则不再是2D平面上的旋转，而是三维坐标系的旋 ...'
    },
    {
        'author':'terrytang',
        'title':'总有一种感想','classic':'面试经验',
        'editor_time':'2014-01-17',
        'icon':'Imgs/1.jpg',
        'intros':'前段时间刚刚换了工作，半个中国，一下子就跨越了。人生总是充满着选择，每一次不同的选择总是有不一样的效果。' +
        '刚来新公司一段时间，没什么实质性需要忙碌的，处于熟悉阶段吧。公司目前用的是ES6+react+redux ...'
    },
    {
        'author':'HHHxy',
        'title':'开发中会遇到的Ajax问题',
        'classic':'开发调试',
        'editor_time':'2012-02-22',
        'icon':'Imgs/cg-4.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，就连发展中国家和地区的经济活动' +
        '都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。在这个超级链接、随时在线的现代世界， ...'
    },
    {
        'author':'HHHxy',
        'title':'Web移动端开发技巧',
        'classic':'手机移动',
        'editor_time':'2012-02-22',
        'icon':'Imgs/5.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
    '就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。在这个超级链接、随时在线的现代世界， ...'
    },
    {
        'author':'许嵩','title':'刮刮乐之原生js',
        'classic':'性能优化',
        'editor_time':'2015-05-22',
        'icon':'Imgs/cg-2.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
    '就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。在这个超级链接、随时在线的现代世界， ...'
    },
    {
        'author':'August',
        'title':'Web开发者不容错过的20段CSS代码',
        'editor_time':'2015-10-22',
        'classic':'HTML/CSS',
        'icon':'Imgs/1.jpg',
        'intros':'1.CSSResets　　网络上关于CSS重置的代码非常多。本段代码是根据EricMeyer’sresetcodes进行改编的' +
    '，里面包含一点响应式图片和所有核心元素的边界框设置，这样就可以保持页边距和填充可以很好地对齐。 ...'
    },
    {
        'author':'Alice',
        'title':'前端开发必须知道的ES6的十大特征',
        'editor_time':'2016-03-14',
        'classic':'JavaSc',
        'icon':'Imgs/1.jpg',
        'intros':'本文主要针对ES6做一个简要介绍。它是一种新的javascript规范。' +
    '如果你想对ES6有一个快速的了解，那么请继续往下读，去了解当今最流行的编程语言JavaScript最新一代的十大特性。以下是ES6排名前十的最佳特性列 ...'
    },
    {
        'author':'艾瑞卡',
        'title':'JavaScript数组去重的6个方法',
        'editor_time':'2016-07-22','classic':'JavaS',
        'icon':'Imgs/cg-3.png','intros':'方法一无需思考，我们可以得到O(n^2)复杂度的解法。定义一个变量数组res保存结果，' +
    '遍历需要去重的数组，如果该元素已经存在在res中了，则说明是重复的元素，如果没有，则放入res中。javascript代码 ...'
    },
    {
        'author':'豪大大','title':'jQuery.prop() 使用详解',
        'classic':'HTML/CSS',
        'editor_time':'2013-10-22','icon':'Imgs/7.jpg',
        'intros':`<p>prop()函数用于设置或返回当前jQuery对象所匹配的元素的属性值。</p>
该函数属于jQuery对象(实例)。如果需要删除DOM元素的属性，请使用removeProp()函数...`,
    },
    {
        'author':'Alice','title':'前端WEB—10倍提升应用性能的10个建议',
        'classic':'性能优化','editor_time':'2012-02-22',
        'icon':'Imgs/cg-5.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
        '就连发展中国家和地区的经济活动都已经有5%以上在线进行了。在这个超级链接、随时在线的现代世界， ...',
    },
    {
        'author':'大脸鸡排','title':'初次召见ajax,，过程中的皮毛笔记',
        'classic':'性能优化','editor_time':'2012-07-28',
        'icon':'Imgs/cg-2.jpg',
        'intros':` 一，什么是ajax<br />
ajax : Asynchronous JavaScript and XML (异步JavaScript和XML)<br />
ajax说白了就是:用javascript异步形式去操作xml<br />
做的工作(作用)：数据交互<br />`
    },
    {
        'author':'豪大大','title':'模仿奔驰官网一个banner特效',
        'classic':'HTML/CSS',
        'editor_time':'2013-10-22','icon':'Imgs/7.jpg',
        'intros':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果的时候我的心哐当一下；长这么大没做过那么逼 ...'
    }
];
function stopFunc(e){
    e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
}
var pt_articles=$(".gc-pt-articles");
var page_articles=3;//代表每个页面文章数
var arr_search_art=[];//用来存放搜索的数组
var end_art_page;
var fix_a_indexs=5;
var k;
var step;
/*
 * 显示页面*/
var pt_ft_page=$(".gc-pt-ft-page");
function change_page(obj_cur,cur_text){
    step=(fix_a_indexs-1)/2;
        if(end_art_page>=fix_a_indexs){
            if( (cur_text-step) <=1){
                obj_cur.hide();
                for(k=1;k<=fix_a_indexs;k++)
                    obj_cur.eq(k-1).show();
            }else if(cur_text<=(end_art_page-step)){
                obj_cur.hide();
                for(var i=cur_text-step;i<=parseInt(cur_text)+step;i++){
                    obj_cur.eq(i-1).show();
                }
            }else{
                obj_cur.hide();
                for( k=parseInt(end_art_page-fix_a_indexs)+parseInt(1);k<=end_art_page;k++)
                    obj_cur.eq(k-1).show();
            }
        }else{
            obj_cur.hide();
            for(k=1;k<=end_art_page;k++){
                obj_cur.eq(k-1).show();
            }
        }
}
function show_art_index(items){
    var text;
    end_art_page=Math.ceil(items.length/page_articles);//向上取整
    pt_ft_page.empty();
    pt_ft_page.prepend('<a href="#" class="firstPage"><img class="first_page_img"/></a>');
    pt_ft_page.append('<a href="#" class="prePage"><img class="pre_page_img"/></a>');
    $(".prePage").attr('alt','1'); //为所有a标签添加alt属性，用来存储当前点击的页面数
    for(var i=1;i<= end_art_page;i++){
        pt_ft_page.append('<a href="#" class="curPage">'+i+'</a>');
        $('.curPage').eq(i-1).attr('alt',i).hide();
    }
    pt_ft_page.append('<a href="#" class="nextPage"><img class="next_page_img" /></a>');
    pt_ft_page.append('<a href="#" class="endPage"><img class="end_page_img" /></a>');
    var pre_page=$('.prePage');
    var cur_Page=$('.curPage');
    var next_page=$(".nextPage");
    if(end_art_page <= ((parseInt(fix_a_indexs)+1)/2)){
        cur_Page.hide();
        for(k=1;k<=end_art_page;k++){
            cur_Page.eq(k-1).show();
        }
    }else{
        cur_Page.hide();
        for(k=1;k<=parseInt(fix_a_indexs);k++){
            cur_Page.eq(k-1).show();
        }
    }
    next_page.attr('alt','1');//初始化为1
    $('.firstPage').click(function(){
        $(this).css('background','#61f9be').siblings('a').css({ background:'#48ba9e'});
        pre_page.attr('alt',1);
        next_page.attr('alt',1);
        change_page(cur_Page,1);
        console.log("当前点击的是首页");
        show_cards(items,1);
    });
    cur_Page.on('click',function(){
        $(this).css('background','#61f9be').siblings('a').css({ background:'#48ba9e'});
        text=$(this).attr('alt');
        pre_page.attr('alt',text);
        next_page.attr('alt',text);
        change_page(cur_Page,text);
        console.log("当前点击的页面："+text);
        show_cards(items,text);
    });
    pre_page.on('click',function(){
        $(this).css('background','#61f9be').siblings('a').css({ background:'#48ba9e'});
        text=$(this).attr('alt')-1;
        $(this).attr('alt',text);
        next_page.attr('alt',text);
        if(text<1){
            $(this).attr('alt',1);
            next_page.attr('alt',1);
        }
        change_page(cur_Page,text);
        console.log("点击上一页按钮 当前点击页面："+text);
        show_cards(items,text);
    });
    next_page.on('click',function(){
        $(this).css('background','#61f9be').siblings('a').css({ background:'#48ba9e'});
        text=parseInt($(this).attr('alt'))+parseInt(1);
        $(this).attr('alt',text);
        $(".prePage").attr('alt',text);
        // alert(text);
        if(text>end_art_page){
            $(this).attr('alt',end_art_page);
            $(".prePage").attr('alt',end_art_page);
        }
        change_page(cur_Page,text);
        console.log("点击下一页按钮 当前的页面："+text);
        show_cards(items,text);
    });
    $('.endPage').click(function(){
        $(this).css('background','#61f9be').siblings('a').css({ background:'#48ba9e'});
        pre_page.attr('alt',end_art_page);
        next_page.attr('alt',end_art_page);
        change_page(cur_Page,end_art_page);
        console.log("当前点击最后一页");
        show_cards(items,end_art_page);
    });
}
var art_title=$(".atc-title-sty");

function show_cards(items,index) {
    end_art_page = Math.ceil(items.length / page_articles);
    pt_articles.empty();
    if (index < 1) {
        for (var i = 0; i <page_articles; i++) {
            pt_articles.append('<div class="pt-base-article">' +
                '<div class="article-sty">' +
                '<div class="atc-sty-head">' +
                '<div class="atc-head-icon icon-medium icon-larger"><img src="'+items[i].icon+'"></div>' +
                '<div class="atc-head-intro intro-medium intro-larger">' +
                '<div class="atc-author-title">' +
                '<a href="#" class="atc-author-sty">' + items[i].author + ' | </a><a href="imp-article.html?art_index='+i+'" class="atc-title-sty">' + items[i].title + '</a><br>' +
                '</div>' +
                '<div class="atc-classic classic-mgt-small classic-mgt-medium classic-mgt-large classic-mgt-larger">' +
                '<span> 分类： ' + items[i].classic + '</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="atc-main  mgt-medium mgt-larger">' +
                items[i].intros + '</div></div></div>');
         
        }
    } else if (index >= 1 && index <= end_art_page) {
        for (var i = (index - 1) * page_articles; i < index * page_articles; i++) {
            pt_articles.append('<div class="pt-base-article">' +
                '<div class="article-sty">' +
                '<div class="atc-sty-head">' +
                '<div class="atc-head-icon icon-medium icon-larger"><img src="'+items[i].icon+'"></div>' +
                '<div class="atc-head-intro intro-medium intro-larger">' +
                '<div class="atc-author-title">' +
                '<a href="#" class="atc-author-sty">' + items[i].author + ' | </a><a href="imp-article.html?art_index='+i+'" class="atc-title-sty">' + items[i].title + '</a><br>' +
                '</div>' +
                '<div class="atc-classic classic-mgt-small classic-mgt-medium classic-mgt-large classic-mgt-larger">' +
                '<span>  分类：' + items[i].classic + '</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="atc-main mgt-medium mgt-larger">' +
                items[i].intros + '</div></div></div>');
            // art_title.eq(i).attr('art_index',i);
            if (i == items.length - 1)
                break;
        }
    } else {
        for (var i = (end_art_page - 1) * page_articles; i < end_art_page * page_articles; i++) {
            pt_articles.append('<div class="pt-base-article">' +
                '<div class="article-sty">' +
                '<div class="atc-sty-head">' +
                '<div class="atc-head-icon icon-medium icon-larger"><img src="'+items[i].icon+'"></div>' +
                '<div class="atc-head-intro intro-medium intro-larger">' +
                '<div class="atc-author-title">' +
                '<a href="#" class="atc-author-sty">' + items[i].author + ' | </a><a href="imp-article.html?art_index='+i+'" class="atc-title-sty">' + items[i].title + '</a><br>' +
                '</div>' +
                '<div class="atc-classic classic-mgt-small classic-mgt-medium classic-mgt-large classic-mgt-larger">' +
                '<span> 分类： ' + items[i].classic + '</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="atc-main mgt-medium mgt-larger">' +
                items[i].intros + '</div></div></div>');

            //如果i已经指向最后，则返回空，结束
            if (i == items.length - 1) {
                break;
            }
        }
    }
}

function searchCardItem(search_val){
    arr_search_art=[];
    if(search_val.trim()==''){
        var page_arts=Math.ceil(card_items.length/page_articles);
        show_art_index(card_items,page_arts);
        show_cards(card_items,1);
    }else{
        $.each(card_items,function(index,value){
            if(value.title.indexOf(search_val)!=-1){
                arr_search_art.push(card_items[index]);
            }
        });
        // page_arts=Math.ceil(arr_search_art.length/page_articles);
        show_art_index(arr_search_art);
        show_cards(arr_search_art,1);
    }
}
$(function(){
    show_art_index(card_items);
    show_cards(card_items,1);
    $(".position-1").click(function(){
        location.href="imp-index.html";
    });
    //页面加载就开始判断
//       alert("5 : "+sessionStorage.getItem('isLogin'));
    if(sessionStorage.getItem('isLogin')=='true'){
        // $(".position-2").empty();
        $(".position-2").empty().html(` 
                    <div id="gc_usr_info_cont">
                        <div id="gc_usr_info" class="gc-top-info-container">
                            <div class="info-lay">
                                <ul>
                                    <li class="info-items-base-sty info-items-position1"></li>
                                    <li class="info-items-base-sty info-items-position">
                                        <span class="info-items-icons info-items-usr"></span>
                                        <a class="info-items-base-sty info-items-link-1" href="#">账户</a>
                                    </li>
                                    <li class="info-items-base-sty info-items-position">
                                        <span class="info-items-icons info-items-login"></span>
                                        <a id="info_log_out" class="info-items-base-sty info-items-link-2" href="#">注销</a></li>
                                    <li class="info-items-base-sty info-items-position">
                                        <span class="info-items-icons info-items-register"></span>
                                        <a id="info_usr_register" class="info-items-base-sty info-items-link-3" href="imp-register.html">注册</a></li>
                                    <li class="info-items-base-sty info-items-position">
                                        <span class="info-items-icons info-items-favorite"></span>
                                        <a class="info-items-base-sty info-items-link-4" href="#">收藏</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="usr-info">
                        <ul class="usr-info-salutation single">
                            <li class="usr-info-li wd-160">
                                <div id="login_info_cont" class="row-top login-container" ></div>
                            </li>
                            <li class="usr-info-li wd-70">
                                <a href="imp-login.html">
                                    <svg class="usr-info-icon" viewBox="-2765 2857 1080 1080">
                                        <path fill="#986844" d="M-1811.2 3598.5c-.1-4.3-.3-11.3-.8-20.3-.9-15.8-2.7-40.9-6.6-70.7-6.9-52.6-21.6-130.1-52.6-200.4-22.3-50.4-53.5-97.1-90.3-135.2-4.4-20.5-16.7-66.5-43.5-104.8l-5-7.2-54 35.5c-44.5-22.4-91-33.7-138.6-33.7-47.5 0-94.1 11.3-138.6 33.7l-54-35.5-5 7.2c-26.8 38.3-39 84.3-43.5 104.8-36.8 38.1-68 84.8-90.3 135.3-31.1 70.3-45.8 147.8-52.6 200.4-6.1 46.6-7.2 81.6-7.5 93.8 16.6 14 31.3 29.8 46.9 45 17.2 16.7 39.4 28.2 59.1 41.6 1.7 1.1 3.1 2.6 4.2 4.1 15.7 10.4 31 15.4 50.2 19.5 19.2 4.1 35.6 5.6 55.6 7.3 38.7 3.2 77 7.7 115.5 12.6 43.1 5.4 86.5 11.5 130 13.1 41.6 1.5 81.8-9 121.8-19.3 8.9-2.3 17.9-4.5 26.8-6.8.6-4.2 3-8.1 6.7-10.4 40.1-25 81.2-48.2 122-72 5.9-3.5 13.7-1.9 17.9 3.3 9-8.9 17.1-18.2 24.3-27.9l.2-.2.2-.2c1.7-2.6 1.8-2.7 1.5-12.6z"></path>
                                        <path fill="#FFF" d="M-1808.7 3494.8c-6.9-53.2-21.8-131.7-53.4-203.2-22.3-50.5-53.5-97.5-90.3-136.1-5.5-24.4-18.2-68.2-44.5-105.7l-10.6-15.1-57.3 37.7c-44.3-21.4-90.6-32.2-137.9-32.2-47.2 0-93.6 10.8-137.9 32.2l-57.3-37.7-10.6 15.1c-26.2 37.5-39 81.2-44.5 105.7-36.7 38.5-67.9 85.5-90.3 136.1-31.6 71.4-46.5 149.9-53.4 203.2-7.5 57.7-7.6 98-7.6 99.7v6.3l3.8 5.1c26 35 62.9 64.7 109.6 88.3 36.9 18.6 80 33.6 128.3 44.4 82.2 18.5 151.8 19 159.5 19h.6c7.7 0 77.3-.5 159.5-19 48.3-10.8 91.4-25.8 128.3-44.4 46.7-23.6 83.6-53.3 109.6-88.3l3.7-5v-6.3c.4-1.8.2-42.3-7.3-99.8zm-118.3 174.3c-34.8 17.6-75.8 31.8-121.8 42.1-80.7 18.1-150.4 18.3-153.4 18.3h-.6c-2.9 0-72.7-.2-153.4-18.3-46-10.3-87-24.5-121.8-42.1-41.7-21.1-74.7-47.2-98-77.6.4-22.5 5.1-167.5 58.6-288.5 21.8-49.3 52.4-94.9 88.5-131.8l1.8-1.9.5-2.6c2.7-13.1 12.9-56.4 36.3-93.4l37.2 24.5-7.3 16.6 22.8-11.9c43.3-22.6 88.7-34.1 135-34.1s91.7 11.5 135 34.1l22.8 11.9-7.3-16.6 37.2-24.5c23.4 37 33.6 80.4 36.3 93.4l.5 2.6 1.8 1.9c36.1 36.9 66.7 82.5 88.5 131.8 53.5 121 58.2 266.1 58.6 288.5-23.2 30.4-56.1 56.5-97.8 77.6zm-163-13c0 30.1-50.4 54.4-112.5 54.4s-112.5-24.4-112.5-54.4c0-30.1 50.4-54.4 112.5-54.4s112.5 24.3 112.5 54.4zm-223.5-65.3c0 12.3-10 22.3-22.3 22.3s-22.3-10-22.3-22.3 10-22.3 22.3-22.3c12.3-.1 22.3 9.9 22.3 22.3zm267.8 0c0 12.3-10 22.3-22.3 22.3s-22.3-10-22.3-22.3 10-22.3 22.3-22.3c12.3-.1 22.3 9.9 22.3 22.3z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>`);
        // $("#gc_usr_info_cont").empty();
        var usr_info=$("#gc_usr_info");
        $("#login_info_cont").html('Greetings,'+sessionStorage.getItem('usr_id'));
        $("body").click(function(){
            usr_info.hide();
        });

        $("#login_info_cont").click(function(e){
            usr_info.toggle();
            e=e||event;
            stopFunc(e);
        });
        usr_info.click(function(e){
            e=e||event;
            stopFunc(e);
        });
        $("#info_log_out").click(function(){
            sessionStorage.clear();//清除所有的缓存内容
            location.reload();
        });
    }



    $(".nav-icon-positions,.position-1").mouseover(function(){
        $(this).css("cursor","pointer");
        $(".gc-top-cont-home").css({background:"url('img-mainpage/home-hover.png') no-repeat center"});
        $(".gc-top-cont-desc").css({color:" #a1a1a1"});
    }).mouseout(function(){
        $(".gc-top-cont-home").css({background:"url('img-mainpage/home.png') no-repeat center"});
        $(".gc-top-cont-desc").css({color:" #fff"});
    });
    $("#site_search_ipt").keypress(function(ev){
        if(ev.keyCode==13){
            searchCardItem($("#site_search_ipt").val());
        }
    });
    $("#site_search").click(function(){
        searchCardItem($("#site_search_ipt").val());
    });
    $(".gc-ft-list-sty").mouseover(function(){
        $(this).css({background:'#178d88',cursor:'pointer'});
    }).mouseout(function(){
        $(this).css({background:' #0e5653'});
    });
    art_title.click(function(){
        var art_index=$(this).attr('art_index');
        alert(art_index);
    });
});