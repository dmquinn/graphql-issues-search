import { gql } from "@apollo/client";

export const FETCH_ISSUES = gql`
  query getIssues($cursor: String) {
    search(
      query: "repo:facebook/react is:issue"
      type: ISSUE
      first: 10
      after: $cursor
    ) {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
