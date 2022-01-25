import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import Image from "next/image";
import { Label } from "./index";

const SingleIssue = () => {
  const issue = {
    __typename: "Issue",
    id: "I_kwDOAJy2Ks5B3hbp",
    author: {
      __typename: "User",
      avatarUrl:
        "https://avatars.githubusercontent.com/u/65865227?u=586c3d65dc57592fd1440b64b2834601bf4f7b31&v=4",
      id: "MDQ6VXNlcjY1ODY1MjI3",
      login: "bmwasonga",
    },
    state: "CLOSED",
    title:
      "[DevTools Bug]: not sure if bug or  not:  devtools marks Youtube as built with react.",
    createdAt: "2022-01-16T14:57:01Z",
    labels: {
      __typename: "LabelConnection",
      nodes: [
        {
          __typename: "Label",
          name: "Type: Bug",
          color: "b60205",
        },
        {
          __typename: "Label",
          name: "Resolution: Duplicate",
          color: "cccccc",
        },
        {
          __typename: "Label",
          name: "Status: Unconfirmed",
          color: "d4c5f9",
        },
        {
          __typename: "Label",
          name: "Component: Developer Tools",
          color: "fbca04",
        },
      ],
    },
    number: 23124,
    comments: {
      __typename: "IssueCommentConnection",
      nodes: [
        {
          __typename: "IssueComment",
          author: {
            __typename: "User",
            id: "MDQ6VXNlcjI5NTk3",
            avatarUrl:
              "https://avatars.githubusercontent.com/u/29597?s=100&u=417a1ec63c2396239beb9453aafdd54275c94765&v=4",
            login: "bvaughn",
          },
          createdAt: "2022-01-16T17:56:47Z",
          id: "IC_kwDOAJy2Ks48bzqt",
          bodyHTML:
            '<p dir="auto">This bug is caused by Redux DevTools: <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1103965132" data-permission-text="Title is private" data-url="https://github.com/zalmoxisus/redux-devtools-extension/issues/829" data-hovercard-type="issue" data-hovercard-url="/zalmoxisus/redux-devtools-extension/issues/829/hovercard" href="https://github.com/zalmoxisus/redux-devtools-extension/issues/829">zalmoxisus/redux-devtools-extension#829</a></p>\n<p dir="auto">Duplicate of <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1103028148" data-permission-text="Title is private" data-url="https://github.com/facebook/react/issues/23107" data-hovercard-type="issue" data-hovercard-url="/facebook/react/issues/23107/hovercard" href="https://github.com/facebook/react/issues/23107">#23107</a></p>',
        },
      ],
      totalCount: 1,
    },
    bodyHTML:
      '<h3 dir="auto">Website or app</h3>\n<p dir="auto"><a href="https://www.youtube.com/" rel="nofollow">https://www.youtube.com/</a></p>\n<h3 dir="auto">Repro steps</h3>\n<p dir="auto">I was watching a video on youtube when I noticed the new video hover features which were not there on the 15th of January 2022.<br>\nThis then led me to the react dev tools which I noticed had turned blue, never had before. wanted to know of this is a bug or not.<br>\nI have restarted my computer and browser severally.</p>\n<p dir="auto">[](url<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/65865227/149665223-b3243940-c1b0-418f-bfba-a8ca9eebb885.png"><img src="https://user-images.githubusercontent.com/65865227/149665223-b3243940-c1b0-418f-bfba-a8ca9eebb885.png" alt="tube" style="max-width: 100%;"></a><br>\n)</p>\n<h3 dir="auto">How often does this bug happen?</h3>\n<p dir="auto">Every time</p>\n<h3 dir="auto">DevTools package (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">DevTools version (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error message (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error call stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">Error component stack (automated)</h3>\n<p dir="auto"><em>No response</em></p>\n<h3 dir="auto">GitHub query string (automated)</h3>\n<p dir="auto"><em>No response</em></p>',
  };
  console.log(issue);
  const dateFixer = (a) => {
    const date = a.split("D").pop().split("T").shift();
    return date;
  };

  ////////STYLES////////////////
  const Wrapper = styled.div`
    width: 71%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
      width: 90%;
    }
  `;
  const TitleContainer = styled.div`
    border-bottom: 1px solid #d8dee4;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;
  const Title = styled.h1`
    font-weight: 400;
  `;
  const Number = styled.h1`
    font-weight: 200;
    color: gray;
    margin-top: -20px;
  `;
  const Row = styled.div`
    display: flex;
  `;
  const Status = styled.h3`
    padding: 5px 0 10px;
    width: 90px;
    color: white;
    text-align: center;
    border-radius: 20px;
    font-weight: 400;
    background-color: ${(props) =>
      props.state == "OPEN" ? "#2da44e" : "#8250df"};
  `;
  const IssueData = styled.span`
    font-weight: 400;
    color: gray;
    padding: 24px;
  `;
  const TotalCountRow = styled.div`
    background-color: #f6f8fa;
    margin-top: 20px;
    padding: 10px;
    color: gray;
    border: 1px solid #d8dee4;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
  `;
  const CommentsContainer = styled.div``;
  const Avatar = styled.img`
    border-radius: 50%;
    height: 50px;
    margin-right: 20px;
    @media (min-width: 768px) {
      transform: translateX(-80px);
    }
  `;
  const BodyBox = styled.div`
    border: 1px solid #d8dee4;
    margin-top: -1px;
    padding: 15px;
  `;

  const Comment = styled.div``;
  return (
    <>
      <Wrapper>
        <TitleContainer>
          <Title>{issue.title}</Title>
          <Number>#{issue.number}</Number>
          <Row>
            <Status state={issue.state}>{issue.state.toLowerCase()}</Status>

            <IssueData>
              {issue.author.login} opened this issue on{" "}
              {dateFixer(issue.createdAt)}
            </IssueData>
          </Row>{" "}
        </TitleContainer>
        {issue.labels.nodes.map((label, i) => {
          return (
            <>
              <Label
                style={{
                  backgroundColor: `#${label.color}`,
                  color: label.name.includes("Bug") && "white",
                }}
                key={i}
              >
                {label.name}
              </Label>
            </>
          );
        })}
        <TotalCountRow>
          <Avatar src={issue.author.avatarUrl} />{" "}
          {!issue.bodyHTML ? (
            <i>No description provided</i>
          ) : (
            issue.author.login + " commented on" + dateFixer(issue.createdAt)
          )}
        </TotalCountRow>
        <>
          <BodyBox dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
          {issue.comments.nodes.map((comment, i) => {
            return (
              <>
                <TotalCountRow>
                  <Avatar src={comment.author.avatarUrl} />
                  <p>
                    {comment.author.login} commented on{" "}
                    {dateFixer(comment.createdAt)}
                  </p>
                </TotalCountRow>
                <BodyBox
                  key={i}
                  dangerouslySetInnerHTML={{ __html: comment.bodyHTML }}
                />
              </>
            );
          })}
        </>
      </Wrapper>
    </>
  );
};

export default SingleIssue;
