function copyCardNum(event) {
	if (event.target.classList.contains('card__num')) {
		const test = event.target.nextElementSibling
		test.select()
		document.execCommand("copy")
		const target = event.target
		const text = target.innerText
		target.innerText = 'номер скопірований!'
		target.style.color = 'green'
		setTimeout(() => {
			target.style.color = '#212121'
			target.innerText = text
		}, 1000)
	}
}

document.querySelector('.intro__text-subdonat').addEventListener('click', copyCardNum)