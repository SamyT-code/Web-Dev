
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Biscuit - ($9.99)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		sugarFree: true,
		lactoseFree: false,
		price: 9.99,
		image: "images/biscuit.jpg"
	},
	{
		name: "Bread ($2.35)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		sugarFree: false,
		lactoseFree: false,
		price: 2.35,
		image: "images/bread.jpg"
	},
	{
		name: "Broccoli - Inorganic ($1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 1.99,
		image: "images/broccoli-inorganic.jpg"
	},
	{
		name: "Broccoli - Organic ($2.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		sugarFree: true,
		lactoseFree: true,
		price: 2.99,
		image: "images/broccoli-organic.jpg"
	},

	{
		name: "Chicken wings ($5.00)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 5.00,
		image: "images/chicken-wings.jpg"
	},
	{
		name: "Garlic - ($4.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 4.99,
		image: "images/garlic.jpg"
	},
	{
		name: "Milk ($1.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: false,
		price: 1.50,
		image: "images/milk.jpg"
	},
	{
		name: "Raw Turmeric Organic - ($15.50)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		sugarFree: true,
		lactoseFree: true,
		price: 15.50,
		image: "images/turmeric.jpg"
	},	
	{
		name: "Raspberries - Organic ($7.50)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		sugarFree: true,
		lactoseFree: true,
		price: 7.50,
		image: "images/raspberries-organic.jpg"
	},
	{
		name: "Raspberries - Inorganic ($5.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: false,
		lactoseFree: true,
		price: 5.50,
		image: "images/raspberries-inorganic.jpg"
	},
	{
		name: "Red Bull [6 Pack] - ($14.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 14.99,
		image: "images/redBull.jpg"
	},
	{
		name: "Salmon ($10.00)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 10.00,
		image: "images/salmon.jpg"
	},
	{
		name: "Strawberries - Inorganic ($5.00)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: false,
		lactoseFree: true,
		price: 5.00,
		image: "images/strawberries-inorganic.jpg"
	},
	{
		name: "Strawberries - Organic ($7.00)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		sugarFree: false,
		lactoseFree: true,
		price: 7.00,
		image: "images/strawberries-organic.jpg"
	},
	{
		name: "Sugar-Free Sugar - ($2.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 2.50,
		image: "images/sugarFree.jpg"
	},
	{
		name: "Whole Grain Bread - ($7.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 7.99,
		image: "images/wholeGrainBread.jpg"
	},
	{
		name: "Lactose Free Butter - ($3.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 3.99,
		image: "images/lactoseButter.jpg"
	},
	{
		name: "Lactose Free Milk - ($11.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 11.99,
		image: "images/lactoseFreeMilk.jpg"
	},
	{
		name: "Lactose Ice Cream - ($6.00)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		sugarFree: true,
		lactoseFree: true,
		price: 6.00,
		image: "images/lactoseIceCream.png"
	}
];

//this function sort items by their price
function sortBy(prods){
	prods.sort(function (a,b){return a.price - b.price});
}


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts1(prods, restriction) {
	var products = [];
	for (let i = 0; i < prods.length; i += 1) {

		// if(restriction == "no"){
		// 	product_names.push(prods[i].name);
		// }

		if ((restriction == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
			products.push(prods[i]);
		}

		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
			products.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
			products.push(prods[i]);
		}
		else if ((restriction == "Diabetic") && (prods[i].sugarFree == true)) {
			products.push(prods[i]);
		}
		else if ((restriction == "lactoseIntol") && (prods[i].lactoseFree == true)) {
			products.push(prods[i]);
		}
		else if (restriction == "None") {
			products.push(prods[i]);
		}

	}
	sortBy(products);
	return products;
}

function restrictListProducts2(prods, restriction1, restriction2) {
	var products = [];

	for (let i = 0; i < prods.length; i += 1) {


		// if the user chose no for organic and the product from the list is organic, do nothing
		if ((restriction2 == "no") && (prods[i].organic == true)){
			continue
		}
		else{
				

			if ((restriction1 == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
				products.push(prods[i]);
			}
			else if ((restriction1 == "Vegetarian") && (prods[i].vegetarian == true)) {
				products.push(prods[i]);
			}
			else if ((restriction1 == "GlutenFree") && (prods[i].glutenFree == true)) {
				products.push(prods[i]);
			}
			else if ((restriction1 == "Diabetic") && (prods[i].sugarFree == true)) {
				products.push(prods[i]);
			}
			else if ((restriction1 == "lactoseIntol") && (prods[i].lactoseFree == true)) {
				products.push(prods[i]);
			}
			else if (restriction1 == "None") {
				products.push(prods[i]);
			}

		}
	}
	sortBy(products);
	return products;
}

function resetRadio() {
	document.getElementById("no").checked = false;
	document.getElementById("yes").checked = true;
}
var lucieVerify = false;
function lucie() {
	var body = document.getElementsByTagName('body')[0];
	var cartButton = document.getElementById("addCart");
	var name = document.getElementById('fname').value;
	var choice1 = document.getElementById('forLucie');
	var choice2 = document.getElementById('forEveryone');
	
	if (name.toLowerCase() == "lucie") {
		lucieVerify = true;
		body.style.fontSize = "150%";
		cartButton.style.fontSize = "100%";  //edited to make buttons also bigger
		document.getElementById('hi').innerHTML = "Hi " + name + "!";
		choice1.style.display = 'block';
		choice2.style.display = 'none';
	}
	else{
		lucieVerify = false;
		document.getElementById('hi').innerHTML = "Hi " + name + "!";
		choice1.style.display = 'none';
		choice2.style.display = 'block'
	}
}

function organicSelector() {
	var organicYes = document.getElementById('yes').checked;
	var organicNo = document.getElementById('no').checked;

	if (lucieVerify == true) {

		if (organicYes == true){
			populateListProductChoices2(dietSelect1.id, 'displayProduct', 'yes');
		}
	
		else if (organicNo == true){
			populateListProductChoices2(dietSelect1.id, 'displayProduct', 'no');
		}
	}
	
	else if (lucieVerify == false) {
		
		if (organicYes == true){
			populateListProductChoices2(dietSelect2.id, 'displayProduct', 'yes');
		}
	
		else if (organicNo == true){
			populateListProductChoices2(dietSelect2.id, 'displayProduct', 'no');
		}
	}
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts, productQuantity) {
	totalPrice = 0;
	var counter = 0;
	//console.log(chosenProducts);
	for (let i=0; i<products.length; i+=1) {
		
		if (chosenProducts.indexOf(products[i].name) > -1){
			var value = (products[i].price * parseInt(productQuantity[counter]));
			totalPrice += value;
			counter++;
		}
	}
	return Number(totalPrice.toFixed(2));
}