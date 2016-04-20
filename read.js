window.onload=function ()
{
    var oDiv=document.getElementById('div1');
    var aBtn=oDiv.getElementsByTagName('input');
    var aDiv=oDiv.getElementsByTagName('div');

    for(var i=0; i<aBtn.length;i++)
    {
        aBtn[i].index=i;
        aBtn[i].onclick=function ()
        {

            for(var i=0; i<aBtn.length;i++)
            {
                aBtn[i].className=''
                aDiv[i].style.display='none';
            }
            this.className='active';
            aDiv[this.index].style.display='block';
        }
    }
    
    var oA1=document.getElementById('a1');

    EventUtil.addHandler(oA1,"click",dengRu);

    

    function dengRu ()
    {
        var oDivd=document.getElementById('divd')
        oDivd.style.display='block'

        var e = window.event || event;

        e.stopPropagation();

    }

}

var EventUtil={
    addHandler: function (jd, type, handler)
    {
        if(addEventListener)
        {
            addEventListener(type, handler,false);
        }
        else if (attachEvent)
        {
            attachEvent("on"+type, handler);
        }
        else
        {
            jd["on"+type]=handler;
        }
    },
    removeHandler: function (jd,type, handler)
    {
        if(removeEventListener)
        {
            removeEventListener(type, handler, false);
        }
        else if(detachEvent)
        {
            detachEvent("on"+type,handler);
        }
        else
        {
            jd["on"+type]=null;
        }
    }
}