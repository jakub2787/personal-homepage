import styled from "styled-components";
import { ReactComponent as Icon } from '../images/mark-github.svg';

export const Wrapper = styled.div`
  margin: 72px 0px 0px 0px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
`;

export const PortfolioIcon = styled(Icon)`
  display: grid;
  justify-self: center;
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  justify-self: center;
  font-weight: 900;
  font-size: 30px;
  margin-top: 13px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0px;
`;