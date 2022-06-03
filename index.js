//get display id
let prov = document.getElementById("proverb");
let auth = document.getElementById("author");

//TODO:

async function getProverbJSON() {
	let dataURL = await fetch("http://localhost:6969/proverb");
	let Data = await dataURL.json();
	return Data;
}
let jsonData = getProverbJSON();
function resolvePromise() {
	jsonData.then((data) => {
		let selectedQuotes = data.quotes[Math.floor(Math.random() * 103)];
		displayTohtml(selectedQuotes);
	});
}

function displayTohtml(selected) {
	auth.textContent = "-	" + Object.values(selected)[1];
	prov.textContent = Object.values(selected)[0];
}
