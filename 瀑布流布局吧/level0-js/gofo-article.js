/**
 * Created by blueEvE on 2016/8/3.
 */
var card_items=[
    {
        'author':'Alice',
        'title':'前端WEB—10倍提升应用性能的10个建议',
        'classic':'性能优化',
        'editor_time':'2012-02-22',
        'icon':'Imgs/1.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，就连发展中国家和地区的经济活动都已经有5%以上在线进行了。在这个超级链接、随时在线的现代世界， ...',
        'cont':'<h3>1.布局使用百分比</h3>'+
'不同的手机有着不同的分辨率，这时再用我们pc端布局常用的px就不合适了。使用百分比布局要时时刻刻清楚其父元素，' +
        '因为子元素的百分比高度是根据父元素的高度来确定的，当父元素的高度为不确定值时，或者说父元素的高度未定义时,' +
        '子元素的高度百分比将没有用（没有参照物）。所以只有设置了父元素的高度，子元素的高度百分比才会有用.<br>' +
        '<h3>2.em与rem:</h3>'+
'em是根据相对单位，不是固定的，他会继承父级元素的字体大小，若没有父级则em的相对基准点为浏览器的字体大小，' +
        '浏览器的字体默认为16px，因此若无父级元素，相对于浏览器大小：Xem=X*16px;'+
'rem是css3新增属性，是完全相对于HTML根元素大小设定的，默认为10px，因此无论父级字体大小，1rem=10px。'},
    {
        'author':'大脸鸡排','title':'前端WEB—10倍提升应用性能的10个建议',
        'classic':'性能优化','editor_time':'2012-07-28',
        'icon':'Imgs/2.jpg','intros':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果' +
    '的时候我的心哐当一下；长这么大没做过那么逼 ...',
        'cont':'提升Web应用的性能从未像今天这样刻不容缓。 <br>' +
        '在线经济活动的比例日益提高，就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。' +
        ' <br>在这个超级链接、随时在线的 现代世界，用户的期望也远非昔日可比。如果你的网站不能马上响应，你的应用不能立即运行，' +
        '用户转身就会投奔你的竞争对手。亚马逊大约10年前的一项研究表明，页面加载时间减少1/10秒，能够使其营收增长1%。' +
        '另一项近期的调查也显示，一多半受访站点所有者提到因为自己应用的性能不佳导致了收入减少或者用户流失。 一个网站到底多快才行？页面加载每花1秒钟，' +
        '就有大约4%的用户走掉。排名最靠前的电商站点的首次交互时间为1至3秒，这个区间的转换率最高。' +
        '显而易见，Web应用性能的重要性与日俱增。提升性能其实不难，难的是怎么看到结果。<br>本文给出能够提升大约10倍网站性能的10个建议供大家参考。' +
        '如此全面地涵盖各种性能优化技术，这还是头一回，但这些建议可能需要NGINX的一点支持。除了性能，这些建议也会涉及提升安全性。<br>'+
            '1.建议一：使用反向代理服务器让应用更快更安全<br>2.建议二：增加负载均衡服务器<br>3.建议三：缓存静态及动态内容<br>4.建议四：压缩数据'
    },
    {
        'author':'豪大大','title':'模仿奔驰官网一个banner特效',
        'classic':'HTML/CSS','editor_time':'2013-10-22','icon':'Imgs/7.jpg',
        'intros':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果的时候我的心哐当一下；' +
        '长这么大没做过那么逼 ...',
        'cont':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果的时候我的心哐当一下;<br>长这么大没做过那么逼格的banner啊啊啊啊啊！！！<br>' +
        '梯形有木有！梯形里面还要放图片有木有！还有两条从中间渐变到两侧的彩带有木有！'+ '然后设计还说：“无论什么时候,banner总是占满整个屏幕，' +
        '个屏幕，屏幕，幕......”<br>boss说过，不不不。。。我自己对自己说过：“虽然搞设计那个人很变态，啊呸！搞设计那个人要的特效很变态，' +
        '但是你只要做出来了，你也会变得很变态（什么鬼）”<br>冷静下来，整理思路:<br>一开始我是想按照传统的banner左浮动，' +
        '然后通过控制外层wrap来实现左右移动的效果。但是偏偏第一张的时候，左小半边要显示最后一张，最后一张在中间的时候第一张右小半边。。。；' +
        '<br>所以这个方案pass;<br><br>后面灵机一动想到用通过更换类名的方法来实现！！！；<br>不管banner怎么变，呈现出来的永远只有三张的样式，' +
        '左边一张，中间一张，右边一张。只要把这三张的样式都写出来了，然后每次点击事件只要判断接下来那几张分辨是是左中右就行啦。' +
        '动画的效果交给css3一个很牛逼的transition属性去完成；<br><br>样式方面：<ol><li>梯形的实现用到css3的tranform属性，' +
        '但是里面的图片会跟着扭曲，因此图片本身也要用到transfarm属性扭回来。但是此时，细心的观 众会发现图片扭正了，' +
        '但是图片缺没有预想中的铺满整个容器，因此我无耻的把图片放大放大再放大，直到铺满整个容器为止（个人觉得这种方案不太好，希望有大 神指点）；' +
        '</li><li>至于铺满整个屏幕那就html,body都100%就好啦；</li><li>彩带用了background-image的linear-gradient，不明所以的小伙伴可以百度“css颜色渐变”；' +
        '</li><br><br>大概思路出来了，沿着这个思路，中间踩了很多个坑，最后历尽千辛万苦，有了以下代码（IE10以下均没有动画效果）' +
        '<br><a href=”http://sandbox.runjs.cn/show/unpuxmkt”>点击这里查看效果</a><br>'
    },
    {
        'author':'拎壶充','title':'手把手教你玩转 CSS3 3D 技术',
        'classic':'性能优化','editor_time':'2013-12-22','icon':'Imgs/cg-1.jpg',
        'intros':'要玩转css3的3d，就必须了解几个词汇，便是透视(perspective)、旋转(rotate)和移动(translate)。透视即是以现实的视角来看屏幕上的2D事物，从而展现3D的效果。旋转则不再是2D平面上的旋转，而是三维坐标系的旋 ...',
        'cont':'本文主要针对ES6做一个简要介绍。它是一种新的javascript规范。如果你想对ES6有一个快速的了解，' +
        '那么请继续往下读，去了解当今最流行的编程语言JavaScript最新一代的十大特性。<br><br>' +
        '以下是ES6排名前十的最佳特性列表<br>Default Parameters（默认参数） in ES6<br>' +
        'Template Literals （模板文本）in ES6<br>Multi-line Strings （多行字符串）in ES6<br>' +
        'Destructuring Assignment （解构赋值）in ES6<br>Enhanced Object Literals （增强的对象文本）' +
        'in ES6<br>Arrow Functions （箭头函数）in ES6<br>Promises in ES6<br>Block-Scoped Constructs Let ' +
        'and Const（块作用域构造Let and Const）<br>Classes（类） in ES6<br>Modules（模块） in ES6<br>'
    },
    {
        'author':'terrytang','title':'总有一种感想',
        'classic':'面试经验','editor_time':'2014-01-17','icon':'Imgs/1.jpg',
        'intros':'前段时间刚刚换了工作，半个中国，一下子就跨越了。人生总是充满着选择，' +
        '每一次不同的选择总是有不一样的效果。刚来新公司一段时间，没什么实质性需要忙碌的，' +
        '处于熟悉阶段吧。公司目前用的是ES6+react+redux ...',
        'cont':''
    },
    {
        'author':'HHHxy','title':'开发中会遇到的Ajax问题',
        'classic':'开发调试','editor_time':'2012-02-22','icon':'Imgs/cg-4.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
        '就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的' +
        '资源）。在这个超级链接、随时在线的现代世界， ...',
        'cont':''
    },
    {
        'author':'HHHxy','title':'Web移动端开发技巧',
        'classic':'手机移动','editor_time':'2012-02-22','icon':'Imgs/5.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
        '就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的' +
        '资源）。在这个超级链接、随时在线的现代世界， ...',
        'cont':''
    },
    {
        'author':'许嵩','title':'HTTP协议详解（真的很经典）',
        'classic':'网络知识','editor_time':'2015-05-22','icon':'Imgs/cg-2.jpg',
        'intros':` HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。<br />
        HTTP协议的主要特点可概括如下：<br />
        1.支持客户/服务器模式。<br />
        2.简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST...`,
        'cont': ` 引言<br> <br>
        HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。<br />
        HTTP协议的主要特点可概括如下：<br />
        1.支持客户/服务器模式。<br />
        2.简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。<br />
        3.灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。<br />
        4.无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。<br />
        5.无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。<br /> <br /> <br /> <br />
        一、HTTP协议详解之URL篇<br /> <br />
        &nbsp; &nbsp; http（超文本传输协议）是一个基于请求与响应模式的、无状态的、应用层的协议，常基于TCP的连接方式，HTTP1.1版本中给出一种持续连接的机制，绝大多数的Web开发，都是构建在HTTP协议之上的Web应用。<br /> <br />
        HTTP URL (URL是一种特殊类型的URI，包含了用于查找某个资源的足够的信息)的格式如下：<br />
        http://host[&quot;:&quot;port][abs_path]http表示要通过HTTP协议来定位网络资源；host表示合法的Internet主机域名或者IP地址；port指定一个端口号，为空则使用缺省端口80；abs_path指定请求资源的URI；如果URL中没有给出abs_path，那么当它作为请求URI时，必须以“/”的形式给出，通常这个工作浏览器自动帮我们完成。<br />
        eg:<br />
        1、输入：www.guet.edu.cn<br />
        浏览器自动转换成：http://www.guet.edu.cn/<br />
        2、http:192.168.0.116:8080/index.jsp <br /> <br /> <br /> <br />
        二、HTTP协议详解之请求篇<br /> <br />
        &nbsp; &nbsp; http请求由三部分组成，分别是：请求行、消息报头、请求正文<br /> <br />
        1、请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本，格式如下：Method Request-URI HTTP-Version CRLF&nbsp;&nbsp;<br />
        其中 Method表示请求方法；Request-URI是一个统一资源标识符；HTTP-Version表示请求的HTTP协议版本；CRLF表示回车和换行（除了作为结尾的CRLF外，不允许出现单独的CR或LF字符）。<br /> <br />
        请求方法（所有方法全为大写）有多种，各个方法的解释如下：<br />
        GET&nbsp; &nbsp;&nbsp;&nbsp;请求获取Request-URI所标识的资源<br />
        POST&nbsp; &nbsp; 在Request-URI所标识的资源后附加新的数据<br />
        HEAD&nbsp; &nbsp; 请求获取由Request-URI所标识的资源的响应消息报头<br />
        PUT&nbsp; &nbsp;&nbsp;&nbsp;请求服务器存储一个资源，并用Request-URI作为其标识<br />
        DELETE&nbsp;&nbsp;请求服务器删除Request-URI所标识的资源<br />
        TRACE&nbsp; &nbsp;请求服务器回送收到的请求信息，主要用于测试或诊断<br />
        CONNECT 保留将来使用<br />
        OPTIONS 请求查询服务器的性能，或者查询与资源相关的选项和需求<br />
        应用举例：<br />
        GET方法：在浏览器的地址栏中输入网址的方式访问网页时，浏览器采用GET方法向服务器获取资源，eg:GET /form.html HTTP/1.1 (CRLF)<br /> <br />
        POST方法要求被请求服务器接受附在请求后面的数据，常用于提交表单。<br />
        eg：POST /reg.jsp HTTP/ (CRLF)<br />
        Accept:image/gif,image/x-xbit,... (CRLF)<br />
        ...<br />
        HOST:www.guet.edu.cn (CRLF)<br />
        Content-Length:22 (CRLF)<br />
        Connection:Keep-Alive (CRLF)<br />
        Cache-Control:no-cache (CRLF)<br />
        (CRLF)&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;//该CRLF表示消息报头已经结束，在此之前为消息报头<br />
        user=jeffrey&amp;pwd=1234&nbsp;&nbsp;//此行以下为提交的数据<br /> <br />
        HEAD方法与GET方法几乎是一样的，对于HEAD请求的回应部分来说，它的HTTP头部中包含的信息与通过GET请求所得到的信息是相同的。利用这个方法，不必传输整个资源内容，就可以得到Request-URI所标识的资源的信息。该方法常用于测试超链接的有效性，是否可以访问，以及最近是否更新。<br />
        2、请求报头后述<br />
        3、请求正文(略) <br /> <br /> <br /> <br />
        三、HTTP协议详解之响应篇<br /> <br />
        &nbsp; &nbsp; 在接收和解释请求消息后，服务器返回一个HTTP响应消息。<br /> <br />
        HTTP响应也是由三个部分组成，分别是：状态行、消息报头、响应正文<br />
        1、状态行格式如下：<br />
        HTTP-Version Status-Code Reason-Phrase CRLF<br />
        其中，HTTP-Version表示服务器HTTP协议的版本；Status-Code表示服务器发回的响应状态代码；Reason-Phrase表示状态代码的文本描述。<br />
        状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：<br />
        1xx：指示信息--表示请求已接收，继续处理<br />
        2xx：成功--表示请求已被成功接收、理解、接受<br />
        3xx：重定向--要完成请求必须进行更进一步的操作<br />
        4xx：客户端错误--请求有语法错误或请求无法实现<br />
        5xx：服务器端错误--服务器未能实现合法的请求<br />
        常见状态代码、状态描述、说明：<br />
        200 OK&nbsp; &nbsp;&nbsp; &nbsp;//客户端请求成功<br />
        400 Bad Request&nbsp;&nbsp;//客户端请求有语法错误，不能被服务器所理解<br />
        401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用 <br />
        403 Forbidden&nbsp;&nbsp;//服务器收到请求，但是拒绝提供服务<br />
        404 Not Found&nbsp;&nbsp;//请求资源不存在，eg：输入了错误的URL<br />
        500 Internal Server Error //服务器发生不可预期的错误<br />
        503 Server Unavailable&nbsp;&nbsp;//服务器当前不能处理客户端的请求，一段时间后可能恢复正常<br />
        eg：HTTP/1.1 200 OK （CRLF）<br /> <br />
        2、响应报头后述<br /> <br />
        3、响应正文就是服务器返回的资源的内容 <br /> <br /> <br /> <br />
        四、HTTP协议详解之消息报头篇<br /> <br />
        &nbsp; &nbsp; HTTP消息由客户端到服务器的请求和服务器到客户端的响应组成。请求消息和响应消息都是由开始行（对于请求消息，开始行就是请求行，对于响应消息，开始行就是状态行），消息报头（可选），空行（只有CRLF的行），消息正文（可选）组成。<br /> <br />
        HTTP消息报头包括普通报头、请求报头、响应报头、实体报头。<br />
        每一个报头域都是由名字+“：”+空格+值 组成，消息报头域的名字是大小写无关的。<br /> <br />
        1、普通报头<br />
        在普通报头中，有少数报头域用于所有的请求和响应消息，但并不用于被传输的实体，只用于传输的消息。<br />
        eg：<br />
        Cache-Control&nbsp; &nbsp;用于指定缓存指令，缓存指令是单向的（响应中出现的缓存指令在请求中未必会出现），且是独立的（一个消息的缓存指令不会影响另一个消息处理的缓存机制），HTTP1.0使用的类似的报头域为Pragma。<br />
        请求时的缓存指令包括：no-cache（用于指示请求或响应消息不能缓存）、no-store、max-age、max-stale、min-fresh、only-if-cached;<br />
        响应时的缓存指令包括：public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age、s-maxage.<br />
        eg：为了指示IE浏览器（客户端）不要缓存页面，服务器端的JSP程序可以编写如下：response.sehHeader(&quot;Cache-Control&quot;,&quot;no-cache&quot;);<br />
        //response.setHeader(&quot;Pragma&quot;,&quot;no-cache&quot;);作用相当于上述代码，通常两者//合用<br />
        这句代码将在发送的响应消息中设置普通报头域：Cache-Control:no-cache<br /> <br /> <br />
        Date普通报头域表示消息产生的日期和时间<br /> <br />
        Connection普通报头域允许发送指定连接的选项。例如指定连接是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接<br /> <br />
        2、请求报头<br />
        请求报头允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。<br />
        常用的请求报头<br />
        Accept<br />
        Accept请求报头域用于指定客户端接受哪些类型的信息。eg：Accept：image/gif，表明客户端希望接受GIF图象格式的资源；Accept：text/html，表明客户端希望接受html文本。<br />
        Accept-Charset<br />
        Accept-Charset请求报头域用于指定客户端接受的字符集。eg：Accept-Charset:iso-8859-1,gb2312.如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。<br />
        Accept-Encoding<br />
        Accept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的内容编码。eg：Accept-Encoding:gzip.deflate.如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。<br />
        Accept-Language<br />
        Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。eg：Accept-Language:zh-cn.如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。<br />
        Authorization<br />
        Authorization请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为401（未授权），可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。<br />
        Host（发送请求时，该报头域是必需的）<br />
        Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，eg：<br />
        我们在浏览器中输入：http://www.guet.edu.cn/index.html<br />
        浏览器发送的请求消息中，就会包含Host请求报头域，如下：<br />
        Host：www.guet.edu.cn<br />
        此处使用缺省端口号80，若指定了端口号，则变成：Host：www.guet.edu.cn:指定端口号<br />
        User-Agent<br />
        我们上网登陆论坛的时候，往往会看到一些欢迎信息，其中列出了你的操作系统的名称和版本，你所使用的浏览器的名称和版本，这往往让很多人感到很神奇，实际上，服务器应用程序就是从User-Agent这个请求报头域中获取到这些信息。User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。不过，这个报头域不是必需的，如果我们自己编写一个浏览器，不使用User-Agent请求报头域，那么服务器端就无法得知我们的信息了。<br />
        请求报头举例：<br />
        GET /form.html HTTP/1.1 (CRLF)<br />
        Accept:image/gif,image/x-xbitmap,image/jpeg,application/x-shockwave-flash,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/msword,*/* (CRLF)<br />
        Accept-Language:zh-cn (CRLF)<br />
        Accept-Encoding:gzip,deflate (CRLF)<br />
        If-Modified-Since:Wed,05 Jan 2007 11:21:25 GMT (CRLF)<br />
        If-None-Match:W/&quot;80b1a4c018f3c41:8317&quot; (CRLF)<br />
        User-Agent:Mozilla/4.0(compatible;MSIE6.0;Windows NT 5.0) (CRLF)<br />
        Host:www.guet.edu.cn (CRLF)<br />
        Connection:Keep-Alive (CRLF)<br />
        (CRLF)<br /> <br />
        3、响应报头<br />
        响应报头允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息。<br />
        常用的响应报头<br />
        Location<br />
        Location响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。<br />
        Server<br />
        Server响应报头域包含了服务器用来处理请求的软件信息。与User-Agent请求报头域是相对应的。下面是<br />
        Server响应报头域的一个例子：<br />
        Server：Apache-Coyote/1.1<br />
        WWW-Authenticate<br />
        WWW-Authenticate响应报头域必须被包含在401（未授权的）响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。<br />
        eg：WWW-Authenticate:Basic realm=&quot;Basic Auth Test!&quot;&nbsp;&nbsp;//可以看出服务器对请求资源采用的是基本验证机制。<br /> <br /> <br />
        4、实体报头<br />
        请求和响应消息都可以传送一个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文（eg：有无实体正文）和请求所标识的资源的元信息。<br />
        常用的实体报头<br />
        Content-Encoding<br />
        Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。Content-Encoding这样用于记录文档的压缩方法，eg：Content-Encoding：gzip<br />
        Content-Language<br />
        Content-Language实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读<br />
        者。eg：Content-Language:da<br />
        Content-Length<br />
        Content-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。<br />
        Content-Type<br />
        Content-Type实体报头域用语指明发送给接收者的实体正文的媒体类型。eg：<br />
        Content-Type:text/html;charset=ISO-8859-1<br />
        Content-Type:text/html;charset=GB2312<br />
        Last-Modified<br />
        Last-Modified实体报头域用于指示资源的最后修改日期和时间。<br />
        Expires<br />
        Expires实体报头域给出响应过期的日期和时间。为了让代理服务器或浏览器在一段时间以后更新缓存中(再次访问曾访问过的页面时，直接从缓存中加载，缩短响应时间和降低服务器负载)的页面，我们可以使用Expires实体报头域指定页面过期的时间。eg：Expires：Thu，15 Sep 2006 16:23:12 GMT<br />
        HTTP1.1的客户端和缓存必须将其他非法的日期格式（包括0）看作已经过期。eg：为了让浏览器不要缓存页面，我们也可以利用Expires实体报头域，设置为0，jsp中程序如下：response.setDateHeader(&quot;Expires&quot;,&quot;0&quot;);<br /> <br /> <br /> <br />
        五、利用telnet观察http协议的通讯过程<br /> <br />
        &nbsp; &nbsp; 实验目的及原理：<br />
        &nbsp; &nbsp; 利用MS的telnet工具，通过手动输入http请求信息的方式，向服务器发出请求，服务器接收、解释和接受请求后，会返回一个响应，该响应会在telnet窗口上显示出来，从而从感性上加深对http协议的通讯过程的认识。<br /> <br />
        &nbsp; &nbsp; 实验步骤：<br /> <br />
        1、打开telnet<br />
        1.1 打开telnet<br />
        运行--&gt;cmd--&gt;telnet<br /> <br />
        1.2 打开telnet回显功能<br />
        set localecho<br /> <br />
        2、连接服务器并发送请求<br />
        2.1 open www.guet.edu.cn 80&nbsp;&nbsp;//注意端口号不能省略<br /> <br />
        &nbsp; &nbsp; HEAD /index.asp HTTP/1.0<br />
        &nbsp; &nbsp; Host:www.guet.edu.cn<br />
        &nbsp; &nbsp; <br />
        &nbsp; &nbsp;<br />
        &nbsp; &nbsp; open www.guet.edu.cn 80 <br />
        &nbsp; &nbsp;<br />
        &nbsp; &nbsp; GET /index.asp HTTP/1.0&nbsp;&nbsp;//请求资源的内容<br />
        &nbsp; &nbsp; Host:www.guet.edu.cn&nbsp;&nbsp;<br /> <br />
        2.2 open www.sina.com.cn 80&nbsp;&nbsp;//在命令提示符号下直接输入telnet www.sina.com.cn 80<br />
        &nbsp; &nbsp; HEAD /index.asp HTTP/1.0<br />
        &nbsp; &nbsp; Host:www.sina.com.cn<br /> <br /> <br />
        3 实验结果：<br /> <br />
        3.1 请求信息2.1得到的响应是:<br /> <br />
        HTTP/1.1 200 OK&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; //请求成功<br />
        Server: Microsoft-IIS/5.0&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;//web服务器<br />
        Date: Thu,08 Mar 200707:17:51 GMT<br />
        Connection: Keep-Alive&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<br />
        Content-Length: 23330<br />
        Content-Type: text/html<br />
        Expries: Thu,08 Mar 2007 07:16:51 GMT<br />
        Set-Cookie: ASPSESSIONIDQAQBQQQB=BEJCDGKADEDJKLKKAJEOIMMH; path=/<br />
        Cache-control: private<br /> <br />
        //资源内容省略<br /> <br />
        3.2 请求信息2.2得到的响应是:<br /> <br />
        HTTP/1.0 404 Not Found&nbsp; &nbsp;&nbsp; &nbsp; //请求失败<br />
        Date: Thu, 08 Mar 2007 07:50:50 GMT<br />
        Server: Apache/2.0.54 &lt;Unix&gt;<br />
        Last-Modified: Thu, 30 Nov 2006 11:35:41 GMT<br />
        ETag: &quot;6277a-415-e7c76980&quot;<br />
        Accept-Ranges: bytes<br />
        X-Powered-By: mod_xlayout_jh/0.0.1vhs.markII.remix<br />
        Vary: Accept-Encoding<br />
        Content-Type: text/html<br />
        X-Cache: MISS from zjm152-78.sina.com.cn<br />
        Via: 1.0 zjm152-78.sina.com.cn:80&lt;squid/2.6.STABLES-20061207&gt;<br />
        X-Cache: MISS from th-143.sina.com.cn<br />
        Connection: close<br /> <br /> <br />
        失去了跟主机的连接<br /> <br />
        按任意键继续...<br /> <br />
        4 .注意事项：1、出现输入错误，则请求不会成功。<br />
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 2、报头域不分大小写。<br />
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 3、更深一步了解HTTP协议，可以查看RFC2616，在http://www.letf.org/rfc上找到该文件。<br />
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 4、开发后台程序必须掌握http协议<br /> <br />
        六、HTTP协议相关技术补充<br /> <br />
        &nbsp; &nbsp; 1、基础：<br />
        &nbsp; &nbsp; 高层协议有：文件传输协议FTP、电子邮件传输协议SMTP、域名系统服务DNS、网络新闻传输协议NNTP和HTTP协议等<br />
        中介由三种：代理(Proxy)、网关(Gateway)和通道(Tunnel)，一个代理根据URI的绝对格式来接受请求，重写全部或部分消息，通过 URI的标识把已格式化过的请求发送到服务器。网关是一个接收代理，作为一些其它服务器的上层，并且如果必须的话，可以把请求翻译给下层的服务器协议。一 个通道作为不改变消息的两个连接之间的中继点。当通讯需要通过一个中介(例如：防火墙等)或者是中介不能识别消息的内容时，通道经常被使用。<br />
        &nbsp; &nbsp;&nbsp;&nbsp;代理(Proxy)：一个中间程序，它可以充当一个服务器，也可以充当一个客户机，为其它客户机建立请求。请求是通过可能的翻译在内部或经过传递到其它的 服务器中。一个代理在发送请求信息之前，必须解释并且如果可能重写它。代理经常作为通过防火墙的客户机端的门户，代理还可以作为一个帮助应用来通过协议处 理没有被用户代理完成的请求。<br />
        网关(Gateway)：一个作为其它服务器中间媒介的服务器。与代理不同的是，网关接受请求就好象对被请求的资源来说它就是源服务器；发出请求的客户机并没有意识到它在同网关打交道。<br />
        网关经常作为通过防火墙的服务器端的门户，网关还可以作为一个协议翻译器以便存取那些存储在非HTTP系统中的资源。<br />
        &nbsp; &nbsp; 通道(Tunnel)：是作为两个连接中继的中介程序。一旦激活，通道便被认为不属于HTTP通讯，尽管通道可能是被一个HTTP请求初始化的。当被中继 的连接两端关闭时，通道便消失。当一个门户(Portal)必须存在或中介(Intermediary)不能解释中继的通讯时通道被经常使用。<br /> <br />
        2、协议分析的优势—HTTP分析器检测网络攻击<br />
        以模块化的方式对高层协议进行分析处理，将是未来入侵检测的方向。<br />
        HTTP及其代理的常用端口80、3128和8080在network部分用port标签进行了规定<br /> <br />
        3、HTTP协议Content Lenth限制漏洞导致拒绝服务攻击<br />
        使用POST方法时，可以设置ContentLenth来定义需要传送的数据长度，例如ContentLenth:999999999，在传送完成前，内 存不会释放，攻击者可以利用这个缺陷，连续向WEB服务器发送垃圾数据直至WEB服务器内存耗尽。这种攻击方法基本不会留下痕迹。<br />
        http://www.cnpaf.net/Class/HTTP/0532918532667330.html<br /> <br />
        4、利用HTTP协议的特性进行拒绝服务攻击的一些构思<br />
        服务器端忙于处理攻击者伪造的TCP连接请求而无暇理睬客户的正常请求（毕竟客户端的正常请求比率非常之小），此时从正常客户的角度看来，服务器失去响应，这种情况我们称作：服务器端受到了SYNFlood攻击（SYN洪水攻击）。<br />
        而Smurf、TearDrop等是利用ICMP报文来Flood和IP碎片攻击的。本文用“正常连接”的方法来产生拒绝服务攻击。<br />
        19端口在早期已经有人用来做Chargen攻击了，即Chargen_Denial_of_Service，但是！他们用的方法是在两台Chargen 服务器之间产生UDP连接，让服务器处理过多信息而DOWN掉，那么，干掉一台WEB服务器的条件就必须有2个：1.有Chargen服务2.有HTTP 服务<br />
        方法：攻击者伪造源IP给N台Chargen发送连接请求（Connect），Chargen接收到连接后就会返回每秒72字节的字符流（实际上根据网络实际情况，这个速度更快）给服务器。<br /> <br />
        5、Http指纹识别技术<br />
        &nbsp; &nbsp;Http指纹识别的原理大致上也是相同的：记录不同服务器对Http协议执行中的微小差别进行识别.Http指纹识别比TCP/IP堆栈指纹识别复杂许 多,理由是定制Http服务器的配置文件、增加插件或组件使得更改Http的响应信息变的很容易,这样使得识别变的困难；然而定制TCP/IP堆栈的行为 需要对核心层进行修改,所以就容易识别.<br />
        &nbsp; &nbsp;&nbsp; &nbsp;要让服务器返回不同的Banner信息的设置是很简单的,象Apache这样的开放源代码的Http服务器,用户可以在源代码里修改Banner信息,然 后重起Http服务就生效了；对于没有公开源代码的Http服务器比如微软的IIS或者是Netscape,可以在存放Banner信息的Dll文件中修 改,相关的文章有讨论的,这里不再赘述,当然这样的修改的效果还是不错的.另外一种模糊Banner信息的方法是使用插件。<br />
        常用测试请求：<br />
        1：HEAD/Http/1.0发送基本的Http请求<br />
        2：DELETE/Http/1.0发送那些不被允许的请求,比如Delete请求<br />
        3：GET/Http/3.0发送一个非法版本的Http协议请求<br />
        4：GET/JUNK/1.0发送一个不正确规格的Http协议请求<br />
        Http指纹识别工具Httprint,它通过运用统计学原理,组合模糊的逻辑学技术,能很有效的确定Http服务器的类型.它可以被用来收集和分析不同Http服务器产生的签名。<br /> <br />
        6、其他：为了提高用户使用浏览器时的性能，现代浏览器还支持并发的访问方式，浏览一个网页时同时建立多个连接，以迅速获得一个网页上的多个图标，这样能更快速完成整个网页的传输。<br />
        HTTP1.1中提供了这种持续连接的方式，而下一代HTTP协议：HTTP-NG更增加了有关会话控制、丰富的内容协商等方式的支持，来提供<br />
        更高效率的连接`
    },
    {
        'author':'August','title':'Web开发者不容错过的20段CSS代码',
        'editor_time':'2015-10-22','classic':'HTML/CSS','icon':'Imgs/1.jpg',
        'intros':'1.CSSResets　　网络上关于CSS重置的代码非常多。本段代码是根据EricMeyer\'' +
        'sresetcodes进行改编的，里面包含一点响应式图片和所有核心元素的边界框设置，' +
        '这样就可以保持页边距和填充可以很好地对齐。 ...',
        'cont':''
    },
    {
        'author':'Alice','title':'前端开发必须知道的ES6的十大特征',
        'editor_time':'2016-03-14','classic':'JavaSc','icon':'Imgs/1.jpg',
        'intros':'本文主要针对ES6做一个简要介绍。它是一种新的javascript规范。' +
        '如果你想对ES6有一个快速的了解，那么请继续往下读，去了解当今最流行的编程语言JavaScript' +
        '最新一代的十大特性。以下是ES6排名前十的最佳特性列 ...',
        'cont':''
    },
    {
        'author':'艾瑞卡',
        'title':'JavaScript数组去重的6个方法',
        'editor_time':'2016-07-22',
        'classic':'JavaS',
        'icon':'Imgs/cg-3.jpg',
        'intros':'方法一无需思考，我们可以得到O(n^2)复杂度的解法。定义一个变量数组' +
        'res保存结果，遍历需要去重的数组，如果该元素已经存在在res中了，则说明是重复的元素，' +
        '如果没有，则放入res中。javascript代码 ...',
        'cont':''
    },
    {
        'author':'豪大大','title':'jQuery.prop() 使用详解',
        'classic':'HTML/CSS',
        'editor_time':'2013-10-22','icon':'Imgs/7.jpg',
        'intros':`<p>prop()函数用于设置或返回当前jQuery对象所匹配的元素的属性值。</p>
该函数属于jQuery对象(实例)。如果需要删除DOM元素的属性，请使用removeProp()函数...`,
        'cont':`<p>prop()函数用于设置或返回当前jQuery对象所匹配的元素的属性值。</p>
<p>该函数属于jQuery对象(实例)。如果需要删除DOM元素的属性，请使用removeProp()函数。</p>
<p>语法</p>
<p>jQuery 1.6 新增该函数。prop()函数有以下两种用法：</p>
<p>用法一：</p>
<p>jQueryObject.prop( propertyName [, value ] )<br />
</p>
<p>设置或返回指定属性propertyName的值。如果指定了value参数，则表示设置属性propertyName的值为value；如果没有指定value参数，则表示返回属性propertyName的值。</p>
<p>参数value还可以是函数，prop()将根据匹配的所有元素遍历执行该函数，函数中的this指针将指向对应的DOM元素。prop()还会为函数传入两个参数：第一个参数就是该元素在匹配元素中的索引，第二个参数就是该元素propertyName属性当前的值。函数的返回值就是为该元素的propertyName属性设置的值。</p>
<p>用法二：</p>
<p>jQueryObject.prop( object )<br />
</p>
<p>以对象形式同时设置任意多个属性的值。对象object的每个属性对应propertyName，属性的值对应value。</p>
<p>注意：prop()函数的所有"设置属性"操作针对的是当前jQuery对象所匹配的每一个元素；所有"读取属性"的操作只针对第一个匹配的元素。<br />
参数</p>
<p>请根据前面语法部分所定义的参数名称查找对应的参数。</p>
<p>参数&nbsp;描述<br />
propertyName&nbsp;String类型指定的属性名称。<br />
value&nbsp;可选/Object/Function类型指定的属性值，或返回属性值的函数。<br />
object&nbsp;Object类型指定的对象，用于封装多个键值对，同时设置多项属性。<br />
参数value可以是包括对象和数组在内的任意类型。</p>
<p>返回值</p>
<p>prop()函数的返回值是任意类型，返回值的类型取决于当前prop()函数执行的是"设置属性"操作还是"读取属性"操作。</p>
<p>如果prop()函数执行的是"设置属性"操作，则返回当前jQuery对象本身；如果是"读取属性"操作，则返回读取到的属性值。</p>
<p>如果当前jQuery对象匹配多个元素，返回属性值时，prop()函数只以其中第一个匹配的元素为准。如果该元素没有指定的属性，则返回undefined。</p>
<p>prop()和attr()的主要区别：prop()函数针对的是DOM元素(JS Element对象)的属性，attr()函数针对的是DOM元素所对应的文档节点的属性。详情请查看jQuery函数attr()和prop()的区别。<br />
</p>
<p><strong>注意事项</strong></p>
<p>1、如果通过prop()函数更改&lt;input&gt;和&lt;button&gt;元素的type属性，在多数浏览器上将会抛出一个错误，因为该属性一般不允许在后期更改。</p>
<p>2、如果使用prop()函数操作表单元素的checked、selected、disabled等属性，如果该元素被选中(或禁用)，则返回true，否则(意即HTML中没有该属性)返回false。</p>
<p>3、prop()函数还可以设置或返回DOM元素的Element对象上的某些属性，例如：tagName、selectedIndex、nodeName、nodeType、ownerDocument、defaultChecked和defaultSelected等属性。</p>
<p>4、在IE9及更早版本中，如果使用prop()函数设置的属性值不是一个简单的原始值(String、Number、Boolean)，并且在对应的DOM元素被销毁之前，该属性没有被移除，则可能会导致内存泄漏问题。如果你只是为了存储数据，建议你使用data()函数，以避免内存泄漏问题。</p>
`
    },
    {
        'author':'拎壶充','title':'手把手教你玩转 CSS3 3D 技术',
        'classic':'性能优化','editor_time':'2013-12-22',
        'icon':'Imgs/cg-1.jpg',
        'intros':'要玩转css3的3d，就必须了解几个词汇，便是透视(perspective)、旋转(rotate)和移动(translate)。' +
        '透视即是以现实的视角来看屏幕上的2D事物，从而展现3D的效果。旋转则不再是2D平面上的旋转，而是三维坐标系的旋 ...',
        'cont':''
    },
    {
        'author':'terrytang','title':'总有一种感想','classic':'面试经验',
        'editor_time':'2014-01-17','icon':'Imgs/1.jpg',
        'intros':'前段时间刚刚换了工作，半个中国，一下子就跨越了。人生总是充满着选择，每一次不同的选择总是有不一样的效果。' +
        '刚来新公司一段时间，没什么实质性需要忙碌的，处于熟悉阶段吧。公司目前用的是ES6+react+redux ...',
        'cont':''
    },
    {
        'author':'HHHxy',
        'title':'开发中会遇到的Ajax问题',
        'classic':'开发调试','editor_time':'2012-02-22',
        'icon':'Imgs/cg-4.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，就连发展中国家和地区的经济活动' +
        '都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。在这个超级链接、随时在线的现代世界， ...',
        'cont':''
    },
    {
        'author':'HHHxy','title':'Web移动端开发技巧',
        'classic':'手机移动','editor_time':'2012-02-22',
        'icon':'Imgs/5.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
    '就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。' +
    '在这个超级链接、随时在线的现代世界， ...',
        'cont':''
    },
    {
        'author':'许嵩','title':'刮刮乐之原生js','classic':'性能优化','editor_time':'2015-05-22',
        'icon':'Imgs/cg-2.jpg','intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
    '就连发展中国家和地区的经济活动都已经有5%以上在线进行了（相关数据请参考本文后面的资源）。' +
    '在这个超级链接、随时在线的现代世界， ...',
        'cont':''
    },
    {
        'author':'August',
        'title':'Web开发者不容错过的20段CSS代码',
        'editor_time':'2015-10-22',
        'classic':'HTML/CSS',
        'icon':'Imgs/1.jpg',
        'intros':'1.CSSResets　　网络上关于CSS重置的代码非常多。本段代码是根据EricMeyer’sresetcodes进行改编的' +
    '，里面包含一点响应式图片和所有核心元素的边界框设置，这样就可以保持页边距和填充可以很好地对齐。 ...',
        'cont':''
    },
    {
        'author':'Alice',
        'title':'前端开发必须知道的ES6的十大特征',
        'editor_time':'2016-03-14',
        'classic':'JavaSc',
        'icon':'Imgs/1.jpg',
        'intros':'本文主要针对ES6做一个简要介绍。它是一种新的javascript规范。' +
    '如果你想对ES6有一个快速的了解，那么请继续往下读，去了解当今最流行的编程语言JavaScript最新一代的十大特性。' +
    '以下是ES6排名前十的最佳特性列 ...',
        'cont':''
    },
    {
        'author':'艾瑞卡',
        'title':'JavaScript数组去重的6个方法',
        'editor_time':'2016-07-22','classic':'JavaS',
        'icon':'Imgs/cg-3.png','intros':'方法一无需思考，我们可以得到O(n^2)复杂度的解法。定义一个变量数组res保存结果，' +
    '遍历需要去重的数组，如果该元素已经存在在res中了，则说明是重复的元素，如果没有，则放入res中。javascript代码 ...',
        'cont':''
    },
    {
        'author':'豪大大','title':'模仿奔驰官网一个banner特效',
        'classic':'HTML/CSS',
        'editor_time':'2013-10-22',
        'icon':'Imgs/7.jpg',
        'intros':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果的时候我的心哐当一下；长这么大没做过那么逼 ...',
        'cont':`<p>prop()函数用于设置或返回当前jQuery对象所匹配的元素的属性值。</p>
该函数属于jQuery对象(实例)。如果需要删除DOM元素的属性，请使用removeProp()函数...`,
        'cont':`<p>prop()函数用于设置或返回当前jQuery对象所匹配的元素的属性值。</p>
<p>该函数属于jQuery对象(实例)。如果需要删除DOM元素的属性，请使用removeProp()函数。</p>
<p>语法</p>
<p>jQuery 1.6 新增该函数。prop()函数有以下两种用法：</p>
<p>用法一：</p>
<p>jQueryObject.prop( propertyName [, value ] )<br />
</p>
<p>设置或返回指定属性propertyName的值。如果指定了value参数，则表示设置属性propertyName的值为value；如果没有指定value参数，则表示返回属性propertyName的值。</p>
<p>参数value还可以是函数，prop()将根据匹配的所有元素遍历执行该函数，函数中的this指针将指向对应的DOM元素。prop()还会为函数传入两个参数：第一个参数就是该元素在匹配元素中的索引，第二个参数就是该元素propertyName属性当前的值。函数的返回值就是为该元素的propertyName属性设置的值。</p>
<p>用法二：</p>
<p>jQueryObject.prop( object )<br />
</p>
<p>以对象形式同时设置任意多个属性的值。对象object的每个属性对应propertyName，属性的值对应value。</p>
<p>注意：prop()函数的所有"设置属性"操作针对的是当前jQuery对象所匹配的每一个元素；所有"读取属性"的操作只针对第一个匹配的元素。<br />
参数</p>
<p>请根据前面语法部分所定义的参数名称查找对应的参数。</p>
<p>参数&nbsp;描述<br />
propertyName&nbsp;String类型指定的属性名称。<br />
value&nbsp;可选/Object/Function类型指定的属性值，或返回属性值的函数。<br />
object&nbsp;Object类型指定的对象，用于封装多个键值对，同时设置多项属性。<br />
参数value可以是包括对象和数组在内的任意类型。</p>
<p>返回值</p>
<p>prop()函数的返回值是任意类型，返回值的类型取决于当前prop()函数执行的是"设置属性"操作还是"读取属性"操作。</p>
<p>如果prop()函数执行的是"设置属性"操作，则返回当前jQuery对象本身；如果是"读取属性"操作，则返回读取到的属性值。</p>
<p>如果当前jQuery对象匹配多个元素，返回属性值时，prop()函数只以其中第一个匹配的元素为准。如果该元素没有指定的属性，则返回undefined。</p>
<p>prop()和attr()的主要区别：prop()函数针对的是DOM元素(JS Element对象)的属性，attr()函数针对的是DOM元素所对应的文档节点的属性。详情请查看jQuery函数attr()和prop()的区别。<br />
</p>
<p><strong>注意事项</strong></p>
<p>1、如果通过prop()函数更改&lt;input&gt;和&lt;button&gt;元素的type属性，在多数浏览器上将会抛出一个错误，因为该属性一般不允许在后期更改。</p>
<p>2、如果使用prop()函数操作表单元素的checked、selected、disabled等属性，如果该元素被选中(或禁用)，则返回true，否则(意即HTML中没有该属性)返回false。</p>
<p>3、prop()函数还可以设置或返回DOM元素的Element对象上的某些属性，例如：tagName、selectedIndex、nodeName、nodeType、ownerDocument、defaultChecked和defaultSelected等属性。</p>
<p>4、在IE9及更早版本中，如果使用prop()函数设置的属性值不是一个简单的原始值(String、Number、Boolean)，并且在对应的DOM元素被销毁之前，该属性没有被移除，则可能会导致内存泄漏问题。如果你只是为了存储数据，建议你使用data()函数，以避免内存泄漏问题。</p>
`
    },
    {
        'author':'Alice','title':'前端WEB—10倍提升应用性能的10个建议',
        'classic':'性能优化','editor_time':'2012-02-22',
        'icon':'Imgs/cg-5.jpg',
        'intros':'提升Web应用的性能从未像今天这样刻不容缓。在线经济活动的比例日益提高，' +
        '就连发展中国家和地区的经济活动都已经有5%以上在线进行了。在这个超级链接、随时在线的现代世界， ...',
        'cont':''
    },
    {
        'author':'大脸鸡排','title':'初次召见ajax,，过程中的皮毛笔记',
        'classic':'JavaScript-Ajax','editor_time':'2012-07-28','icon':'Imgs/cg-2.jpg',
        'intros':` 一，什么是ajax<br />
ajax : Asynchronous JavaScript and XML (异步JavaScript和XML)<br />
ajax说白了就是:用javascript异步形式去操作xml<br />
做的工作(作用)：数据交互<br />`,
        'cont':` 一，什么是ajax<br />
ajax : Asynchronous JavaScript and XML (异步JavaScript和XML)<br />
ajax说白了就是:用javascript异步形式去操作xml<br />
做的工作(作用)：数据交互<br />
作用：<br />
节省用户操作，时间，提高用户体验，减少数据请求<br />
传输获取数据（也就是ajax可以在不刷新页面的情况下发送请求到某个地方获取数据）<br /> <br />
二、ajax流程<br />
1，打开浏览器（创建ajax对象）<br />
2，在地址栏输入地址（<br />
&nbsp; &nbsp;&nbsp;&nbsp;open方法有3个参数：<br />
&nbsp; &nbsp;&nbsp;&nbsp;（1）打开方式（get/post）,<br />
&nbsp; &nbsp;&nbsp;&nbsp;（2）请求的地址<br />
&nbsp; &nbsp;&nbsp;&nbsp;（3）是否异步<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;异步:非阻塞 前面的代码不会影响后面代码的执行 true<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;同步:阻塞 前面的代码会影响后面代码的执行（当后面的代码要用到前面的代码时（前面工作未完成，是不会执行后面代码的），用同步） false<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; //ajax一般用异步，<br />
3，提交 发送请求<br />
4，等待服务器返回内容<br />
<br /> <br />
三、Get和Post的区别<br />
1，传输方式的区别<br />
&nbsp; &nbsp; Get通过url地址传输<br />
&nbsp; &nbsp; Post通过浏览器内部传输<br /> <br />
2，传输数据量<br />
&nbsp; &nbsp;&nbsp;&nbsp;Get有数据量限制，每个浏览器都不同<br />
&nbsp; &nbsp;&nbsp;&nbsp;Post理论上无限<br /> <br /> <br />
get方式传的值是一个字符串类型，不能传递其他的数据类型<br />
post可以传多种类型：如文本类型，二进制类型的<br /> <br />
四、表单：数据的提交<br />
&nbsp; &nbsp;&nbsp; &nbsp; 表单3个属性<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;（1） action : 数据提交的地址，默认是当前页面<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;（2）method : 数据提交的方式，默认是get方式<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 1.get<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 把数据名称和数据值用=连接，如果有多个的话，那么他会把多个数据组合用&amp;进行连接，然后把数据放到url?后面传到指定页面<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; url长度限制的原因，我们不要通过get方式传递过多的数据<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 2.post<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 理论上无限制<br />
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;（3）enctype : 提交的数据格式，默认application/x-www-form-urlencoded<br /> <br />
五、readyState : ajax工作状态<br />
有5种状态：<br />
0（初始化）还没有调用open()方法<br />
1（载入）已调用send()方法，正在发送请求<br />
2（载入完成）send()方法完成，已收到全部响应内容<br />
3（解析）正在解析响应内容<br />
4（完成）响应内容解析完成，可以在客户端调用了<br /> <br />
六、status : 服务器状态，http状态码(1xx:消息,2xx:成功，3xx:重定向，4xx:请求错误，（5、6字开头）服务器错误)`
    },
    {
        'author':'豪大大','title':'模仿奔驰官网一个banner特效',
        'classic':'HTML/CSS',
        'editor_time':'2013-10-22',
        'icon':'Imgs/6.jpg',
        'intros':'公司设计找的一个banner轮播的效果，当初第一眼看到这个效果的时候我的心哐当一下；长这么大没做过那么逼 ...',
        'cont':''
    }
];
function stopFunc(e){
    e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
}
var pt_articles=$(".gc-pt-articles");
var page_articles=4;//代表每个页面文章数
var arr_search_art=[];//用来存放搜索的数组
function show_need_article(items,index){
    pt_articles.empty();
    pt_articles.append('<div class="pt-base-article">' +
        '<div class="article-sty">' +
        '<div class="atc-sty-head">' +
        '<div class="atc-head-icon icon-medium icon-larger"><img src="'+items[index].icon+'"></div>' +
        '<div class="atc-head-intro intro-medium intro-larger">' +
        '<div class="atc-author-title">' +
        '<a href="#" class="atc-author-sty">' + items[index].author + ' | </a><a href="#" class="atc-title-sty">' + items[index].title + '</a><br>' +
        '</div>' +
        '<div class="atc-classic classic-mgt-small classic-mgt-medium classic-mgt-large classic-mgt-larger">' +
        '<span> 分类： ' + items[index].classic + '</span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="atc-main mgt-medium mgt-larger mgt-small">' +
        items[index].cont + '</div></div></div>');
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
        page_arts=Math.ceil(arr_search_art.length/page_articles);
        show_art_index(arr_search_art,page_arts);
        show_cards(arr_search_art,1);
    }
}
function request(paras){
    var url = location.href;
    var j;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {};
    for (var i=0; j=paraString[i]; i++){
        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if(typeof(returnValue)=="undefined"){
        return "";
    }else{
        return returnValue;
    }
}
window.onload=function(){
   var index=request('art_index');
   show_need_article(card_items,index);
};
$(function(){

    if(sessionStorage.getItem('isLogin')=='true'){
        $(".position-2").empty();
        $(".position-2").html(` 
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
    $(".position-1").click(function(){
        location.href="imp-index.html";
    });
    $("#site_search_ipt").keypress(function(ev){
        if(ev.keyCode==13){
            searchCardItem($("#site_search_ipt").val());
        }
    });
    $(".gc-ft-list-sty").mouseover(function(){
        $(this).css({background:'#178d88',cursor:'pointer'});
    }).mouseout(function(){
        $(this).css({background:' #0e5653'});
    });
});