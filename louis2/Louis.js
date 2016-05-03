window.onload = function ()
{
    flag = 0;
    oDiv = document.getElementById("photo-show");
    pDiv=document.getElementById("photo");
    pLi = oDiv.getElementsByTagName("ul")[0].getElementsByTagName("li");
    pLi[0].style.backgroundColor = "#666666";

    time = setInterval("turn();", 5000);
    oDiv.onmouseover = function ()
    {
        clearInterval(time);
    }
    oDiv.onmouseout = function ()
    {
        time = setInterval("turn();", 6000);
    }

    for (var i = 0;i< pLi.length; i++)
    {
        pLi[i].onclick = function ()
        {
            turn(this.innerHTML);
            clearInterval(time);
        }

    }

    //login
    var oAl=document.getElementById("al");
    EventUtil.addHandler(oAl,"click",login);


    //list
    var oList1=document.getElementById("list_1")
    var oList2=document.getElementById("list_2")
    var oList3=document.getElementById("list_3")
    var oList4=document.getElementById("list_4")
    var oList5=document.getElementById("list_5")

    var oList11=document.getElementById("list_1_1")
    var oList22=document.getElementById("list_2_2")
    var oList33=document.getElementById("list_3_3")
    var oList44=document.getElementById("list_4_4")
    var oList55=document.getElementById("list_5_5")


    oList1.onmousemove=function()
    {
    oList11.style.display="block";
    }
    oList2.onmousemove=function()
    {
        oList22.style.display="block";
    }

    oList3.onmousemove=function()
    {
        oList33.style.display="block";
    }

    oList4.onmousemove=function()
    {
        oList44.style.display="block";
    }

    oList5.onmousemove=function()
    {
        oList55.style.display="block";
    }



    oList1.onmouseout=function()
    {
        oList11.style.display="none";
    }
    oList2.onmouseout=function()
    {
        oList22.style.display="none";
    }
    oList3.onmouseout=function()
    {
        oList33.style.display="none";
    }
    oList4.onmouseout=function()
    {
        oList44.style.display="none";
    }
    oList5.onmouseout=function()
    {
    oList55.style.display="none";
    }




//totop
    /*$("#totop").onclick=function()
    {
        document.documentElement.scrollTop=document.body.scrollTop=0;
    }*/
    var oToTop=document.getElementById("totop");

    oToTop.onclick=function()
    {
        document.documentElement.scrollTop=document.body.scrollTop=0;
    }



    //trave
    var tTrave1=document.getElementById("trave-1");
    var tLi=tTrave1.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var tTrave2=document.getElementById("trave-2");
    var tUl=tTrave2.getElementsByTagName("ul")[0];
    var now=0;

    for(var i=0;i<tLi.length;i++)
    {
        tLi[i].index =i;
        tLi[i].onclick=function()
        {
            now=this.index;
            tUl.style.top=now*(-305)+"px";
        }
    }





}
function turn(value)
{
    if (value != null) {
        flag = value - 2;
    }
    if (flag < pLi.length - 1)

        flag++;

    else
        flag = 0;
        pDiv.style.top = flag * (-450) + "px";


    for (var j = 0; j < pLi.length; j++) {
        pLi[j].style.backgroundColor = "#ffffff";
    }
    pLi[flag].style.backgroundColor = "#666666";
}





//login
function login ()
{
    var lDivd = document.getElementById('login');

    //oDivd.style.display="block";
    if (lDivd.style.display == "none")
    {
        lDivd.style.display = "block";
    }
    else
    {
        lDivd.style.display = "none";
    }
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

function showhide(ele)
{
    if(ele.style.display="block")
    {
        ele.style.display="none";
    }
    else
    {
        ele.style.display="block";
    }
}


