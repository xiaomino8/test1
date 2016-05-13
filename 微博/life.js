window.onload=function()
{
    //var oA1=document.getElementById('a1');

   // EventUtil.addHandler(oA1,"click",login);




    $("#a1").click(function()
    {
        login();

    });


    function login ()
    {
        var oDivd = document.getElementById('login');

        $(".login-close").click(function ()
        {
            oDivd.style.display="none";
        })


        //oDivd.style.display="block";
        if (oDivd.style.display == "none")
        {
            $("#login").show(1000);
            //oDivd.style.display = "block";
        }
        else
        {

            oDivd.style.display = "none";
        }

    }




    //share
    var oInp = document.getElementById("inp1");
    var oSend = document.getElementById("send1");
    var oUl = document.getElementById("ul1");

    EventUtil.addHandler(oSend, "click", share);

    function share()
    {

        var oLi = document.createElement("li");
        var oDiv=document.createElement("div");
        var oLiBtn=document.createElement("button");

        oLiBtn.onclick=function()
        {
            oLi.remove();
        }
        //alert(oLiBtn);
        //var conter=oInp.value;

        //oLi='<li value="conter"><button id="libtn"></button></li>';
        //alert(oLi);
        oLi.innerHTML = oInp.value;
        oInp.value = "";

        //$("#ul1").html(oLi);

        if (oUl.children.length > 0)
        {
            oUl.insertBefore(oLi, oUl.children[0]);
            oLi.appendChild(oLiBtn);
        }
        else
        {
            oUl.appendChild(oLi);
            oLi.appendChild(oLiBtn);
        }

        var iHeight=oLi.offsetHeight;

        oLi.style.height='0';

        startMove(oLi, {height: iHeight}, function (){
            startMove(oLi, {opacity: 100});
        });



    }








    //固定位置
    var oTop=document.getElementById("totop");
    var screenW=document.documentElement.clientWight||document.body.clientWidth;
    var screenH=document.documentElement.clientHeight||document.body.clientHeight;

    oTop.style.left=screenW-oTop.offsetWidth+"px";
    oTop.style.top=screenH-oTop.offsetHeight+"px";


    window.onscroll = function()
    {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = screenH - oTop.offsetHeight + scrolltop +"px";


    }



    //TO-TOP
    EventUtil.addHandler(oTop,"click",ToTop);
    function ToTop()
    {

        document.documentElement.scrollTop = document.body.scrollTop =0;

    }

    $("#main_nav-2-show").click(function()
    {
        var nav2=document.getElementById("main_nav2");
        var nUl=nav2.getElementsByTagName("ul")[0];

        //alert(nUl);
        //nUl.style.height=290+"px";
        //nUl.animate({height:"290px"});


        if(this.value=="show")
        {
            this.value="hide";
            startMove(nUl, {height: 290});
        }
        else if(this.value=="hide")
        {
            this.value="show";
            startMove(nUl, {height: 190});
        }



    })

    //gobal
    var guBtn=$(".share_write-1").find("button");
    //var gUl=$(".share_write-1").find("ul")[1];
    var gUl=document.getElementsByClassName("rightul")[0] ;




   guBtn.click(function()
    {
         var temporary=getStyle(gUl,"height");
        if(temporary==22+"px")
        {
            startMove(gUl, {height: 110});
        }
        else
        {
            startMove(gUl, {height: 22});
        }

    })

    replaceuser();
    replaceTop();
    replaceHot();

}


var data=[
    {img:"user",h3:"XiaoMin"}
]

var data1=[
    {name:"three king",img:1},
    {name:"MyLove",img:2},
    {name:"sinCity",img:3}
]
var data2=[
    {thing:"GDP no.1"},
    {thing:"China Power"},
    {thing:"japan earthquake"},
    {thing:"18 magnitude earthquake in Japan"},
    {thing:"Japanese Complete Idiot"},
    {thing:"Xiapu tidal flat"},
    {thing:"Find the afanggong"},
    {thing:"Tokyo explosion"},
    {thing:"Unified global"}
]


function replaceuser()
{
    //alert(13123);
    var imf=document.getElementById("imfor");
    var tempimf=imf.innerHTML.replace(/^\s*/,"").replace(/\s*$/, "");
    //alert(imf.innerHTML);
    //alert(tempimf);


    for(i in data)
    {
       var tm= tempimf.replace(/{{h3}}/g,data[i].h3).replace(/{{index}}/g,data[i].img);
       imf.innerHTML = tm;
    }


}


function replaceTop()
{

    var imfUl=document.getElementById("imfor-2-ul");
    var tempimfT=imfUl.innerHTML.replace(/^\s*/,"").replace(/\s*$/,"");

    //alert(tempimfT);
    var top=[];


    for (i in data1)
    {
        var tm=tempimfT.replace(/{{one}}/g,data1[i].name).replace(/{{index}}/g,data1[i].img);
        top.push(tm);
    }
    imfUl.innerHTML=top.join("");
}

function replaceHot()
{
    var imfUl=document.getElementById("imfor-3-ul");
    var tempimfH=imfUl.innerHTML.replace(/^\s*/,"").replace(/\s*$/,"");

    //alert(tempimfH);
    var hot=[];

    for( i in data2)
    {
        var tm=tempimfH.replace(/{{index}}/g,data2[i].thing);
        hot.push(tm);
    }
    imfUl.innerHTML=hot.join("");
}


var EventUtil={
    addHandler: function (ele, type, handler)
    {
        if(addEventListener)
        {
            ele.addEventListener(type, handler,false);
        }
        else if (attachEvent)
        {
            ele.attachEvent("on"+type, handler);
        }
        else
        {
            ele["on"+type]=handler;
        }
    },
    removeHandler: function (ele,type, handler)
    {
        if(removeEventListener)
        {
            ele.removeEventListener(type, handler, false);
        }
        else if(detachEvent)
        {
            ele.detachEvent("on"+type,handler);
        }
        else
        {
            ele["on"+type]=null;
        }
    }


}


function getStyle(ele,name)
{
    if(ele.currentStyle)
    {
        return ele.currentStyle[name];
    }
    else
    {
        return getComputedStyle(ele,false)[name];
    }
}

function startMove(ele, json, fnEnd)
{
    clearInterval(ele.timer);
    ele.timer=setInterval(function (){
        var bStop=true;		//假设：所有值都已经到了

        for(var attr in json)
        {
            var cur=0;

            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(ele, attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(ele, attr));
            }

            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur!=json[attr])
                bStop=false;

            if(attr=='opacity')
            {
                ele.style.filter='alpha(opacity:'+(cur+speed)+')';
                ele.style.opacity=(cur+speed)/100;
            }
            else
            {
                ele.style[attr]=cur+speed+'px';
            }
        }

        if(bStop)
        {
            clearInterval(ele.timer);

            if(fnEnd)fnEnd();
        }
    }, 30);
}

function gettype(id,type)
{
    var htval=0;
    if(window.getComputedStyle)
    {
        htval=window.getComputedStyle(id,null).getPropertyValue(type);
    }
    else
    {
        htval=id.currentStyle[type];
    }
    return htval;
}