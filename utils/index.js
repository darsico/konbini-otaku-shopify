import { endpoint } from "../endpoints"

export const storeFront = async (query, variables = {}) => {
 let response
 try {
  response = await fetch(
   endpoint, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": "0511da5c4b3e3dcc59a4ceecf60e89fe",
   },
   body: JSON.stringify({ query, variables })
  }
  )
 } catch (error) {
  console.error(error)
 }

 return response.json()
}