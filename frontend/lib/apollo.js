import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://personal-project-367308.oa.r.appspot.com//graphql",
  cache: new InMemoryCache(),
});

export default client;
