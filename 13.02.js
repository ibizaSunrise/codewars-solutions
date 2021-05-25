function cakes(recipe, available) {
    return Math.min(
        ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
    )
}