/**
 * js 获取url 参数
 * 
 * @param name
 * @returns
 */
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

/**
 * js 获取url 请求的文件名称
 * 
 * @returns
 * 例如：http://localhost:8081/charity/CiShanHui.jsp
 * 也有可能是：http://cs.tempus.cn/DaShiJi09.jsp
 * 返回： CiShanHui.jsp
 */
function getQueryPathname() {
	var r = window.location.pathname;
    var arrT= r.split('/');
	if (r != null)
	{
	   if(arrT[2]==undefined)
	   {
	   return unescape(arrT[1].split(".")[0]);
	   }else{
	   return unescape(arrT[2].split(".")[0]);
	   }
		
     }
	return null;
}