let fav_foods = ['Sinigang', 'Cheese', 'Fries'];

// for ..of loop
for (foods of fav_foods) {
    function like_food(food) {
        return 'I like ' + food;
    }
    console.log(foods); 
    foods++;
}
 //.map()
let liked_foods = fav_foods.map(like_food);

console.log(liked_foods); 
  
