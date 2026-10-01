import { CocktailsEntityBase } from '../CocktailsEntityBase';
import type { CocktailsSDK } from '../CocktailsSDK';
import type { Control } from '../types';
import type { Recipe, RecipeLoadMatch } from '../CocktailsTypes';
declare class RecipeEntity extends CocktailsEntityBase<Recipe> {
    constructor(client: CocktailsSDK, entopts: any);
    make(this: RecipeEntity): RecipeEntity;
    load(this: any, reqmatch?: RecipeLoadMatch, ctrl?: Control): Promise<RecipeEntity>;
}
export { RecipeEntity };
