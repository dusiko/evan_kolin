document.querySelector('.delete__list').addEventListener('click', deleteVideo)
document.querySelector('.btn__add').addEventListener('click', addNewVideo)
function displayVideoList(data) {
	const list = document.querySelector('.delete__list')
	list.innerText = ''
	data.forEach(item => {
		const li = document.createElement('li')
		li.innerText = item.title
		const delBtn = document.createElement('button')
		delBtn.setAttribute('type', 'button')
		delBtn.innerText = '-'
		delBtn.setAttribute('title', 'видалити трек з сайту')
		li.appendChild(delBtn)
		list.appendChild(li)
	})
}

function deleteVideo(event) {
	console.log(videoList)
	if (event.target.tagName === 'BUTTON') {
		const name = event.target.parentNode.innerText.slice(0, -1)
		if (confirm('Ти дійсно хочеш видалити трек "' + name + '" з сайта?')) {
			videoList.forEach((item, indx) => {
				if (item.title === name) {
					videoList.splice(indx, 1)
					event.target.parentNode.remove()
				}
			})
		}
	}
}

function addNewVideo() {
	const videoTitle = document.querySelectorAll('.admin__inputs')[0].value.trim()
	let videoSrc = document.querySelectorAll('.admin__inputs')[1].value.trim()

	if (videoList.some(item => item.title === videoTitle)) {
		alert('Така назва трека вже добавлена, зміни назву трека!')
		return
	} else if (videoTitle === '') {
		alert('Забули ввести назву трека!')
		return
	} else if (videoSrc === '') {
		alert('Забули ввести посилання на трек з ютуба!')
		return
	}
	videoSrc = formatURL(videoSrc)
	if (videoSrc === false) {
		alert('Неправильний адрес УРЛ')
		return
	} else if (videoList.some(item => item.src === videoSrc)) {
		alert('Таке посилання на ютуб відео вже є, перевірь адрес посилання відео!')
		return
	}

	videoList.unshift({
		title: videoTitle,
		src: videoSrc,
	})
	document.querySelectorAll('.admin__inputs').forEach(item => item.value = '')
	displayVideoList(videoList)
	alert('Трек успішно добавлений на сайт')
}

function formatURL(link) {
	const cutArr = link.split('').reverse()
	if (!cutArr.includes('/'))
		return false
	let i = 0
	let cut = ''
	do {
		cut += cutArr[i]
		i++
	} while (cutArr[i] !== '/')
	cut = cut.split('').reverse().join('')
	return 'https://www.youtube.com/embed/' + cut
}

displayVideoList(videoList)