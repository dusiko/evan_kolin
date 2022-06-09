document.querySelector('.intro__text-subdonat').addEventListener('click', copyCardNum)

function copyCardNum(event) {
	if (event.target.classList.contains('card__num')) {
		if (event.target.innerText != 'номер скопірований!') {
			const target = event.target
			const text = target.innerText
			const range = document.createRange();
			range.selectNode(target);
			window.getSelection().removeAllRanges(); // clear current selection
			window.getSelection().addRange(range); // to select text
			window.navigator.clipboard.writeText(text);
			window.getSelection().removeAllRanges();// to deselect
			target.innerText = 'номер скопірований!'
			target.style.color = 'green'
			setTimeout(() => {
				target.style.color = '#212121'
				target.innerText = text
			}, 1000)
		}
	}
}

const videoList = [
	{ title: 'Колін - Душу тіло ложим', src: 'https://www.youtube.com/embed/ZovKS1T0XNg' },
	{ title: 'Колін - Українка', src: 'https://www.youtube.com/embed/U3kCZVK3Yqw' },
	{ title: 'Колін - Джавеліно', src: 'https://www.youtube.com/embed/VHziOPE51oI' },
	{ title: 'Колін - Мама стояла', src: 'https://www.youtube.com/embed/-WLFDPB0mb0' },
	{ title: 'Колін - Чи не пішов би ти', src: 'https://www.youtube.com/embed/sLNcg4jnyso' },
	{ title: 'Колін - Циганський танк', src: 'https://www.youtube.com/embed/wziya1qpTtg' },
	{ title: 'Колін ft. MC PAPA - Х*ярить водку (+18)', src: 'https://www.youtube.com/embed/-8hDSBwHWQ8' },
	{ title: 'Колін - Мало обіймав (Official Video, 2022)', src: 'https://www.youtube.com/embed/0t39fgE-nns' },
	{ title: 'Колін - Берегти твій сон', src: 'https://www.youtube.com/embed/CbUNdXFrfWo' },
	{ title: 'Колін - ЗСУ', src: 'https://www.youtube.com/embed/TnMKVWAFzek' },
	{ title: 'Колін - Сирена', src: 'https://www.youtube.com/embed/0mAsaUGLbbk' },
	{ title: 'Колін - Ти на колінах', src: 'https://www.youtube.com/embed/d4O2AQ0wrXY' },
	{ title: 'Колін - Привид Києва', src: 'https://www.youtube.com/embed/8mSHN9654KE' },
	{ title: 'Колін - А говорили', src: 'https://www.youtube.com/embed/L5YMOjW5Jdc' },
]

const videoBlockInner = document.querySelector('.video-block__inner')
function fillVideos(list) {
	list.forEach(item => {
		const video = document.createElement('DIV')
		video.classList.add('video-block__item')
		const iframe = document.createElement('iframe')
		iframe.classList.add('video-block__item-video')
		iframe.setAttribute('title', "YouTube video player")
		iframe.setAttribute('frameborder', '0')
		iframe.setAttribute('allow', 'accelerometer')
		iframe.setAttribute('autoplay', 'autoplay')
		iframe.setAttribute('clipboard-write', 'clipboard-write')
		iframe.setAttribute('encrypted-media', 'encrypted-media')
		iframe.setAttribute('gyroscope', 'gyroscope')
		iframe.setAttribute('picture-in-picture', 'picture-in-picture')
		iframe.setAttribute('allowfullscreen', 'allowfullscreen')
		iframe.setAttribute('src', item.src)
		video.appendChild(iframe)
		videoBlockInner.appendChild(video)
	})
}

fillVideos(videoList)