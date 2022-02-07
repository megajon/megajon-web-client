import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";


const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://megajon-web-api.herokuapp.com/api/graphql', fetch }),
    // link: new HttpLink({ uri: 'http://localhost:3001/api/graphql', fetch }),
    // uri: "http://localhost:3001/api/graphql",
    cache: new InMemoryCache(),
});

export default client;