const products = {
	productInfo:
		{
			headphonesTitle: "Наушники",
			wirelessHeadphonesTitle: "Беспроводные наушники"
		},

	headphones: [
		{
			productId: '1',
			productImgUrl: './assets/img/Image1.png',
			productName: 'Apple BYZ S852I',
			productPrice: '2927 ₽',
			productRating: '4.7'
		},
		{
			productId: '2',
			productImgUrl: './assets/img/Image2.png',
			productName: 'Apple EarPods',
			productPrice: '2327 ₽',
			productRating: '4.5'
		},
		{
			productId: '3',
			productImgUrl: './assets/img/Image3.png',
			productName: 'Apple EarPods',
			productPrice: '2327 ₽',
			productRating: '4.5'
		},
		{
			productId: '4',
			productImgUrl: './assets/img/Image4.png',
			productName: 'Apple BYZ S852I',
			productPrice: '2927 ₽',
			productRating: '4.7'
		},
		{
			productId: '5',
			productImgUrl: './assets/img/Image5.png',
			productName: 'Apple EarPods',
			productPrice: '2327 ₽',
			productRating: '4.5'
		},
		{
			productId: '6',
			productImgUrl: './assets/img/Image6.png',
			productName: 'Apple EarPods',
			productPrice: '2327 ₽',
			productRating: '4.5'
		}
	],
	wirelessHeadphones: [
		{
			productId: '7',
			productImgUrl: './assets/img/Image7.png',
			productName: 'Apple AirPods',
			productPrice: '9527 ₽',
			productRating: '4.7'
		},
		{
			productId: '8',
			productImgUrl: './assets/img/Image8.png',
			productName: 'GERLAX GH-04',
			productPrice: '6527 ₽',
			productRating: '4.7'
		},
		{
			productId: '9',
			productImgUrl: './assets/img/Image9.png',
			productName: 'BOROFONE BO4',
			productPrice: '7527 ₽',
			productRating: '4.7'
		}
	]
}


// const productTitleElement = document.createElement("h1");
// productTitleElement.innerText = products.productInfo.title;
// document.body.append(productTitleElement);


// for (let i = 0; i < products.headphones.length; i++) {
//
// 	const productDivElement = document.createElement('div');
// 	productDivElement.style.width = '350px';
// 	productDivElement.style.height = '407px';
//
// 	const productImgElement = document.createElement('img');
// 	productImgElement.src = products.headphones[i].productImgUrl;
// 	productImgElement.style.width = '220px';
// 	productImgElement.style.height = '237px';
//
// 	const productNameElement = document.createElement('h3');
// 	productNameElement.innerText = products.headphones[i].productName;
//
// 	const productPriceElement = document.createElement('h3');
// 	productPriceElement.innerText = products.headphones[i].productPrice;
//
// 	const productRatingElement = document.createElement('h4');
// 	productRatingElement.innerText = products.headphones[i].productRating;
//
//
// 	productDivElement.append(productImgElement);
// 	productDivElement.append(productNameElement);
// 	productDivElement.append(productPriceElement);
// 	productDivElement.append(productRatingElement);
// 	document.body.append(productDivElement);
// }

document.body.style.backgroundColor = '#EAEAEA'

function renderAllCards(anyList) {
	renderTitle('headphonesTitle');
	renderProductCards(anyList.headphones);

	renderTitle('wirelessHeadphonesTitle');
	renderProductCards(anyList.wirelessHeadphones);
}

function renderTitle(anyTitle) {
	const productTitleElement = document.createElement("h1");
	productTitleElement.innerText = products.productInfo[anyTitle];
	document.body.append(productTitleElement);
}

function renderProductCards(anyProduct) {
	for (let i = 0; i < anyProduct.length; i++) {

		const productCard = createProductCard(anyProduct[i]);
		document.body.append(productCard);



		// const productDivElement = document.createElement('div');
		// productDivElement.style.width = '350px';
		// productDivElement.style.height = '407px';
		//
		// const productImgElement = document.createElement('img');
		// productImgElement.src = products.anyProduct[i].productImgUrl;
		// productImgElement.style.width = '220px';
		// productImgElement.style.height = '237px';
		//
		// const productNameElement = document.createElement('h3');
		// productNameElement.innerText = products.anyProduct[i].productName;
		//
		// const productPriceElement = document.createElement('h3');
		// productPriceElement.innerText = products.anyProduct[i].productPrice;
		//
		// const productRatingElement = document.createElement('h4');
		// productRatingElement.innerText = products.anyProduct[i].productRating;
		//
		//
		// productDivElement.append(productImgElement);
		// productDivElement.append(productNameElement);
		// productDivElement.append(productPriceElement);
		// productDivElement.append(productRatingElement);
		// document.body.append(productDivElement);
	}
}

function createProductCard(product) {
	const productDivElement = document.createElement('div');
	productDivElement.style.width = '350px';
	productDivElement.style.height = '407px';

	const productImgElement = document.createElement('img');
	productImgElement.src = product.productImgUrl;
	productImgElement.style.width = '220px';
	productImgElement.style.height = '237px';

	const productNameElement = document.createElement('h3');
	productNameElement.innerText = product.productName;

	const productPriceElement = document.createElement('h3');
	productPriceElement.innerText = product.productPrice;

	const productRatingElement = document.createElement('h4');
	productRatingElement.innerText = product.productRating;

	const buyButton = document.createElement('button');
	buyButton.innerText = 'купить';


	productDivElement.append(productImgElement);
	productDivElement.append(productNameElement);
	productDivElement.append(productPriceElement);
	productDivElement.append(productRatingElement);
	productDivElement.append(buyButton);
	return productDivElement;
}

renderAllCards(products);