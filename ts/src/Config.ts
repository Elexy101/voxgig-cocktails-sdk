
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Cocktails',
        slug: "cocktails",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://24cocktails.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        by_ingredient: {
        },
  
        random: {
        },
  
        recipe: {
        },
  
        search: {
        },
  
    }
  }


  entity = {
    "by_ingredient": {
      "fields": [
        {
          "name": "can_make",
          "title": "Can Make",
          "type": "`$OBJECT`"
        },
        {
          "name": "have",
          "title": "Have",
          "type": "`$ARRAY`"
        },
        {
          "name": "one_away",
          "title": "One Away",
          "type": "`$OBJECT`"
        }
      ],
      "name": "by_ingredient",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/by-ingredients",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "by-ingredients"
                }
              ],
              "parts": [
                "api",
                "v1",
                "by-ingredients"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "have",
                    "orig": "have",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "have",
                  "lang",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "random": {
      "fields": [
        {
          "name": "amount",
          "title": "Amount",
          "type": "`$STRING`",
          "short": "As printed: 30 ml, 2 dashes, 1 wedge"
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`"
        },
        {
          "name": "ml",
          "title": "Ml",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "optional",
          "title": "Optional",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "random",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/random",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "random"
                }
              ],
              "parts": [
                "api",
                "v1",
                "random"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "base",
                    "orig": "base",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "cat",
                    "orig": "cat",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  }
                ]
              },
              "select": {
                "exist": [
                  "base",
                  "cat",
                  "lang"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "recipe": {
      "fields": [
        {
          "name": "abv",
          "title": "Abv",
          "type": "`$INTEGER`",
          "short": "Strength, % ABV"
        },
        {
          "name": "attribution",
          "title": "Attribution",
          "type": "`$STRING`"
        },
        {
          "name": "base",
          "title": "Base",
          "type": "`$STRING`"
        },
        {
          "name": "categories",
          "title": "Categories",
          "type": "`$ARRAY`"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "difficulty",
          "title": "Difficulty",
          "type": "`$INTEGER`"
        },
        {
          "name": "garnish",
          "title": "Garnish",
          "type": "`$STRING`"
        },
        {
          "name": "glass",
          "title": "Glass",
          "type": "`$STRING`"
        },
        {
          "name": "glass_key",
          "title": "Glass Key",
          "type": "`$STRING`"
        },
        {
          "name": "ice",
          "title": "Ice",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "ingredients",
          "title": "Ingredients",
          "type": "`$ARRAY`"
        },
        {
          "name": "method",
          "title": "Method",
          "type": "`$STRING`"
        },
        {
          "name": "method_key",
          "title": "Method Key",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "name_en",
          "title": "Name En",
          "type": "`$STRING`"
        },
        {
          "name": "photo",
          "title": "Photo",
          "type": "`$STRING`",
          "format": "uri"
        },
        {
          "name": "prep_minutes",
          "title": "Prep Minutes",
          "type": "`$INTEGER`"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`"
        },
        {
          "name": "steps",
          "title": "Steps",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The recipe page.",
          "format": "uri"
        },
        {
          "name": "variants",
          "title": "Variants",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "recipe",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/recipe/{slug}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "recipe"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v1",
                "recipe",
                "{id}"
              ],
              "rename": {
                "param": {
                  "slug": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "lang"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "abv",
          "title": "Abv",
          "type": "`$INTEGER`",
          "short": "Strength, % ABV"
        },
        {
          "name": "base",
          "title": "Base",
          "type": "`$STRING`"
        },
        {
          "name": "categories",
          "title": "Categories",
          "type": "`$ARRAY`"
        },
        {
          "name": "glass",
          "title": "Glass",
          "type": "`$STRING`"
        },
        {
          "name": "ingredients",
          "title": "Ingredients",
          "type": "`$ARRAY`"
        },
        {
          "name": "method",
          "title": "Method",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "name_en",
          "title": "Name En",
          "type": "`$STRING`"
        },
        {
          "name": "photo",
          "title": "Photo",
          "type": "`$STRING`",
          "format": "uri"
        },
        {
          "name": "prep_minutes",
          "title": "Prep Minutes",
          "type": "`$INTEGER`"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The recipe page.",
          "format": "uri"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/search",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "api",
                "v1",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "base",
                    "orig": "base",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "cat",
                    "orig": "cat",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "glass",
                    "orig": "glass",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "method",
                    "orig": "method",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "base",
                  "cat",
                  "glass",
                  "lang",
                  "limit",
                  "method",
                  "offset",
                  "q"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

