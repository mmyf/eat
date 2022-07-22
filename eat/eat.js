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
let time = 0;
const speaker = new SpeechSynthesisUtterance();
speaker.rate = .8;
speaker.lang = 'zh';

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
		if (speechSynthesis) {
			speechSynthesis.cancel();
			speaker.text = text.innerText;
			speechSynthesis.speak(speaker);
		}
		time++;
		clearInterval(interval);
		interval = null;
		if (time >= 3) {
			text.innerText = '真矫情，你就说你吃不吃吧';
		}
	}
}