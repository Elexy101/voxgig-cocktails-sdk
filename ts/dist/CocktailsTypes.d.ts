export interface ByIngredient {
    can_make?: Record<string, any>;
    have?: any[];
    one_away?: Record<string, any>;
}
export interface ByIngredientListMatch {
    have: string;
    lang?: string;
    limit?: number;
}
export interface Random {
    amount?: string;
    key?: string;
    ml?: number;
    name?: string;
    optional?: boolean;
}
export interface RandomListMatch {
    base?: string;
    cat?: string;
    lang?: string;
}
export interface Recipe {
    abv?: number;
    attribution?: string;
    base?: string;
    categories?: any[];
    description?: string;
    difficulty?: number;
    garnish?: string;
    glass?: string;
    glass_key?: string;
    ice?: string;
    id?: string;
    ingredients?: any[];
    method?: string;
    method_key?: string;
    name?: string;
    name_en?: string;
    photo?: string;
    prep_minutes?: number;
    slug?: string;
    steps?: any[];
    url?: string;
    variants?: any[];
}
export interface RecipeLoadMatch {
    id: string;
    lang?: string;
}
export interface Search {
    abv?: number;
    base?: string;
    categories?: any[];
    glass?: string;
    ingredients?: any[];
    method?: string;
    name?: string;
    name_en?: string;
    photo?: string;
    prep_minutes?: number;
    slug?: string;
    url?: string;
}
export interface SearchListMatch {
    base?: string;
    cat?: string;
    glass?: string;
    lang?: string;
    limit?: number;
    method?: string;
    offset?: number;
    q?: string;
}
