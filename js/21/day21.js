const DEBUG = true;

let allAllergens = new Set();
let allIngredients = new Set();
let allRecipes = [];

for (const food of input) {
    let parts = food.replace(")", "").split(/ \(contains /);

    let ingredients = parts[0].split(" ");
    let allergens = parts[1].split(", ");
    //console.log(parts);
    allRecipes.push([ingredients, allergens]);
    for (const allergen of allergens) {
        allAllergens.add(allergen);
    }
    for (const ingredient of ingredients) {
        allIngredients.add(ingredient);
    }
}
/**
 * how many times does each allergen appear in the data?
 */
console.log(allIngredients);
console.log(allAllergens);
DEBUG && console.log("list all the allergens");
for (const allergen of allAllergens) {
    console.log(
        allergen
        + ": "
        + input.filter(food => food.includes(allergen)).length
    );
}

/** 
 * let's pick an allergen
 * and see how many lines it appears in
 * work out which ingredients are common
 */

for (const allergen of allAllergens) {
    /** get an array with 
     * the ingredients of 
     * all the recipies that 
     * includes this allergen
     */

    let thisAllergenRecipies = recipesContaining(allergen);
}

let allIngredientsWithAllergens = new Set();

for (const allergen of allAllergens) {
    let possibleIngredients = possibleIngredientsFor(allergen);
    for (const possibleIngredient of possibleIngredients) {
        console.log("possible ingredients for " + allergen);
        console.log(possibleIngredient);
        allIngredientsWithAllergens.add(possibleIngredient);
    }
}

console.log("all ingredients that could be allergens");
console.log(allIngredientsWithAllergens);

console.log("ingredients that can't be allergens");
console.log(allIngredients.size - allIngredientsWithAllergens.size);

/**
 * Now we need to count the occurences of 
 * the ingredients that are not allergens!
 */

let notAllergens = [];
notAllergens = [...allIngredients].filter(item => !allIngredientsWithAllergens.has(item));
console.log(notAllergens);

let ingredientNotAllergenCount = 0;
for (const ingredient of notAllergens) {
    for (const recipe of allRecipes) {
        ingredientNotAllergenCount += recipeHasIngredient(recipe, ingredient);
    }
}

console.log("ingredientNotAllergenCount " + ingredientNotAllergenCount);

console.log("--- ingredients that could be each allergen");

let allergenMap = calculateAllergens();

// now we can calculate the allergens from the allergenMap
// if we can be bothered

// #### FUNCTIONS #### //

function calculateAllergens() {
    // array of all allergens
    mapAllergenIngredient = new Map();
    let arrAllAllergens = [...allAllergens];
    console.log("arrAllAllergens");
    console.log(arrAllAllergens);
    //while (arrAllAllergens.length > 0) {
        for (let i = 0; i < arrAllAllergens.length; i++) {
            const allergen = arrAllAllergens[i];
            let ingredients = possibleIngredientsFor(allergen);
            console.log(allergen, ingredients);
            mapAllergenIngredient.set(allergen,ingredients);
        }
    //}
    return mapAllergenIngredient;
}

function recipeHasIngredient(recipe, ingredient) {
    // recipe is array with ingredients listed in [0]
    if (recipe[0].includes(ingredient)) {
        return 1;
    }
    return 0;
}

function containsAllergen(ingredient) {

}

function recipesContaining(allergen) {
    let returnarr = [];
    let arr = allRecipes.filter(recipe => recipe[1].includes(allergen));
    for (const recipe of arr) {
        returnarr.push(recipe[0]);
    }
    return returnarr;
}

function findCommon(arrays) {
    // ingredient must be in the first array
    // so loop through the first 
    //  checking element is in all the others

    // we can just count, ASSUMING an ingredient is never repeated
    // let's use a map

    let foodMap = new Map();
    for (const arr of arrays) {
        for (const ingredient of arr) {
            if (foodMap.has(ingredient)) {
                let currentval = foodMap.get(ingredient);
                //console.log(currentval);
                foodMap.set(ingredient, currentval + 1);
            } else {
                foodMap.set(ingredient, 1);
            }
        }
    }
    //return foodMap;

    /** 
     * if any ingredient is in foodMap every time
     * it is a contender to contain the allergen
     */

    let returnarr = [];
    for (const ingredient of [...foodMap.keys()]) {
        if (foodMap.get(ingredient) == arrays.length) {
            returnarr.push(ingredient);
        }
    }
    return returnarr; // should be a list of possible ingreds
}

function possibleIngredientsFor(allergen) {
    return findCommon(recipesContaining(allergen));
}


// lvv,xblchx,tr,gzvsg,jlsqx,fnntr,pmz,csqc
