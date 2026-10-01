import { CocktailsEntityBase } from '../CocktailsEntityBase';
import type { CocktailsSDK } from '../CocktailsSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../CocktailsTypes';
declare class SearchEntity extends CocktailsEntityBase<Search> {
    constructor(client: CocktailsSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
