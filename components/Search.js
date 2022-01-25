import styled from "styled-components";

const SearchInput = styled.input`
  height: 36px;
  width: 50%;
  margin-left: 50px;
  padding: 16px;
  border-radius: 4px;
  background-color: #24292f;
  border: 1px solid gray;
`;

export const Search = () => {
  return (
    <SearchInput
      type="text"
      placeholder="Search issues by title or description"
    />
  );
};
