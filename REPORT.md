# Voxgig SDK Generator — Developer Experience Report

**Author:** Emmanuel Ekpe  
**API:** 24cocktails Recipe API (https://24cocktails.com)  
**Date:** September 2026  
**Environment:** Node.js v22.2.0 and v26.2.0, Ubuntu Linux, `@voxgig/create-sdkgen@latest`, `@voxgig/sdkgen`

## Summary

I generated a TypeScript SDK for the 24cocktails Recipe API using the Voxgig SDK generator. The generator correctly detected 4 entities from the OpenAPI 3.1 spec, produced compiling TypeScript, and the resulting SDK successfully called the live API to return recipe data. 

Total human time was roughly 30 minutes, though a meaningful portion of that was spent resolving tooling friction rather than interacting with the SDK itself. 

## What worked well

1. **Entity detection.** The generator auto-detected 4 entities (`search`, `recipe`, `random`, `by_ingredient`) from the spec and mapped each to the correct HTTP operation.
2. **Generated code quality.** The TypeScript SDK compiled with no errors. The type definitions for `Recipe`, `RecipeSummary`, and `Ingredient` matched the spec's `components/schemas` closely.
3. **No-auth APIs are frictionless.** Because 24cocktails needs no API key, I could test the generated client immediately.
4. **Working live call.** `client.Search().list({ q: 'gin', limit: 3 })` returned three cocktails with ingredients, ABV, method, glass, and URL — proving the entity model maps cleanly to the upstream API.

## Issues encountered

### tsx crashes on Node.js v26 (works on v22 LTS)
Running the generated TypeScript examples with npx tsx on Node v26.2.0 crashes inside tsx itself, before any user code executes:

```text
SyntaxError: Unexpected token '{'
    at Loader.moduleStrategy (internal/modules/esm/translators.js:145:18)
    at async link (internal/modules/esm/module_job.js:67:21)
```
The error is not in my test script or the SDK — it comes from tsx's own cli.mjs. Switching to Node v22.2.0 via nvm use 22 fixed it immediately. The compiled SDK also runs cleanly with plain node on the .js output in dist/, with no TypeScript runner required.
Recommendation: Add a line to the generated ts/README.md stating which Node versions are tested (e.g., "Tested on Node 20 and 22 LTS") and suggest running the compiled dist/ output with plain node for quick tests, so users on the latest Node aren't blocked.
