import { ByIngredientEntity } from './entity/ByIngredientEntity';
import { RandomEntity } from './entity/RandomEntity';
import { RecipeEntity } from './entity/RecipeEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './CocktailsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CocktailsEntityBase } from './CocktailsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CocktailsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    ByIngredient(entopts?: Record<string, any>): ByIngredientEntity;
    Random(entopts?: Record<string, any>): RandomEntity;
    Recipe(entopts?: Record<string, any>): RecipeEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CocktailsSDK;
    tester(testopts?: any, sdkopts?: any): CocktailsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CocktailsSDK;
export { stdutil, config, BaseFeature, CocktailsEntityBase, CocktailsSDK, SDK, };
