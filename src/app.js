let submit = document.getElementById('submit-new');
let linkList = document.getElementById('link-list');

submit.addEventListener('click', function() {
	let name = document.getElementById('link-title');
	let url = document.getElementById('link-url');
	if (name.value.length !== 0 && url.value.length !== 0) {
		injectNew(name.value, url.value);
		name.value = '';
		url.value = '';
	} else {
		alert('You are missing a required field!');
	}
});

function injectNew(name, url) {
	linkList.innerHTML += `<li class="list-group-item">${name} <a class="btn btn-primary" href="${url}" target="_blank">Visit</a></li>`;
}
