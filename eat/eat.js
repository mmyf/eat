const text = document.getElementById('text');
text.onclick = clickE;
let obj = [
	'黄焖鸡',
	'水饺',
	'面',
	'炒饭',
	'冒菜',
	'盖浇饭',
	'砂锅',
];
let interval;
let time = 0;
let speaker;
const randomFoods = ['火锅', '烤鸭' , '兰州拉面' , '串串香' , '酸辣粉',
	'热干面' , '肉夹馍' , '臭豆腐' , '肠粉' , '小笼包',
	'桂林米粉' , '山东煎饼' , '螺蛳粉' , '锅包肉' , '炉肉火烧',
	'刀削面' , '瓦罐汤' , '佛跳墙' , '天津煎饼果子' , '河南烩',
	'胡辣汤' , '台湾蚵仔煎' , '甜不辣' , '炸酱面' , '糖火烧',
	'奶油炸糕' , '馓子麻花' , '老北京驴打滚' , '叉烧包',
	'饺子' , '鸡仔饼' , '月饼' , '酥皮包',
	'酥皮包'  , '钵仔糕' , '煎堆' , '濑粉',
	'大列巴' , '烤冷面' ,'大庆坑烤', '黑龙江炸三角' ,'黄米切糕',
	'锅烙' ,'玫瑰酥饼' ,'大庆扒鸡' ,'豆腐乳', '延吉冷面',
	'鸡汤豆腐串', '长春酱肉', '新兴园蒸饺' ,'李连贵熏大饼',
	'生煎包', '头条糕', '排骨年糕', '徽州毛豆腐',
	'黄山烧饼', '淮南牛肉汤' ,'合肥鸭油烧饼', '阜阳格拉条',
	'石头粿' ,'符离集烧鸡' , '三河米饺',
	'玉林牛巴' ,'北海虾仔饼', '梧州冰泉豆浆' , '粽子',
	'恭城油茶', '马蹄糕', '三鲜豆皮' ,'四季美汤包',
	'碗糕', '鸭血粉丝汤' ,'无锡酱排骨' ,'昆山奥灶面',
	'泰州烫干丝' ,'蟹黄汤包', '汤圆' ,'涪陵油醪糟',
	'云吞面' , '糖油粑粑' ,'长沙口味虾',
	'湖南酱板鸭', '姊妹团子', '脑髓卷', '刮凉粉',
	'铅山烫粉', '扬州炒饭', '重庆抄手' ,'常德牛肉米粉',
	'南昌白糖糕' ,'南宁老友粉' ,'玉林牛巴', '下灌状元水丸子',
	'哈尔滨红肠', '无限手套' ,'克苏鲁', '原' , 'lava',
	'九头蛇', '烤串' , '蛙腿串', '铁', '皮带', '草根', '树皮',
	'',
];
if (speechSynthesis) {
	speaker = new SpeechSynthesisUtterance();
	speaker.rate = .8;
	speaker.lang = 'zh';
}

function clickSetting() {
	const cover = document.getElementById('cover');
	cover.style.display = 'flex';
}

function clickE() {
	if (!interval) {
		if (localStorage.foods) {
			obj = JSON.parse(localStorage.foods);
		}
		let i = 0;
		interval = setInterval(()=>{
			text.innerText = obj[i];
			i++;
			if (i === obj.length) {
				i = 0;
			}
		},100);
	} else {
		time++;
		clearInterval(interval);
		interval = null;
		if (time >= 3) {
			text.innerText = '真矫情，你就说你吃不吃吧';
		}
		if (speechSynthesis) {
			speechSynthesis.cancel();
			speaker.text = text.innerText;
			speechSynthesis.speak(speaker);
		}
	}
}

function clickGoon() {
	const tip = document.getElementById('tip');
	const panel = document.getElementById('panel');
	tip.style.display = 'none';
	panel.style.display = 'flex';

}

function clickOut() {
	const tip = document.getElementById('tip');
	const out = document.getElementById('out');
	tip.style.display = 'none';
	out.style.display = 'flex';
}

function cancel() {
	const tip = document.getElementById('tip');
	const out = document.getElementById('out');
	tip.style.display = 'flex';
	out.style.display = 'none';
	const panel = document.getElementById('panel');
	panel.style.display = 'none';
	const cover = document.getElementById('cover');
	cover.style.display = 'none';
}

function clickAddFood() {
	const food = document.getElementById('food');
	if (!localStorage.foods) {
		localStorage.foods = '[]';
	}
	const arr = JSON.parse(localStorage.foods);
	arr.push(food.value);
	localStorage.foods = JSON.stringify(arr);
	const str = `添加成功,现在有${arr.length}种食物勒！`;
	confirm(str);
	food.value = '';
}

function deleteAll() {
	delete localStorage.foods;
	confirm('已删除所有已定制内容');
}

function clickRandomFood() {
	const food = document.getElementById('food');
	food.value = randomFoods[Math.floor((Math.random() / (1 / randomFoods.length)))];
}