/**
 * Created by Sunshine on 2016/11/2.
 */
window.onload =function () {
    var Btn = document.getElementById('btn');
    // var Bg = document.getElementById('bg');
    var Login =document.getElementById('login');
    var Title =document.getElementById('title');
    Btn.onclick=function () {
        // Bg.style.display='block';
        Login.style.display='block';
        center()
    };
    function center() {
        var  _left = window.innerWidth/2-250;
        var  _top = window.innerHeight/2-175;
        Login.style.left = _left+'px';
            Login.style.top = _top+'px';
    }
    window.onresize = function () {
        center();
    };
    // 拖拽
    var l,t,y,x;
    var onoff =true;
    Title.onmousedown = function (e) {
        e =e||event;/*处理兼容性问题*/
        x=e.clientX;/*浏览器窗口左边*/
        y=e.clientY;/*浏览器窗口上边*/
        l=Login.offsetLeft;
        t=Login.offsetTop;/*距离浏览器上边的位置*/
        onoff =true;
        // console.log(x+","+y+"+l+","+t);
            document.onmousemove =function (e) {
                if(onoff){
                    e=e||event;
                    var _x=e.clientX; /*动态鼠标浏览器左边窗口距离*/
                    var _y=e.clientY;
                    var nowLeft = _x-x+l;
                    var nowTop =_y-y+t;
                    Login.style.left=nowLeft+'px';
                    Login.style.top=nowTop+'px';
                }
            };
            document.onmouseup =function () {
                onoff = false
            }
    }
};