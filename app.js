const submitBtn = document.querySelector('#submitBtn');
const removeBtn = document.querySelector('#removeBtn');
const imageBox = document.querySelector('#imageBox');
const apiKey = 'o8PHGtfAUKn9AyyUr59pRfchnupv1ORU';
const searchInput = document.querySelector('#searchTerm');

removeBtn.addEventListener('click', function (e) {
	e.preventDefault();
	imageBox.innerHTML = '';
});

submitBtn.addEventListener('click', function (e) {
	e.preventDefault();

	let searchTerm = searchInput.value;
	console.log(searchTerm, apiKey);
	const newImage = document.createElement('img');
	getGiphyURL(apiKey, searchTerm, newImage);
	searchInput.value = '';
});

async function getGiphyURL(apiKey, searchTerm, newImage) {
	const result = await axios.get(
		`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1&offset=0&rating=g&lang=en`
	);
	newImage.setAttribute('src', result.data.data[0].images.original.url);
	console.log(newImage);
	imageBox.prepend(newImage);
	return;
}
