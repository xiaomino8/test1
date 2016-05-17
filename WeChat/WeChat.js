
$(document).ready(function()
{


//sendmessage
    var messSent=$("#send");
    messSent.click(function()
    {
        var mtext=document.getElementById("message-chat-you");
        var mUl=$(".message-chat-y").find("ul")[0];
        var meshow=document.getElementsByClassName("message-chat-y")[0];

        if(mtext.value.length==0)
        {
            alert("place input");
        }
        else
        {
            var mLi=document.createElement("li");
            mLi.innerHTML=mtext.value;
            mtext.value="";

            if(mUl.children.length>0)
            {
                mUl.appendChild(mLi,mUl.children[0]);
            }
            else
            {
                mUl.appendChild(mLi);
            }

            mtext.focus();
        }

    })



//close-open
    var aClose= $(".message-chat-c").find("button")[0];
    aClose.onclick=function()
    {
        $(".message").fadeOut();
        $(".login").fadeIn();
    };

    var loGin=$(".login-in").find("input")[0];
    loGin.onclick=function()
    {
        $(".message").fadeIn();
        $(".login").fadeOut();
    };

    var WeChat=$(".wechat").find("input")[0];
    WeChat.onclick=function()
    {

        $(".login").fadeIn();
    };

    var cLogin=$(".login-header").find("a")[0];
    cLogin.onclick=function()
    {
        $(".login").fadeOut();
    };

    var setClose=$(".set-head").find("button");
    setClose.click(function()
    {
        $(".setting").fadeOut();
    })

    var setOpen=$(".message-nav-setting").find("a");
    setOpen.click(function()
    {
        $(".setting").fadeIn();
    })





});
window.onload=function()
{

//tuozhua
    var wechat=document.getElementsByClassName("wechat")[0];
    var login=document.getElementsByClassName("login")[0];
    var setting=document.getElementsByClassName("setting")[0];
    var message=document.getElementsByClassName("message")[0];

    //drag(message);
    drag(wechat);
    drag(login);
    drag(setting);


//add friend
    addof();

    var addF=$(".friend-list-search").find("a")[0];
    //var fUl= $(".friend-list-ul");

    addF.onclick=function()
    {
        fLi=document.createElement("li");
        var tem=$(".friend-list-ul").find("li")[5].innerHTML;

        var fUl=$(".friend-list-ul").get(0);

        fLi.innerHTML=tem;
        $(fLi).fadeIn(1000);
        fUl.insertBefore(fLi,fUl.childNodes[0]);


        //alert(tem);
        //var fUl=document.getElementsByClassName("friend-list-ul")[0];

    }

//loginPhoto
    var useP= $(".user").find("a");


     useP.click(function()
    {
        var self=this;
        showPhoto(self);

    })

    //messageuser photo
    var mUserP=$(".message-nav-user").find("a");

    mUserP.click(function()
    {
        var self=this;
        showPhoto(self);
    })


    //changeuser
    var cUser= $(".login-in").find("a");
    cUser.click(function()
    {
        $(".login").hide();
        var aall=document.getElementsByClassName("all")[0];

        oUser=document.createElement("div");
        oLogin=document.createElement("div");
        oAccount=document.createElement("input");
        oPass=document.createElement("input");
        oBtn=document.createElement("button");
        oClose=document.createElement("button");

        oClose.setAttribute("class","oclose");

        oAccount.setAttribute("class","ainput");
        oAccount.setAttribute("type","text");
        oAccount.setAttribute("placeholder","input Account");


        oPass.setAttribute("type","psaaword");
        oPass.setAttribute("class","ainput");
        oPass.setAttribute("placeholder","input Account");

        oBtn.setAttribute("class","obtn");
        oBtn.setAttribute("value","login");

        oUser.setAttribute("class","changlogin");
        oLogin.setAttribute("class","oinput");

        oLogin.appendChild(oAccount);
        oLogin.appendChild(oPass);
        oUser.appendChild(oClose);
        oUser.appendChild(oLogin);
        oUser.appendChild(oBtn);
        aall.appendChild(oUser);


        $(oClose).click(function()
        {
            $(oUser).fadeOut();
        })
        $(oBtn).click(function()
        {
            $(oUser).fadeOut();
            $(".message").fadeIn(1000);
        })

    })
}






function drag(ele)
{
    ele.onmousedown=function(ev)
    {
        var disX=0;
        var disY=0;
        var oEvent=ev||event;

        disX=oEvent.clientX-ele.offsetLeft;
        disY=oEvent.clientY-ele.offsetTop;

        document.onmousemove=function(ev)
        {
            var oEvent=ev||event;
            var l=oEvent.clientX-disX;
            var t=oEvent.clientY-disY;


            if(l<0){
                l=0;
            }
            else if(l>document.documentElement.clientWidth-ele.offsetWidth)
            {
                l=document.documentElement.clientWidth-ele.offsetWidth;
            }
            if(t<0){
                t=0;
            }
            else if(1>document.documentElement.clientHeight-ele.offsetHeight)
            {
                t=document.documentElement.clientHeight-ele.offsetHeight;
            }

            ele.style.left=l+'px';
            ele.style.top=t+'px';

        }

        document.onmouseup=function ()
        {

            document.onmousemove=null;
            document.onmouseup=null;
        };

    }

}


//addfriend
function addof()
{
    var fUl=document.getElementsByClassName("friend-list-ul")[0];
    var fLi=fUl.innerHTML.replace(/^\s*$/,"").replace(/^\s*/,"");
    var tem=[];

    for(i in data1)
    {

        tm=fLi.replace(/{{index}}/g,data1[i].img).replace(/{{name}}/g,data1[i].name);
        tem.push(tm);
    }

    fUl.innerHTML=tem.join("");
}

var data1=[
    {img:1,name:"Lisa"},
    {img:2,name:"Coco"},
    {img:3,name:"TDog"},
    {img:4,name:"Fala"},
    {img:5,name:"Xiba"},
    {img:6,name:"Jiba"}
];

data1.sort(mYsort);
function mYsort(a,b)
{
    if(a.name> b.name)
    {
        return 1;
    }
}
/*datata.sort(mYsort);
alert(datata[0].age);
alert(datata[1].age);
alert(datata[2].age);
alert(datata[3].age);
alert(datata[4].age);*/










//showBigPhoto
function showPhoto(ele)
{
    var pImg=document.createElement("div");
    var pClose=document.createElement("button");


    pImg.appendChild(pClose);
    ele.appendChild(pImg);

    $(pImg).animate({opacity: "toggle"});

    $(pClose).click(function(ev)
    {
        $(pImg).remove();
        var oEvent=ev||event;
        oEvent.stopPropagation();
    })
}


