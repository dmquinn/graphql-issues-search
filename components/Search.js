import styled from "styled-components";

export const Search = ({ setUserQuery, userQuery }) => {
  return (
    <>
      {" "}
      <input
        type="text"
        placeholder="Search owner"
        onChange={(e) => setUserQuery({ ...e, owner: e.target.value })}
      />
      <input
        type="text"
        placeholder="Search repo"
        onChange={(e) => setUserQuery({ ...e, repo: e.target.value })}
      />
    </>
  );
};
