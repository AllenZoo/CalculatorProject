import styled from "styled-components";

export const CenteredButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  font-family: League Spartan;
  font-weigth: 700;
  padding-top: 7px;
`;

export const LongButton = styled(CenteredButton)`
  width: 163px;
  height: 50px;

  border: none;
  border-radius: 10px;
`;

export const OperationsButton = styled(CenteredButton)`
  background-color: hsl(30, 25%, 89%);
  width: 75px;
  height: 50px;

  color: hsl(221, 14%, 31%);

  border: none;
  border-radius: 10px;

  box-shadow: 0px 3px 1px hsla(28, 16%, 65%, 1);

  &:hover {
    background-color: hsl(225, 21%, 100%);
  }
  &:active {
    background-color: hsl(30, 25%, 80%);
  }
`;

export const DeleteButton = styled(OperationsButton)`
  background-color: hsl(225, 21%, 49%);
  color: white;
  box-shadow: 0px 3px 1px hsla(224, 28%, 35%);
  &:hover {
    background-color: hsl(225, 21%, 65%);
  }
  &:active {
    background-color: hsl(225, 21%, 40%);
  }
`;

export const ResetButton = styled(LongButton)`
  background-color: hsl(225, 21%, 49%);
  color: white;
  box-shadow: 0px 3px 1px hsla(224, 28%, 35%);

  &:hover {
    background-color: hsl(225, 21%, 65%);
  }
  &:active {
    background-color: hsl(225, 21%, 40%);
  }
`;

export const EqualsButton = styled(LongButton)`
  background-color: hsl(6, 63%, 50%);
  color: white;
  box-shadow: 0px 3px 1px hsla(6, 70%, 34%);
  &:hover {
    background-color: hsl(6, 63%, 60%);
  }
  &:active {
    background-color: hsl(6, 63%, 40%);
  }
`;

export const KeyPad = styled.div`
  background-color: hsl(223, 31%, 20%);
  width: 340px;
  max-width: 340px;

  display: flex;
  flex-direction: column;

  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  // grid-template-rows: 1fr 1fr 1fr 1fr;

  border: none;
  border-radius: 15px;

  row-gap: 10px;
  column-gap: 20px;
  padding: 20px;
`;

export const KeyPadRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Screen = styled.div`
  width: 340px;
  height: 60px;
  border: none;
  border-radius: 15px;
  background-color: hsl(224, 36%, 15%);

  font-size: 32px;
  font-family: League Spartan;
  font-weigth: 700;

  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  color: white;
`;
