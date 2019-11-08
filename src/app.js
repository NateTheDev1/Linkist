// GLOBAL
let submit = document.getElementById('submit-new');
let linkList = document.getElementById('link-list');
let name = document.getElementById('link-title');
let url = document.getElementById('link-url');
let gitQuote = document.getElementById('git-quote');

// GIT QUOTE HANDLER
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			gitQuote.innerText = xhr.responseText;
		} else {
			gitQuote.innerText = 'Code On!';
		}
	}
};

xhr.open('GET', 'https://api.github.com/zen');
xhr.send();

// EVENTS TO LISTEN TO ENTER KEY
name.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		submit.click();
	}
});

url.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		submit.click();
	}
});

// CREATION CODE
submit.addEventListener('click', function() {
	if (name.value.length !== 0 && url.value.length !== 0) {
		injectNew(name.value, url.value);
		name.value = '';
		url.value = '';
	} else {
		alert('You are missing a required field!');
	}
});

// PLACE NEW BOOKMARK IN THE LIST
function injectNew(name, url) {
	let newUrl = checkURL(url);
	linkList.innerHTML += `<li class="list-group-item">${name} <a class="btn btn-primary" href="${newUrl}" target="_blank">Visit</a></li>`;
}

// Validate the URL
function checkURL(url) {
	if (url.includes('http://')) {
		return;
	} else {
		let newUrl = 'http://' + url;
		return newUrl;
	}
}
