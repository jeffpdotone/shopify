import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useConfig } from '../useConfig';

export function useClient(): ApolloClient<NormalizedCacheObject> {
  const { storefrontToken, graphqlUri } = useConfig();

  let client: ApolloClient<NormalizedCacheObject>;

  if (!global.httpLink) {
    global.httpLink = createHttpLink({
      uri: graphqlUri,
    });
  }

  if (!global.authLink) {
    global.authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = storefrontToken;
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          'X-Shopify-Storefront-Access-Token': token ?? '',
        }
      }
    });
  }

  if (!global.client) {
    client = new ApolloClient({
      link: global.authLink.concat(global.httpLink),
      cache: new InMemoryCache()
    });

    global.client = client
  }

  return client
}