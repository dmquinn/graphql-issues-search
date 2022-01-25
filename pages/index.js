import styled from "styled-components";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { setContext } from "@apollo/client/link/context";
import { useState } from "react";
import { ButtonGroup } from "../components/ButtonGroup";
import { Search } from "../components/Search";
import { FETCH_ISSUES } from "../queries/index";

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
export default function Home() {
  const { data, loading, error, refetch } = useQuery(FETCH_ISSUES, {
    variables: { cursor: null },
  });

  console.log("data", data, error);
  const [issueState, setIssueState] = useState("OPEN");

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>WHAT!!</p>;
  }

  return (
    <>
      <button
        onClick={() => refetch({ cursor: data.search.pageInfo.endCursor })}
      >
        Next Page
      </button>
      {data.search.nodes.map((issue) => {
        return <p key={issue.id}>{issue.title}</p>;
      })}
    </>
  );
}
