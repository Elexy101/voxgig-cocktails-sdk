# Cocktails TypeScript SDK Reference

Complete API reference for the Cocktails TypeScript SDK.


## CocktailsSDK

### Constructor

```ts
new CocktailsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CocktailsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CocktailsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CocktailsSDK` instance in test mode.


### Instance Methods

#### `ByIngredient(data?: object)`

Create a new `ByIngredient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ByIngredientEntity` instance.

#### `Random(data?: object)`

Create a new `Random` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RandomEntity` instance.

#### `Recipe(data?: object)`

Create a new `Recipe` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecipeEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CocktailsSDK.test()`.

**Returns:** `CocktailsSDK` instance in test mode.


---

## ByIngredientEntity

```ts
const by_ingredient = client.ByIngredient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_make` | `Record<string, any>` | No |  |
| `have` | `any[]` | No |  |
| `one_away` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ByIngredient().list({ have: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ByIngredientEntity` instance with the same client and
options.

#### `client()`

Return the parent `CocktailsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RandomEntity

```ts
const random = client.Random()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `string` | No | As printed: 30 ml, 2 dashes, 1 wedge |
| `key` | `string` | No |  |
| `ml` | `number` | No |  |
| `name` | `string` | No |  |
| `optional` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Random().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RandomEntity` instance with the same client and
options.

#### `client()`

Return the parent `CocktailsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecipeEntity

```ts
const recipe = client.Recipe()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abv` | `number` | No | Strength, % ABV |
| `attribution` | `string` | No |  |
| `base` | `string` | No |  |
| `categories` | `any[]` | No |  |
| `description` | `string` | No |  |
| `difficulty` | `number` | No |  |
| `garnish` | `string` | No |  |
| `glass` | `string` | No |  |
| `glass_key` | `string` | No |  |
| `ice` | `string` | No |  |
| `id` | `string` | No |  |
| `ingredients` | `any[]` | No |  |
| `method` | `string` | No |  |
| `method_key` | `string` | No |  |
| `name` | `string` | No |  |
| `name_en` | `string` | No |  |
| `photo` | `string` | No |  |
| `prep_minutes` | `number` | No |  |
| `slug` | `string` | No |  |
| `steps` | `any[]` | No |  |
| `url` | `string` | No | The recipe page. |
| `variants` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Recipe().load({ id: 'recipe_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecipeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CocktailsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abv` | `number` | No | Strength, % ABV |
| `base` | `string` | No |  |
| `categories` | `any[]` | No |  |
| `glass` | `string` | No |  |
| `ingredients` | `any[]` | No |  |
| `method` | `string` | No |  |
| `name` | `string` | No |  |
| `name_en` | `string` | No |  |
| `photo` | `string` | No |  |
| `prep_minutes` | `number` | No |  |
| `slug` | `string` | No |  |
| `url` | `string` | No | The recipe page. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `CocktailsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CocktailsSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

