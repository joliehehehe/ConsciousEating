// Info 1
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9266/information?amount=100&unit=gram", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "32523caabcmsh23232363fbd9d08p1d80fejsncae62cd3ef9f",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
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
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="https://www.healthifyme.com/blog/wp-content/uploads/2015/12/shutterstock_1670265607-1.jpg" alt="${data.name} image">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#fruitsCard1').html(displayCard);
    // console.log(data.title) product
    // console.log(data.description) //product only
  }
  )
.catch(err => {
	console.error(err);
});

//Info 2
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9266/information?amount=100&unit=gram", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "32523caabcmsh23232363fbd9d08p1d80fejsncae62cd3ef9f",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
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
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="https://specialtyproduce.com/sppics/1223.png" alt="${data.name} image">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#fruitsCard2').html(displayCard);
    // console.log(data.title) product
    // console.log(data.description) //product only
  }
  )
.catch(err => {
	console.error(err);
});

//Info 3
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9266/information?amount=100&unit=gram", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "32523caabcmsh23232363fbd9d08p1d80fejsncae62cd3ef9f",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
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
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Honeydew.jpg" alt="${data.name} image">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#fruitsCard3').html(displayCard);
    // console.log(data.title) product
    // console.log(data.description) //product only
  }
  )
.catch(err => {
	console.error(err);
});

//Info 4
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9266/information?amount=100&unit=gram", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "32523caabcmsh23232363fbd9d08p1d80fejsncae62cd3ef9f",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
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
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F05%2Fmain%2Fmangoes-1706p10.jpg" alt="${data.name} image">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#fruitsCard4').html(displayCard);
    // console.log(data.title) product
    // console.log(data.description) //product only
  }
  )
.catch(err => {
	console.error(err);
});

//Info 5
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9266/information?amount=100&unit=gram", {
	"method": "GET",
	"headers": {
    "x-rapidapi-key": "32523caabcmsh23232363fbd9d08p1d80fejsncae62cd3ef9f",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
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
    displayInfo = `${displayInfo} ${nutrition[i].title}: ${nutrition[i].amount}${nutrition[i].unit}<br>`
      };//end loop

    displayCard = `${displayCard}
      <img class="card-img-top" src="https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg" alt="${data.name} image">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${displayInfo}</p>
      </div>`
    $('#fruitsCard5').html(displayCard);
    // console.log(data.title) product
    // console.log(data.description) //product only
  }
  )
.catch(err => {
	console.error(err);
});