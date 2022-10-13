import styled from "styled-components";

export const CenteredButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  font-family: League Spartan;
  font-weight: 700;
  padding-top: 7px;
`;

export const LongButton = styled(CenteredButton)`
  width: 163px;
  height: 50px;

  border: none;
  border-radius: 10px;
`;

export const OperationsButton = styled(CenteredButton)`
  background-color: ${(props) => props.theme.op_key_bg};
  width: 75px;
  height: 50px;

  color: ${(props) => props.theme.op_key_text};

  border: none;
  border-radius: 10px;

  box-shadow: 0px 3px 1px ${(props) => props.theme.op_key_bg_shadow};

  &:hover {
    background-color: ${(props) => props.theme.op_key_bg_hover};
  }
  &:active {
    background-color: ${(props) => props.theme.op_key_bg_active};
  }
`;

export const DeleteButton = styled(OperationsButton)`
  background-color: ${(props) => props.theme.dr_key_bg};
  color: ${(props) => props.theme.dr_key_text};
  box-shadow: 0px 3px 1px ${(props) => props.theme.dr_key_bg_shadow};
  &:hover {
    background-color: ${(props) => props.theme.dr_key_bg_hover};
  }
  &:active {
    background-color: ${(props) => props.theme.dr_key_bg_active};
  }
`;

export const ResetButton = styled(LongButton)`
  background-color: ${(props) => props.theme.dr_key_bg};
  color: ${(props) => props.theme.dr_key_text};
  box-shadow: 0px 3px 1px ${(props) => props.theme.dr_key_bg_shadow};

  &:hover {
    background-color: ${(props) => props.theme.dr_key_bg_hover};
  }
  &:active {
    background-color: ${(props) => props.theme.dr_key_bg_active};
  }
`;

export const EqualsButton = styled(LongButton)`
  background-color: ${(props) => props.theme.et_key_bg};
  color: ${(props) => props.theme.et_key_text};
  box-shadow: 0px 3px 1px ${(props) => props.theme.et_key_bg_shadow};
  &:hover {
    background-color: ${(props) => props.theme.et_key_bg_hover};
  }
  &:active {
    background-color: ${(props) => props.theme.et_key_bg_active};
  }
`;

export const KeyPad = styled.div`
  background-color: ${(props) => props.theme.tk_bg};
  width: 340px;
  max-width: 340px;

  display: flex;
  flex-direction: column;

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
  background-color: ${(props) => props.theme.screen_bg};

  font-size: 32px;
  font-family: League Spartan;
  font-weigth: 700;

  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => props.theme.screen_text};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 30px;
  overflow: visible;

  & > .title {
    padding-top: 7px;
    font-size: 32px;
    font-family: League Spartan;
    font-weight: 700;
    color: ${(props) => props.theme.screen_text};
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  flex-direction: row;
  width: 130px;
  align-items: center;
  justify-content: space-between;

  & > .text {
    padding-top: 5px;
    letter-spacing: -1px;
    font-size: 12px;
    font-family: League Spartan;
    font-weight: 700;
    color: ${(props) => props.theme.screen_text};
  }
  font-family: League Spartan;
  font-weight: 700;
`;

export const SliderContainer = styled.div`
  background-color: ${(props) => props.theme.tk_bg};

  width: 60px;
  height: 30px;
  border: none;
  border-radius: 15px;
  padding-left: 5px;
  padding-right: 5px;

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.theme.t_align};
  align-items: center;
`;

export const SliderLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: ${(props) => props.theme.screen_text};
`;

export const SliderLabel = styled(SliderContainer)`
  background-color: rgba(0, 0, 0, 0);
  width: 45px;
  margin-right: 7px;
  justify-content: space-between;
  align-items: flex-end;

  & > div {
    font-size: 12px;
    font-family: League Spartan;
    font-weight: 700;
  }
`;

export const TopContainer = styled.div`
  flex: display;
  flex-direction: column;
`;

export const ThemeButton = styled(CenteredButton)`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.et_key_bg};

  &:hover {
    background-color: ${(props) => props.theme.et_key_bg_hover};
  }
  &:active {
    background-color: ${(props) => props.theme.et_key_bg_active};
  }

  font-size: 32px;
  font-family: League Spartan;
  font-weigth: 700;
  letter-spacing: 1px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const GlobalWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main_bg};

  & > .subwrapper {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
`;
