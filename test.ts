import { CocktailsSDK } from './ts/dist/CocktailsSDK';

async function main() {
  const client = new CocktailsSDK();
  const search = await client.Search().list({ q: 'gin', limit: 3 });
  console.log(JSON.stringify(search, null, 2));
}

main().catch(console.error);