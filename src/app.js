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
	let newUrl = checkURL(url);
	linkList.innerHTML += `<li class="list-group-item">${name} <a class="btn btn-primary" href="${newUrl}" target="_blank">Visit</a></li>`;
}

function checkURL (url) {
	if(url.includes('http://'))
	{
		return;
	} else {
		let newUrl = 'http://' + url;
		return newUrl;
	}
}
