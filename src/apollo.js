import { ApolloClient, InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  link: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export default client;
