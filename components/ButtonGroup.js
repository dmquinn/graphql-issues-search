import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  margin: auto;
`;
const ButtonPrimary = styled.button`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;
const ButtonSelected = styled.button`
  padding: 10px 15px;
  background-color: #2da44e;
  color: #fff;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
`;

export const ButtonGroup = ({ buttons, chosenOption, setIssueState }) => {
  return (
    <ButtonContainer>
      {!!buttons &&
        buttons.map((button, i) => {
          return chosenOption == button ? (
            <ButtonSelected>{button}</ButtonSelected>
          ) : (
            <ButtonPrimary key={i} onClick={() => setIssueState(button)}>
              {button}
            </ButtonPrimary>
          );
        })}
    </ButtonContainer>
  );
};
