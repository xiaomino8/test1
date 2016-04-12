function ajax(url,fnSucc,fnFaild) 
{
    //创建对象
    if(window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    }
    else
    {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    

    //链接
    oAjax.open('GET',url,true);

    //发送
    oAjax.send();

    //处理
    oAjax.onreadystatechange=function ()
    {

        if(oAjax.readyState==4)
        {

            if(oAjax.status==200)
            {
               fnSucc(oAjax.responseText);
            }
            else
            {
                if(fnFaild)
                {
                    fnFaild(oAjax.status);
                }
            }
        }
    };
    
}