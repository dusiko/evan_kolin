document.querySelector('.delete__list').addEventListener('click', deleteVideo)
function displayVideoList(data) {
	const list = document.querySelector('.delete__list')
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
	console.log(event)
	if (event.target === 'button')
		console.log('hello i am button')
	else
		console.log('bye bye i am not a button')
}

displayVideoList(videoList)