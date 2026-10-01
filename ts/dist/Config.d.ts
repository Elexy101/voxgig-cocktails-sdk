import { BaseFeature } from './feature/base/BaseFeature';
declare const FEATURE_PLUGINS: Record<string, any[]>;
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
            optspec: {
                entity: string;
                net: string;
            };
            strict: boolean;
            transport: string;
        };
    };
    options: {
        base: string;
        headers: {
            "content-type": string;
        };
        entity: {
            by_ingredient: {};
            random: {};
            recipe: {};
            search: {};
        };
    };
    entity: {
        by_ingredient: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                                reqd?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                                reqd?: undefined;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        random: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        recipe: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                format: string;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format: string;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                slug: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        search: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                format: string;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format: string;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config, FEATURE_PLUGINS, };
