import { shop, storefrontAccessToken } from "./endpoints";
import { GraphQLClient } from "graphql-request";

const shopify = async (query, variables) => {
  const endpoint = `https://tienda-estacion-otaku.myshopify.com/api/2022-10/graphql.json`;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
  });
  const data = await graphQLClient.request(query, variables)
  return data;
};
export default shopify;
