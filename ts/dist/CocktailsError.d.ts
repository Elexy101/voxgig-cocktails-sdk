import { Context } from './Context';
declare class CocktailsError extends Error {
    isCocktailsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CocktailsError };
