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
			document.execCommand("copy");
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

function showAllVideo() {
	const srcArr = ['https://www.youtube.com/embed/0mAsaUGLbbk', 'https://www.youtube.com/embed/d4O2AQ0wrXY', 'https://www.youtube.com/embed/8mSHN9654KE', 'https://www.youtube.com/embed/wziya1qpTtg', 'https://www.youtube.com/embed/TnMKVWAFzek']
	const $Parent = document.querySelector('.video-block__inner')
	$Parent.removeChild(this.event.target)
	for (let i = 0; i < srcArr.length; i++) {
		const $div = document.createElement('DIV')
		$div.classList.add('video-block__item')
		const $iframe = document.createElement('iframe')
		$iframe.classList.add('video-block__item-video')
		$iframe.setAttribute('src', srcArr[i])
		$iframe.setAttribute('title', 'YouTube video player')
		$iframe.setAttribute('frameborder', '0')
		$iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
		$iframe.setAttribute('allowfullscreen', 'allowfullscreen')
		$div.appendChild($iframe)
		$Parent.appendChild($div)
	}

}
