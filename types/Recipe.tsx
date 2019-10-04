

export interface Category {
    categoryId: number,
    categoryName: string
}
export interface Cuisine {
    cuisineId: number,
    cuisineName: string
}

export interface Recipe {
    recipeId: Number,
    created: Date,
    updated: Date,
    name: string,
    description: string,
    author: string,
    cookingTime: Date,
    prepTime: Date,
    recipeKeywords?: Array<object>,
    recipeCategory: Category,
    recipeCuisine: Cuisine,
    recipeIngredients: string,
    recipeInstructions: string
    quantityServings: number
  }