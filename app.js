const container = document.querySelectorAll('.container')

for (let i = 0; i < container.length; i++) {
	container[i].addEventListener('click', function () {
		const contentText = container[i].querySelector('.content')
		contentText.classList.toggle('active')
		const plus = container[i].querySelector('.plus')
		plus.classList.toggle('hidden')
		const minus = container[i].querySelector('.minus')
		minus.classList.toggle('hidden')
	})
}
