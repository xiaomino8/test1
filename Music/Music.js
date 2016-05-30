window.onload=function()
{

    var oBtn=$(".navlist").find("button");
    oBtn.click(function()
    {
       var attr= $(".navlist").find("ul").attr("overflow");
        alert(attr);

    });


        var oBtnp=$("#btnp").get(0);
        var oBtnn=$("#btnn").get(0);
        var oUl=$(".main").find("ul").get(0);
        slider(oBtnp,oBtnn,oUl);



    addSong();
    addMv();
    addTopSong();
    changesSong();
    //addSlid();
    playshow();





    //smallslider
    var smUl=document.getElementsByClassName("contro")[0];
    var smLis=smUl.getElementsByTagName("li");

    for(var i=0; i<smLis.length; i++)
    {
        smLis[i].index=i;
        smLis[i].onclick=function()
        {
           var smSu= $("#slide-small-i").animate({left:-this.index*400+"px"},500);
        }
    }



    //loding
    $("#load").fadeOut(1000);



}

$(document).ready(function()
{
    $("#load").fadeIn();


})







function playshow()
{

    var pDiv=$(".play").get(0);
    var pBtn=$("#palybars").get(0);

    pBtn.onclick=function()
    {


        if(pDiv.style.left==0||pDiv.style.left==0+"px")
        {
            startMove(pDiv,{left:-300});
        }
        else
        {
            startMove(pDiv,{left:0});
        }
    }


}


function slider(btnp,btnn,ele)
{
    btnp.onclick=function()
    {
        if(ele.style.left==0+"px")
        {
            ele.style.left=-2880+"px";

        }
        else
        {
            ele.style.left=ele.offsetLeft+720+"px";
             //var tra=ele.offsetLeft+720;
             //startMove(ele,{left:ele.offsetLeft+720});
        }
    }
    btnn.onclick=function()
    {
        if(ele.style.left==-2880+"px")
        {
            ele.style.left=0+"px";
        }
        else
        {
            ele.style.left=ele.offsetLeft-720+"px";
            //var tra=ele.offsetLeft-720;

        }
    }
    setInterval(function(){
        btnn.onclick();
    },2000)

}

function getStyle(ele,name){

    if(ele.currentStyle)
    {
        return ele.currentStyle[name];
    }
    else
    {
        return getComputedStyle(ele,false)[name];
    }

}
function startMove(ele,json,fnEnd)
{
    clearInterval(ele.timer);
    ele.timer=setInterval(function()
    {
        var bStop=true;
        for(var attr in json)
        {
            var cur=0;
            if(attr=="opacity")
            {
                cur=Math.round(parseFloat(getStyle(ele,attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(ele,attr));
            }

            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur!=json[attr])
                bStop=false;

            if(attr=="opacity")
            {
                ele.style.filter="alpha(opacity:"+(cur+speed)+")";
                ele.style.opacity=(cur+speed)/100;
            }
            else
            {
                ele.style[attr]=cur+speed+"px";
            }


        }

        if(bStop)
        {
            clearInterval(ele.timer)
            if(fnEnd)fnEnd();
        }

    },30);
}

function addSlid()
{
    var dat=[];
    var sUl=$(".slide-small").find("ul")[0];


    var temp=sUl.innerHTML.replace(/^\s*/,"").replace(/\s*$/, "");

    for(var i in dataS)
    {
        var temp1=temp.replace(/{{index}}/g,dataS[i].list);

        dat.push(temp1);

    }
    sUl.innerHTML=dat.join("");

}



function addMv()
{
    var dat=[];
    var mDiv=$(".mlist-list")[1];
    var mUl=mDiv.getElementsByTagName("ul")[0];
    var temp= $(mUl).html().replace(/^\s*/g,"").replace(/\s*$/g,"");
    for(var i in data)
    {
        var temp1=temp.replace(/{{index}}/g,data[i].list);
        dat.push(temp1);
    }
    mUl.innerHTML=dat.join("");
}


function addSong()
{

    var dat=[];
    var mDiv=$(".mlist-list")[0];
    var mUl=mDiv.getElementsByTagName("ul")[0];
    var temp= $(mUl).html().replace(/^\s*/g,"").replace(/\s*$/g,"");
    for(var i in data)
    {
        var temp1=temp.replace(/{{index}}/g,data[i].list);
        dat.push(temp1);
    }
    mUl.innerHTML=dat.join("");
}

function addTopSong()
{
    var mDiv=$(".topsong-b-list")[0];
    var mOl=mDiv.getElementsByTagName("ol")[0];
    var temp= $(mOl).html().replace(/^\s*/g,"").replace(/\s*$/g,"");


    var temp1=temp
        .replace(/{{img}}/g,dataTopSong[0].img)
        .replace(/{{frist}}/g,dataTopSong[0].frist)
        .replace(/{{second}}/g,dataTopSong[0].second)
        .replace(/{{third}}/g,dataTopSong[0].third)
        .replace(/{{fouth}}/g,dataTopSong[0].fouth)
        .replace(/{{fifth}}/g,dataTopSong[0].fifth)
        .replace(/{{sixth}}/g,dataTopSong[0].sixth)
        .replace(/{{seventh}}/g,dataTopSong[0].seventh)
        .replace(/{{eighth}}/g,dataTopSong[0].eighth)
        .replace(/{{ninth}}/g,dataTopSong[0].ninth);

    var fuck=mOl.innerHTML;

    mOl.innerHTML=temp1;



    var tUl=$(".topsong-b-menu").find("ul").get(0);
    var tLis=tUl.getElementsByTagName("li");
    for(var i=0; i<tLis.length; i++ )
    {
        tLis[i].index=i;
        tLis[i].onclick=function()
        {


           var fuck1=fuck
               .replace(/{{img}}/g,dataTopSong[this.index].img)
               .replace(/{{frist}}/g,dataTopSong[this.index].frist)
               .replace(/{{second}}/g,dataTopSong[this.index].second)
               .replace(/{{third}}/g,dataTopSong[this.index].third)
               .replace(/{{fouth}}/g,dataTopSong[this.index].fouth)
               .replace(/{{fifth}}/g,dataTopSong[this.index].fifth)
               .replace(/{{sixth}}/g,dataTopSong[this.index].sixth)
               .replace(/{{seventh}}/g,dataTopSong[this.index].seventh)
               .replace(/{{eighth}}/g,dataTopSong[this.index].eighth)
               .replace(/{{ninth}}/g,dataTopSong[this.index].ninth);

            mOl.innerHTML=fuck1;

        }
    }


}
function changesSong()
{
    var oPlay=$(".play").get(0);
    var temp=oPlay.innerHTML.replace(/^\s*/g,"").replace(/\s*$/g,"");
    var temp1=temp.replace(/{{index}}/g,dataPlayS[0].sname);
    oPlay.innerHTML=temp1;

}

