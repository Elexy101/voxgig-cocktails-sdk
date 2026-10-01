import { CocktailsEntityBase } from '../CocktailsEntityBase';
import type { CocktailsSDK } from '../CocktailsSDK';
import type { Control } from '../types';
import type { ByIngredient, ByIngredientListMatch } from '../CocktailsTypes';
declare class ByIngredientEntity extends CocktailsEntityBase<ByIngredient> {
    constructor(client: CocktailsSDK, entopts: any);
    make(this: ByIngredientEntity): ByIngredientEntity;
    list(this: any, reqmatch?: ByIngredientListMatch, ctrl?: Control): Promise<ByIngredientEntity[]>;
}
export { ByIngredientEntity };
