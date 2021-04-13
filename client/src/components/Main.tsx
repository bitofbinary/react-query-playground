import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const Main = (): React.ReactElement => {
  const client = new ApolloClient({
    uri: "http://localhost:8001",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>Main Comp</div>
    </ApolloProvider>
  );
};

export default Main;
