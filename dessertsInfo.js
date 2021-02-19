//Info 1
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/150663", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "ed3a66b6a4mshe12345c16ba360fp1ffce6jsn546fe6391e61",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
  function(data) {
    let displayInfo = "";
    let displayCard = "";
    let nutrition = data.nutrition.nutrients;
    for(var i = 0; i < nutrition.length;i++){
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="${data.images[1]}" alt="${data.title} image">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#dessertsCard1').html(displayCard);
  }
  )
.catch(err => {
	console.error(err);
});

//Info 2
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/109016", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "ed3a66b6a4mshe12345c16ba360fp1ffce6jsn546fe6391e61",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
  function(data) {
    let displayInfo = "";
    let displayCard = "";
    let nutrition = data.nutrition.nutrients;
    for(var i = 0; i < nutrition.length;i++){
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="${data.images[1]}" alt="${data.title} image">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#dessertsCard2').html(displayCard);
  }
  )
.catch(err => {
	console.error(err);
});

//Info 3
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/69867", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "b959db1482msh863a67168348f33p18f6f1jsnb16c1beeefbd",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
  function(data) {
    let displayInfo = "";
    let displayCard = "";
    let nutrition = data.nutrition.nutrients;
    for(var i = 0; i < nutrition.length;i++){
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="${data.images[1]}" alt="${data.title} image">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#dessertsCard3').html(displayCard);
  }
  )
.catch(err => {
	console.error(err);
});

//Info 4
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/87915", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "b959db1482msh863a67168348f33p18f6f1jsnb16c1beeefbd",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
  function(data) {
    let displayInfo = "";
    let displayCard = "";
    let nutrition = data.nutrition.nutrients;
    for(var i = 0; i < nutrition.length;i++){
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="${data.images[1]}" alt="${data.title} image">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#dessertsCard4').html(displayCard);
  }
  )
.catch(err => {
	console.error(err);
});

//Info 5
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/128368", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "9ba6b30026msh5ce0279880dc2e4p12b059jsn1686f10d4d32",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
  function(data) {
    let displayInfo = "";
    let displayCard = "";
    let nutrition = data.nutrition.nutrients;
    for(var i = 0; i < nutrition.length;i++){
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="${data.images[1]}" alt="${data.title} image">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#dessertsCard5').html(displayCard);
  }
  )
.catch(err => {
	console.error(err);
});