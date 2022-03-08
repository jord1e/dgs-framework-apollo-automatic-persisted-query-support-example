const {HttpLink, InMemoryCache, ApolloClient} = require("@apollo/client/core");
const {createPersistedQueryLink} = require("@apollo/client/link/persisted-queries");
const crypto = require("crypto")
const fetch = require("node-fetch")
const {gql} = require("@apollo/client/core");

function sha256(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

const httpLink = new HttpLink({uri: "http://localhost:8080/graphql", fetch});
const persistedQueriesLink = createPersistedQueryLink({sha256, useGETForHashedQueries: false});
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: persistedQueriesLink.concat(httpLink)
});

(async function () {
    const result = await client.query({
        query: gql`{ testApq }`
    })
    console.log(result)
})();