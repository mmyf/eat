const text = document.getElementById('text');
text.onclick = clickE;

const obj = [
	'黄焖鸡',
	'水饺',
	'面',
	'炒饭',
	'冒菜',
	'盖浇饭',
	'砂锅',
];
let interval;

function clickE() {
	if (!interval) {
		let i = 0;
		interval = setInterval(()=>{
			text.innerText = obj[i];
			i++;
			if (i === obj.length) {
				i = 0;
			}
		},100);
	} else {
		clearInterval(interval);
		interval = null;
	}
}