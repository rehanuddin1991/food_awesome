const loadData = (type) => {
   
    const url =  (type=="all")? "https://www.themealdb.com/api/json/v1/1/search.php?s" : `https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`;
      
    fetch(url)
        .then(res => res.json())
        .then(data => showItemWise(data.meals));


}

const showItemWise = (items) => {
    document.getElementById("mealContainer").innerHTML="";
    const meal_container = document.getElementById("mealContainer");

console.log(items)
    items.forEach(item => {
        const new_div = document.createElement("div");
        new_div.classList = "card bg-base-100 mt-2  h-[400px] w-80 shadow-xl";
        new_div.innerHTML = ` 
        <figure>
            <img
            src=${item.strMealThumb} class="w-[80%] h-[90%] w-80  "
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title text-orange-500">${item.strMeal}</h2>
            <p>${item.strMeal}</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Order Now</button>
            </div>
        </div>
        `;
        meal_container.appendChild(new_div);

    });


}
