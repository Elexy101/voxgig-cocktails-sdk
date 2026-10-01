import { CocktailsEntityBase } from '../CocktailsEntityBase';
import type { CocktailsSDK } from '../CocktailsSDK';
import type { Control } from '../types';
import type { Random, RandomListMatch } from '../CocktailsTypes';
declare class RandomEntity extends CocktailsEntityBase<Random> {
    constructor(client: CocktailsSDK, entopts: any);
    make(this: RandomEntity): RandomEntity;
    list(this: any, reqmatch?: RandomListMatch, ctrl?: Control): Promise<RandomEntity[]>;
}
export { RandomEntity };
