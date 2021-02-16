// Info 1
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9266/information?amount=100&unit=gram", {
	"method": "GET",
	"headers": {
		//"x-rapidapi-key": "b959db1482msh863a67168348f33p18f6f1jsnb16c1beeefbd",
		//"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
  function(data) {
    // console.log(data.name) // ingredient
    let displayInfo = "";
    let displayCard = "";
    let nutrition = data.nutrition.nutrients;
    for(var i = 0; i < nutrition.length;i++){
      // console.log(nutrition[i])
    //   console.log(nutrition[i].title)
    //   console.log(nutrition[i].amount + nutrition[i].unit)
    displayInfo = `${displayInfo} ${nutrition[i].title}: <u>${nutrition[i].amount}${nutrition[i].unit}</u><br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="https://www.healthifyme.com/blog/wp-content/uploads/2015/12/shutterstock_1670265607-1.jpg" alt="${data.name} image">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#card1').html(displayCard);
    // console.log(data.title) product
    // console.log(data.description) //product only
  }
  )
.catch(err => {
	console.error(err);
});

//Info 2
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9132/information?amount=100&unit=gram", {
	"method": "GET",
	"headers": {
		//"x-rapidapi-key": "b959db1482msh863a67168348f33p18f6f1jsnb16c1beeefbd",
		//"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
  function(data) {
    // console.log(data.name) // ingredient
    let displayInfo = "";
    let displayCard = "";
    let nutrition = data.nutrition.nutrients;
    for(var i = 0; i < nutrition.length;i++){
      // console.log(nutrition[i])
    //   console.log(nutrition[i].title)
    //   console.log(nutrition[i].amount + nutrition[i].unit)
    displayInfo = `${displayInfo} ${nutrition[i].title}: <u>${nutrition[i].amount}${nutrition[i].unit}</u><br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="https://specialtyproduce.com/sppics/1223.png" alt="${data.name} image">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#card2').html(displayCard);
    // console.log(data.title) product
    // console.log(data.description) //product only
  }
  )
.catch(err => {
	console.error(err);
});