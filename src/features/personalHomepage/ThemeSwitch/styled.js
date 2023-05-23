import styled from "styled-components";
import { ReactComponent as Icon } from '../images/buttonIcon.svg';

export const StyledButton = styled.button`
  padding: 2px;
  width: 48px;
  height: 26px;
  border-radius: 14px;
  margin-left: 12px;
  background-color: ${({ theme }) => theme.colors.themeSwitch.background};
`;

export const ButtonText = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.themeSwitch.colorIcon};
  background-color: ${({ theme }) => theme.colors.themeSwitch.backgroundIcon};
  border-radius: 100%;
  display: flex;
  justify-content: flex-start;
  width: 20px;
  height: 20px;
`;