

export interface Category {
    categoryId: number,
    categoryName: string
}
export interface Cuisine {
    cuisineId: number,
    cuisineName: string
}

export interface Keyword {
    keywordId: number,
    keywordName: string,
    RecipeKeywords?: Array<object> 
}

export interface Recipe {
    recipeId?: Number | null,
    created: string | null,
    updated: string | null,
    name: string | null,
    description: string | null,
    author: string | null,
    cookingTime: string | null,
    prepTime: string | null,
    recipeKeywords?: Array<object> | null,
    recipeCategory: Category | null,
    recipeCuisine: Cuisine | null,
    recipeIngredients: string | null,
    recipeInstructions: string | null,
    quantityServings: number | null
  }