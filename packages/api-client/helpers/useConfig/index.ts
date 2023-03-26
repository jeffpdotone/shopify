export function useConfig(middlewareConfig?: any) {
  global.middlewareConfig = middlewareConfig

  if (!global.middlewareConfig?.integrations?.shopify?.configuration) {
    throw new Error('Missing middleware configuration')
  }

  const { storefrontName, storefrontVersion } = global.middlewareConfig.integrations.shopify.configuration

  return {
    ...global.middlewareConfig.integrations.shopify.configuration,
    graphqlUri: `https://${storefrontName}.myshopify.com/api/${storefrontVersion}/graphql.json`
  }
}