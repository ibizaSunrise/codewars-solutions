function cakes(recipe, available) {
    let arrRecipe = Object.entries(recipe).sort();
    let arrAvailable = Object.entries(available);
    let stack = [];

    if (arrRecipe.length == 0 || arrAvailable.length == 0 || arrRecipe.length > arrAvailable.length) return 0;

    let entry = arrAvailable.filter(e => Object.keys(recipe).includes(e[0])).sort();

    if (Object.keys(recipe).length != entry.length) return 0;

    for (let i = 0; i < entry.length; i++) {
        if (arrRecipe[i][0] == entry[i][0]) {
            stack.push(Math.floor(entry[i][1] / arrRecipe[i][1]));
        }
    }
    return Math.min(...stack);
}