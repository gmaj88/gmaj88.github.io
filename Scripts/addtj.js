let companyName, TJurl = 'http://works.gmaj.com.cn/Scripts/vlstat.php', IP = '127.0.0.1';
let script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', './Scripts/jstj.js');
if(document.querySelector('#IPInfo')){
	IP = document.querySelector('#IPInfo').getAttribute('value')
	+ '(' + document.querySelector('#ipc').lastElementChild.innerHTML.split('</span>')[1] + ')';
}
if (!localStorage.getItem('company') || localStorage.getItem('company') == 'null') {
	companyName = prompt('请来访登记：（输入姓名或公司！）');
	let reg = /[0-9]|[\s]/
	if (reg.test(companyName) || !companyName || companyName.length < 2) {
		companyName = prompt('请您输入真实的公司名：');
		if (reg.test(companyName) || !companyName || companyName.length < 2) {
			companyName = prompt('请您输入中文公司名：');
		}
	}
	if (!companyName == '') {
		localStorage.setItem('company', companyName)
		IP = `${IP}(${companyName})_git`
	}
	document.getElementsByTagName('body')[0].appendChild(script);
} else {
	companyName = localStorage.getItem('company')
	IP = `${IP}(${companyName})_git`
	document.getElementsByTagName('body')[0].appendChild(script);
}

