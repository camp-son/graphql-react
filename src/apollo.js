import ApolloClient, { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({ 
          id: `Movie:${id}`, 
          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  },
});

export default client;
