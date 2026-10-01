import type { Context, FeatureOptions } from '../../types';
import type { CocktailsSDK } from '../../CocktailsSDK';
import { BaseFeature } from '../base/BaseFeature';
declare function mintId(): string;
declare function ownIdField(config: any, getpath: any, entityName: string): string;
declare class TestFeature extends BaseFeature {
    version: string;
    name: string;
    active: boolean;
    _client?: CocktailsSDK;
    _options?: any;
    init(ctx: Context, options: FeatureOptions): void | Promise<any>;
    makeNetsim(this: any, net: any, inner: any): (ctx: any, url: string, fetchdef: any) => Promise<any>;
    buildArgs(ctx: any, op: any, args: any): any;
}
export { TestFeature, ownIdField, mintId, };
