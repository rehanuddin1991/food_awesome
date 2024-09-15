const loadData = (type) => {
    if(type!="potato")
    {
        document.getElementById("potato_btn").style.backgroundColor="lightcoral";
    }
    if(type=="potato")
    {
        document.getElementById("potato_btn").style.backgroundColor = "indigo";
        document.getElementById("potato_btn").style.color = "white";
        document.getElementById("soup_btn").style.backgroundColor = "lightcoral";
    }
    if (type == "soup") {
        document.getElementById("soup_btn").style.backgroundColor = "indigo";
        document.getElementById("soup_btn").style.color = "white";

        document.getElementById("chicken_btn").style.backgroundColor = "lightcoral";
        document.getElementById("beef_btn").style.backgroundColor = "lightcoral";
        document.getElementById("all_btn").style.backgroundColor = "lightcoral";
    }
    if (type == "chicken") {
        document.getElementById("chicken_btn").style.backgroundColor = "indigo";
        document.getElementById("chicken_btn").style.color = "white";


        document.getElementById("soup_btn").style.backgroundColor = "lightcoral";
        document.getElementById("beef_btn").style.backgroundColor = "lightcoral";
        document.getElementById("all_btn").style.backgroundColor = "lightcoral";
    }
    if (type == "beef") {
        document.getElementById("beef_btn").style.backgroundColor = "indigo";
        document.getElementById("beef_btn").style.color = "white";


        document.getElementById("soup_btn").style.backgroundColor = "lightcoral";
        document.getElementById("chicken_btn").style.backgroundColor = "lightcoral";
        document.getElementById("all_btn").style.backgroundColor = "lightcoral";
    }
    if (type == "all") {
        document.getElementById("all_btn").style.backgroundColor = "indigo";
        document.getElementById("all_btn").style.color = "white";

        document.getElementById("soup_btn").style.backgroundColor = "lightcoral";
        document.getElementById("chicken_btn").style.backgroundColor = "lightcoral";
        document.getElementById("beef_btn").style.backgroundColor = "lightcoral";
    }
   
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
            src=${item.strMealThumb} class="rounded-md w-[80%] h-[90%] w-80  "
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
