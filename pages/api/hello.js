export const getIssues = async () => {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        search(query: "repo:facebook/react is:issue", type: ISSUE, first: 10) {
          nodes {
            ... on Issue {
              id
              author {
                login
              }
              state
              number
              title
            }
          }
        }
      }
    `,
  });
  const cache = new InMemoryCache({
    typePolicies: {
      First: {
        // In an inventory management system, products might be identified
        // by their UPC.
        keyFields: ["title"],
      },
      Second: {
        // In a user account system, the combination of a person's name AND email
        // address might uniquely identify them.
        keyFields: ["number", "body"],
      },
    },
  });
  console.log("cache", cache);
};
