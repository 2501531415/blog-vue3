//返回一个过去了多久的时间 几周前-几月前等等 相对时间
function timeago(timestamp){
	const minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30;
	const now = new Date().getTime(); //获取当前时间毫秒
	const diffValue = now - timestamp; //时间差
	if (diffValue < 0) {
		return '刚刚';
	}
	const minC = diffValue / minute; //计算时间差的分，时，天，周，月
	const hourC = parseInt(diffValue / hour);
	const dayC = parseInt(diffValue / day);
	const weekC = diffValue / week;
	const monthC = diffValue / month;
	let result = ''
	if (monthC >= 1 && monthC <= 3) {
		result = " " + parseInt(monthC) + "月前"
	} else if (weekC >= 1 && weekC <= 3) {
		result = " " + parseInt(weekC) + "周前"
	} else if (dayC >= 1 && dayC <= 6) {
		result = " " + parseInt(dayC) + "天前"
	} else if (hourC >= 1 && hourC <= 23) {
		result = " " + parseInt(hourC) + "小时前"
	} else if (minC >= 1 && minC <= 59) {
		result = " " + parseInt(minC) + "分钟前"
	} else if (diffValue >= 0 && diffValue <= minute) {
		result = "刚刚"
	} else {
		const datetime = new Date();
		datetime.setTime(timestamp);
		const Nyear = datetime.getFullYear();
		const Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		const Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		const Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
		const Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		const Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		//这里如果需要精确到时分秒可以加上(这里我没有加)
		result = Nyear + "-" + Nmonth + "-" + Ndate
	}
	return result;
}

//日期格式化

function format(timestamp,tag){
    var date = ""
	if (String(timestamp).length != 13) {
		date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	} else {
		date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	}
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = date.getDate();
	var h = date.getHours() + ':';
	var m = date.getMinutes() + ':';
	var s = date.getSeconds();
    if(tag){
        return `${Y}${tag}${M}${tag}${D}`
    }else{
        return `${Y}年${M}月${D}日`
    }
	
}

//utc时间格式化

function utcFormat(timestamp){
	 // 转为正常的时间格式 年-月-日 时:分:秒
	 var T_pos = timestamp.indexOf('T');
	 var Z_pos = timestamp.indexOf('Z');
	 var year_month_day = timestamp.substr(0,T_pos);
	 var hour_minute_second = timestamp.substr(T_pos+1,Z_pos-T_pos-1);
	 var new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06
   
	 
 
	 // 处理成为时间戳
	var timestamp = new Date(Date.parse(new_datetime));
	 timestamp = timestamp.getTime();
	 timestamp = timestamp/1000;
   
	 // 增加8个小时，北京时间比utc时间多八个时区
	 timestamp = timestamp+8*60*60;
   
	 // 时间戳转为时间
	 var beijing_datetime = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
	 return beijing_datetime;
}


export {
    timeago,format,utcFormat
}