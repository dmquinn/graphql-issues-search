import styled from "styled-components";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { setContext } from "@apollo/client/link/context";
import { useState } from "react";
import { ButtonGroup } from "../components/ButtonGroup";
import { Search } from "../components/Search";
import SBubble from "../public/speech.png";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px;
  background-color: #24292f;
  margin-bottom: 40px;
`;
const TitleCard = styled.div`
  border: 1px solid #d8dee4;
  padding: 16px 16px 0px 16px;
  font-weight: 600;
`;
const TotalCountRow = styled.div`
  background-color: #f6f8fa;
  padding: 30px;
  border: 1px solid #d8dee4;
  border-radius: 5px 5px 0 0;
`;
const TitleContainer = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1012px) {
    padding-right: 32px;
    padding-left: 32px;
  }
  @media (min-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;
{
  /* ////////////////////////////// */
}

export const SpeechBubbleContainer = styled.div`
  text-align: end;
`;
{
  /* ////////////////////////////// */
}

export const Label = styled.span`
  padding: 3px 10px 3px 10px;
  border-radius: 20px;
  margin-left: 5px;
  font-size: 12px;
  display: inline-block;
  width: max-content;
`;
const AuthDate = styled.h5`
  font-weight: 200;
  margin-top: 5px;
`;
export default function Home({ issues }) {
  console.log(issues);
  const [issueState, setIssueState] = useState("OPEN");
  const dateFixer = (a) => {
    const date = a.split("D").pop().split("T").shift();
    return date;
  };
  const handleChange = () => {
    console.log("change");
  };

  return (
    <>
      <input onChange={handleChange} />;
      {issues.search.nodes.map((issue, i) => {
        return (
          <>
            {" "}
            <TotalCountRow key={i}>ISSUE NR:{issue.number}</TotalCountRow>
            <TotalCountRow key={i}>
              ISSUE TITLE:{issue.title} TOTAL
            </TotalCountRow>
          </>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
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
  const issues = data;

  return {
    props: { issues: issues },
  };
}
