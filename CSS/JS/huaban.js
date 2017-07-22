/**
 * Created by blue.EVE on 2017/1/13.
 */
(function(){//匿名方法，让所用变量和对象都处于局部
    function CanvasPhoto(){}

    CanvasPhoto.prototype = {
        /*
         初始化参数
         确定传入参数的正确性
         */
        initParam:function(opts){
            if(!opts){
                return;
            }
            this.setting = {//默认的参数对象
                canvas:""
            };
            this.canvas = opts.canvas;
            this.context = this.canvas.getContext("2d");
            this.colorObj = opts.colorObj;
            this.boldObj = opts.boldObj;
            this.eraser = opts.eraser;
            this.open = opts.open;
            this.empty = opts.empty;
            this.showText = opts.showText;
            this.flag = false;//判断鼠标是否松开，默认没有点击
            this.pen = true;//默认的肯定是画
            this.init();
            this.initEvent();
        },
        /*
         初始化画布
         */
        init:function(){//实例对象
            this.context.lineWidth = 2;
            this.context.strokeStyle = "rgba(255,0,0,0.5)";//红色
            this.context.font = "30px Verdanna";



            var gradient = this.context.createLinearGradient(0,0,this.canvas.width,0);
            gradient.addColorStop(0,"magenta");//绘制的位置(0-1)，颜色
            gradient.addColorStop(0.5,"blue");
            gradient.addColorStop(1,"red");
            this.context.fillStyle = gradient;//将文字设置成渐变的样式

            this.context.fillText(this.showText,80,180);
            this.context.stroke();//保存之前画（绘制）的内容   绘制当前路径

        },
        /*
         初始化事件
         */
        initEvent:function(){
            var _this = this;//区分作用域
            _this.canvas.addEventListener("mousedown",function(){//按下的事件
                _this.flag = true;
                var evt = evt || window.event;
                var startX = evt.clientX - _this.canvas.offsetLeft;
                var startY = evt.clientY - _this.canvas.offsetTop;
                if(_this.pen){
                    _this.context.moveTo(startX,startY);
                }else{
                    _this.context.clearRect(startX,startY,16,16);
                }

            });
            _this.canvas.addEventListener("mousemove",function(){//移动鼠标的事件
                if(_this.flag){
                    var evt = window.event;
                    var currentX = evt.clientX - _this.canvas.offsetLeft;
                    var currentY = evt.clientY - _this.canvas.offsetTop;
                    if(_this.pen){
                        _this.context.lineTo(currentX,currentY);
                    }else{
                        _this.context.clearRect(currentX,currentY,16,16);
                    }
                    _this.context.stroke();
                }

            });
            _this.canvas.addEventListener("mouseup",function(){//松开鼠标的事件
                _this.flag = false;
            });
            _this.canvas.addEventListener("mouseout",function(){//鼠标离开画布的事件
                _this.flag = false;
            });
            for(var  i = 0;i < _this.colorObj.length;i++){
                _this.colorObj[i].onclick = function(){
                    var chooseTag = document.getElementsByClassName("color active")[0];
                    chooseTag.className = chooseTag.className.replace("active","");
                    this.className += " active";
                    _this.context.beginPath();//表示重新开始绘制
                    _this.context.strokeStyle = this.getAttribute("data-color");
                }
            }
            for(var  i = 0;i < _this.boldObj.length;i++){
                _this.boldObj[i].onclick = function(){
                    var chooseTag = document.getElementsByClassName("bold active")[0];
                    chooseTag.className = chooseTag.className.replace("active","");
                    this.className += " active";
                    _this.context.beginPath();//表示重新开始绘制
                    _this.context.lineWidth = this.getAttribute("data-bold");
                }
            }
            _this.eraser.onclick = function(){
                _this.pen = false;
                _this.context.beginPath();
                _this.open.className = _this.open.className.replace("active","");
                this.className += " active";
            }
            _this.open.onclick = function(){
                _this.pen = true;
                _this.eraser.className = _this.eraser.className.replace("active","");
                this.className += " active";
            }
            _this.empty.onclick = function(){
                _this.context.beginPath();
                _this.context.clearRect(0,0,canvas.width,canvas.height);//start：x/y  End：x/y
                _this.context.stroke();
                _this.context.fillText("诠释面向对象思想 - Canvas开发DIY画板",80,180);
            }
        }
    }
    window["CanvasPhoto"] = new CanvasPhoto();

})();






