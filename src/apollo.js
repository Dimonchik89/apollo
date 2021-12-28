import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "https://test-chat-be.herokuapp.com/graphql",
// });

// export default client;

// import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

const uri = "https://test-chat-be.herokuapp.com/graphql";

const httpLink = createHttpLink({
  uri: uri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("TOKEN");

  return {
    headers: {
      ...headers,
      ["access-token"]: token ? token : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
